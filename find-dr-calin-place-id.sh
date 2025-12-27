#!/bin/bash

# Script to find Google Place ID for Dr. Marius Calin
# Usage: ./find-dr-calin-place-id.sh

API_KEY="${GOOGLE_PLACES_API_KEY:-AIzaSyAeRaWuBUMbAbbeUq87BM3dn9fJLeUnb1I}"

BUSINESS_NAME="Dr. Marius Calin M.D. F.A.C.S. F.A.S.M.B.S. M.B.S - F.P.D A.B.O.M"
LOCATION="New Jersey"

echo "Searching for Place ID for:"
echo "$BUSINESS_NAME"
echo "Location: $LOCATION"
echo "=========================================="
echo ""

# Try different search queries
QUERIES=(
    "Dr. Marius Calin New Jersey"
    "Dr. Marius Calin obesity hernia surgery New Jersey"
    "Marius Calin MD New Jersey"
    "obesity hernia surgery New Jersey"
)

for query in "${QUERIES[@]}"; do
    echo "Searching: $query"
    echo "----------------------------------------"
    
    # URL encode the query
    ENCODED_QUERY=$(echo "$query" | sed 's/ /%20/g')
    
    # Use Places API Text Search
    RESPONSE=$(curl -s "https://maps.googleapis.com/maps/api/place/textsearch/json?query=$ENCODED_QUERY&key=$API_KEY")
    
    # Check if we got results
    if echo "$RESPONSE" | grep -q '"status" : "OK"'; then
        echo "$RESPONSE" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    if 'results' in data and len(data['results']) > 0:
        for i, result in enumerate(data['results'][:5], 1):
            name = result.get('name', 'N/A')
            place_id = result.get('place_id', 'N/A')
            address = result.get('formatted_address', 'N/A')
            rating = result.get('rating', 'N/A')
            print(f'\n{i}. Name: {name}')
            print(f'   Place ID: {place_id}')
            print(f'   Address: {address}')
            print(f'   Rating: {rating}')
            if 'Calin' in name or 'Marius' in name:
                print(f'   ⭐ MATCH FOUND!')
    else:
        print('No results found')
except Exception as e:
    print(f'Error parsing JSON: {e}')
    print('Raw response:', sys.stdin.read()[:500])
" 2>/dev/null || echo "$RESPONSE" | head -50
        
        echo ""
    else
        ERROR=$(echo "$RESPONSE" | grep -o '"error_message" : "[^"]*"' | head -1)
        if [ ! -z "$ERROR" ]; then
            echo "Error: $ERROR"
        else
            echo "No results or API error"
            echo "Response: $(echo "$RESPONSE" | head -20)"
        fi
        echo ""
    fi
    
    sleep 1  # Rate limiting
done

echo "=========================================="
echo "If you found a match, copy the Place ID"
echo "=========================================="

