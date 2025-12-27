#!/bin/bash

# Script to find Google Places API credentials on Drupal server
# Usage: ./find-google-credentials.sh

SERVER="root@159.223.116.155"
SEARCH_DIR="/var/www/obesityherniasurgery.com/drupal/web"
SEARCH_PATTERNS=(
    "GOOGLE"
    "PLACES_API"
    "PLACE_ID"
    "AIza"  # Google API keys start with AIza
    "google.*api.*key"
    "google.*place"
)

echo "=========================================="
echo "Searching for Google Places API Credentials"
echo "Server: $SERVER"
echo "Directory: $SEARCH_DIR"
echo "=========================================="
echo ""

# Check if directory exists
echo "Checking if directory exists..."
if ssh $SERVER "test -d $SEARCH_DIR"; then
    echo "✓ Directory found!"
else
    echo "✗ Directory not found! Exiting."
    exit 1
fi
echo ""

# Function to search in a directory
search_directory() {
    local dir=$1
    echo "Searching in: $dir"
    echo "----------------------------------------"
    
    # Search for common patterns
    for pattern in "${SEARCH_PATTERNS[@]}"; do
        ssh $SERVER "find $dir -type f \( -name '*.php' -o -name '*.env' -o -name '*.conf' -o -name '*.ini' -o -name '*.json' -o -name '*.yml' -o -name '*.yaml' -o -name 'settings.php' -o -name 'settings.local.php' \) 2>/dev/null | xargs grep -l -i '$pattern' 2>/dev/null | head -20" | while read file; do
            if [ ! -z "$file" ]; then
                echo "Found in: $file"
                ssh $SERVER "grep -i '$pattern' '$file' 2>/dev/null | grep -v '^#' | head -5"
                echo ""
            fi
        done
    done
    echo ""
}

# Search in the specified Drupal directory
echo "1. Searching in Drupal directory..."
echo ""
search_directory "$SEARCH_DIR"

# Search for .env files
echo "2. Searching for .env files..."
echo ""
ssh $SERVER "find $SEARCH_DIR -name '.env' -o -name '.env.local' -o -name '.env.production' 2>/dev/null" | while read env_file; do
    if [ ! -z "$env_file" ]; then
        echo "Found .env file: $env_file"
        ssh $SERVER "grep -i -E '(GOOGLE|PLACES|PLACE_ID|AIza)' '$env_file' 2>/dev/null | grep -v '^#'"
        echo ""
    fi
done

# Search in settings.php files
echo "3. Searching in settings.php files..."
echo ""
ssh $SERVER "find $SEARCH_DIR -name 'settings.php' 2>/dev/null" | while read settings_file; do
    if [ ! -z "$settings_file" ]; then
        echo "Checking: $settings_file"
        ssh $SERVER "grep -i -E '(GOOGLE|PLACES|PLACE_ID|AIza)' '$settings_file' 2>/dev/null | grep -v '^#' | head -10"
        echo ""
    fi
done

# Search in configuration directories
echo "4. Searching in configuration directories..."
echo ""
ssh $SERVER "find $SEARCH_DIR -type d -name 'config' -o -name 'configuration' 2>/dev/null" | while read config_dir; do
    if [ ! -z "$config_dir" ]; then
        search_directory "$config_dir"
    fi
done

# Search in sites directory (common Drupal location)
echo "5. Searching in sites directory..."
echo ""
ssh $SERVER "find $SEARCH_DIR -type d -name 'sites' 2>/dev/null" | while read sites_dir; do
    if [ ! -z "$sites_dir" ]; then
        search_directory "$sites_dir"
    fi
done

# Extract database credentials from settings.php and search database
echo "6. Extracting database credentials and searching database..."
echo ""

# Find settings.php file
SETTINGS_FILE=$(ssh $SERVER "find $SEARCH_DIR -name 'settings.php' -type f 2>/dev/null | head -1")

