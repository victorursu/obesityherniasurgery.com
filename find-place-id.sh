#!/bin/bash

# Script to find Google Place ID for a business
# Usage: ./find-place-id.sh "Business Name" "City, State"

BUSINESS_NAME="${1:-Dr. Marius Calin}"
LOCATION="${2:-New Jersey}"

echo "Searching for Place ID for: $BUSINESS_NAME in $LOCATION"
echo "=========================================="
echo ""

# You'll need to replace YOUR_API_KEY with your actual API key
API_KEY="${GOOGLE_PLACES_API_KEY:-YOUR_API_KEY}"

if [ "$API_KEY" = "YOUR_API_KEY" ]; then
    echo "Error: Please set GOOGLE_PLACES_API_KEY environment variable"
    echo "Example: export GOOGLE_PLACES_API_KEY=your_key_here"
    echo ""
    echo "Or edit this script and replace YOUR_API_KEY with your actual key"
    exit 1
fi

# URL encode the search query
QUERY=$(echo "$BUSINESS_NAME $LOCATION" | sed 's/ /%20/g')

echo "Searching Google Places API..."
echo ""

# Use Places API Text Search
curl -s "https://maps.googleapis.com/maps/api/place/textsearch/json?query=$QUERY&key=$API_KEY" | \
    python3 -m json.tool 2>/dev/null || \
    python3 -c "import sys, json; data=json.load(sys.stdin); [print(f\"Name: {r['name']}\nPlace ID: {r['place_id']}\nAddress: {r.get('formatted_address', 'N/A')}\n---\") for r in data.get('results', [])]"

echo ""
echo "=========================================="
echo "Copy the Place ID from the results above"
echo "=========================================="

