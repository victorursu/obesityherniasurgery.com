export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const placeId = searchParams.get('place_id');
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

    if (!placeId) {
      return NextResponse.json(
        { error: 'place_id parameter is required' },
        { status: 400 }
      );
    }

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Google Places API key is not configured' },
        { status: 500 }
      );
    }

    // Validate place_id format (should start with ChIJ for Google Place IDs)
    if (!placeId.startsWith('ChIJ') && placeId.length < 20) {
      console.warn('Place ID format may be invalid:', placeId);
    }

    // Fetch from Google Places API server-side (no CORS issues)
    // URL encode the place_id to handle special characters
    const encodedPlaceId = encodeURIComponent(placeId);
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodedPlaceId}&fields=name,reviews,rating&key=${apiKey}`;
    
    console.log('Fetching Google Places API for place_id:', placeId);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    const responseText = await response.text();
    let data;
    
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse Google API response:', responseText);
      return NextResponse.json(
        { error: 'Invalid response from Google Places API', details: responseText.substring(0, 200) },
        { status: 500 }
      );
    }

    if (!response.ok) {
      console.error('Google Places API HTTP error:', response.status, data);
      return NextResponse.json(
        { 
          error: data.error_message || `Google Places API error: ${response.status}`,
          status: data.status,
          details: data
        },
        { status: response.status }
      );
    }

    if (data.status !== 'OK') {
      console.error('Google Places API error response:', data);
      return NextResponse.json(
        { 
          error: data.error_message || 'Failed to fetch reviews', 
          status: data.status,
          details: data
        },
        { status: 400 }
      );
    }

    // Return the reviews data
    return NextResponse.json({
      reviews: data.result?.reviews || [],
      status: 'OK'
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { error: 'Failed to fetch reviews', details: errorMessage },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