if [ ! -z "$SETTINGS_FILE" ]; then
    echo "Found settings.php: $SETTINGS_FILE"
    echo "Extracting database credentials..."
    
    # Extract database connection details from settings.php
    # Drupal 8 uses $databases array
    DB_NAME=$(ssh $SERVER "grep -oP \"\\\$databases\['default'\]\['default'\]\['database'\]\s*=\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE | head -1")
    DB_USER=$(ssh $SERVER "grep -oP \"\\\$databases\['default'\]\['default'\]\['username'\]\s*=\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE | head -1")
    DB_PASS=$(ssh $SERVER "grep -oP \"\\\$databases\['default'\]\['default'\]\['password'\]\s*=\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE | head -1")
    DB_HOST=$(ssh $SERVER "grep -oP \"\\\$databases\['default'\]\['default'\]\['host'\]\s*=\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE | head -1")
    DB_PORT=$(ssh $SERVER "grep -oP \"\\\$databases\['default'\]\['default'\]\['port'\]\s*=\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE | head -1")
    
    # If not found, try alternative Drupal 8 format
    if [ -z "$DB_NAME" ]; then
        DB_NAME=$(ssh $SERVER "grep -oP \"'database'\s*=>\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE | head -1")
        DB_USER=$(ssh $SERVER "grep -oP \"'username'\s*=>\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE | head -1")
        DB_PASS=$(ssh $SERVER "grep -oP \"'password'\s*=>\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE | head -1")
        DB_HOST=$(ssh $SERVER "grep -oP \"'host'\s*=>\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE | head -1")
    fi
    
    # Default values if not found
    DB_HOST=${DB_HOST:-localhost}
    DB_PORT=${DB_PORT:-3306}
    
    if [ ! -z "$DB_NAME" ] && [ ! -z "$DB_USER" ]; then
        echo "Database: $DB_NAME"
        echo "User: $DB_USER"
        echo "Host: $DB_HOST"
        echo ""
        echo "Searching database for Google credentials..."
        echo "----------------------------------------"
        
        # Search in config table (Drupal 8 stores config here)
        echo "Searching in 'config' table..."
        ssh $SERVER "mysql -h$DB_HOST -P$DB_PORT -u$DB_USER -p'$DB_PASS' $DB_NAME -e \"SELECT name, data FROM config WHERE name LIKE '%google%' OR name LIKE '%place%' OR data LIKE '%AIza%' OR data LIKE '%GOOGLE%' OR data LIKE '%PLACES%' OR data LIKE '%PLACE_ID%' LIMIT 20;\" 2>/dev/null" | while read line; do
            if [ ! -z "$line" ] && [[ ! "$line" =~ ^name.*data$ ]]; then
                echo "$line"
            fi
        done
        echo ""
        
        # Search in key_value table (Drupal 8 stores some config here too)
        echo "Searching in 'key_value' table..."
        ssh $SERVER "mysql -h$DB_HOST -P$DB_PORT -u$DB_USER -p'$DB_PASS' $DB_NAME -e \"SELECT collection, name, value FROM key_value WHERE name LIKE '%google%' OR name LIKE '%place%' OR value LIKE '%AIza%' OR value LIKE '%GOOGLE%' OR value LIKE '%PLACES%' OR value LIKE '%PLACE_ID%' LIMIT 20;\" 2>/dev/null" | while read line; do
            if [ ! -z "$line" ] && [[ ! "$line" =~ ^collection.*name.*value$ ]]; then
                echo "$line"
            fi
        done
        echo ""
        
        # Search in all tables for Google-related data
        echo "Searching all tables for Google API keys (AIza...)..."
        ssh $SERVER "mysql -h$DB_HOST -P$DB_PORT -u$DB_USER -p'$DB_PASS' $DB_NAME -e \"SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA='$DB_NAME' AND TABLE_TYPE='BASE TABLE';\" 2>/dev/null" | tail -n +2 | while read table; do
            if [ ! -z "$table" ]; then
                result=$(ssh $SERVER "mysql -h$DB_HOST -P$DB_PORT -u$DB_USER -p'$DB_PASS' $DB_NAME -e \"SELECT * FROM \`$table\` WHERE CONCAT_WS('', *) LIKE '%AIza%' LIMIT 1;\" 2>/dev/null" | tail -n +2)
                if [ ! -z "$result" ]; then
                    echo "Found in table: $table"
                    echo "$result"
                    echo ""
                fi
            fi
        done
        
    else
        echo "Could not extract database credentials from settings.php"
        echo "Trying to read settings.php directly for database info..."
        ssh $SERVER "grep -A 20 \"\\\$databases\" $SETTINGS_FILE | head -30"
    fi
else
    echo "settings.php not found, skipping database search"
fi

echo ""
echo "=========================================="
echo "Search complete!"
echo ""
echo "If credentials were found, look for:"
echo "  - API Keys starting with 'AIza'"
echo "  - Place IDs (usually long alphanumeric strings)"
echo "  - Environment variables like GOOGLE_PLACES_API_KEY"
echo "  - Config entries in database tables"
echo "=========================================="

