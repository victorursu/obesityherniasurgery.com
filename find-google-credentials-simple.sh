#!/bin/bash

# Simplified script to find Google Places API credentials
# Usage: ./find-google-credentials-simple.sh

SERVER="root@159.223.116.155"
SEARCH_DIR="/var/www/obesityherniasurgery.com/drupal/web"

echo "Searching for Google Places API credentials on $SERVER"
echo "Directory: $SEARCH_DIR"
echo "=========================================="
echo ""

# Check if directory exists
echo "Checking if directory exists..."
ssh $SERVER "test -d $SEARCH_DIR && echo 'Directory found!' || echo 'Directory not found!'"
echo ""

# Search for Google API keys (start with AIza)
echo "1. Searching for Google API keys (AIza...)..."
ssh $SERVER "grep -r 'AIza[0-9A-Za-z_-]\{35\}' $SEARCH_DIR 2>/dev/null | grep -v 'Binary' | head -20"
echo ""

# Search for Google Place ID patterns
echo "2. Searching for Google Place IDs..."
ssh $SERVER "grep -r -i 'place.*id' $SEARCH_DIR 2>/dev/null | grep -E '(ChIJ|place_id|PLACE_ID)' | grep -v 'Binary' | head -20"
echo ""

# Search in .env files
echo "3. Searching in .env files..."
ssh $SERVER "find $SEARCH_DIR -name '.env*' -type f 2>/dev/null | xargs grep -i -E '(GOOGLE|PLACES|PLACE_ID)' 2>/dev/null | head -20"
echo ""

# Search in settings.php
echo "4. Searching in settings.php files..."
ssh $SERVER "find $SEARCH_DIR -name 'settings.php' -type f 2>/dev/null | xargs grep -i -E '(GOOGLE|PLACES|PLACE_ID|AIza)' 2>/dev/null | head -20"
echo ""

# Search in PHP files for Google config
echo "5. Searching in PHP files for Google configuration..."
ssh $SERVER "grep -r -i 'google.*api.*key\|google.*place' $SEARCH_DIR --include='*.php' 2>/dev/null | grep -v 'Binary' | head -20"
echo ""

# Extract database credentials and search database
echo "6. Searching Drupal 8 database..."
echo ""

SETTINGS_FILE=$(ssh $SERVER "find $SEARCH_DIR -name 'settings.php' -type f 2>/dev/null | head -1")

if [ ! -z "$SETTINGS_FILE" ]; then
    echo "Found settings.php: $SETTINGS_FILE"
    
    # Extract database credentials (Drupal 8 format)
    DB_NAME=$(ssh $SERVER "grep -oP \"\\\$databases\['default'\]\['default'\]\['database'\]\s*=\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE 2>/dev/null | head -1")
    if [ -z "$DB_NAME" ]; then
        DB_NAME=$(ssh $SERVER "grep -oP \"'database'\s*=>\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE 2>/dev/null | head -1")
    fi
    
    DB_USER=$(ssh $SERVER "grep -oP \"\\\$databases\['default'\]\['default'\]\['username'\]\s*=\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE 2>/dev/null | head -1")
    if [ -z "$DB_USER" ]; then
        DB_USER=$(ssh $SERVER "grep -oP \"'username'\s*=>\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE 2>/dev/null | head -1")
    fi
    
    DB_PASS=$(ssh $SERVER "grep -oP \"\\\$databases\['default'\]\['default'\]\['password'\]\s*=\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE 2>/dev/null | head -1")
    if [ -z "$DB_PASS" ]; then
        DB_PASS=$(ssh $SERVER "grep -oP \"'password'\s*=>\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE 2>/dev/null | head -1")
    fi
    
    DB_HOST=$(ssh $SERVER "grep -oP \"\\\$databases\['default'\]\['default'\]\['host'\]\s*=\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE 2>/dev/null | head -1")
    if [ -z "$DB_HOST" ]; then
        DB_HOST=$(ssh $SERVER "grep -oP \"'host'\s*=>\s*['\\\"]\K[^'\\\"]+\" $SETTINGS_FILE 2>/dev/null | head -1")
    fi
    DB_HOST=${DB_HOST:-localhost}
    
    if [ ! -z "$DB_NAME" ] && [ ! -z "$DB_USER" ]; then
        echo "Searching database: $DB_NAME"
        echo ""
        
        # Search config table
        echo "Searching 'config' table..."
        ssh $SERVER "mysql -h$DB_HOST -u$DB_USER -p'$DB_PASS' $DB_NAME -e \"SELECT name FROM config WHERE name LIKE '%google%' OR name LIKE '%place%' LIMIT 10;\" 2>/dev/null"
        echo ""
        
        # Search for AIza keys in config data
        echo "Searching for API keys in config data..."
        ssh $SERVER "mysql -h$DB_HOST -u$DB_USER -p'$DB_PASS' $DB_NAME -e \"SELECT name, SUBSTRING(data, 1, 200) as data_preview FROM config WHERE data LIKE '%AIza%' LIMIT 5;\" 2>/dev/null"
        echo ""
    else
        echo "Could not extract database credentials"
    fi
fi

echo "=========================================="
echo "Search complete!"
echo ""
echo "Look for:"
echo "  - API Keys: Lines containing 'AIza...'"
echo "  - Place IDs: Lines containing 'ChIJ...' or 'place_id'"
echo "  - Config vars: GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID"
echo "  - Database entries in 'config' and 'key_value' tables"
echo "=========================================="

