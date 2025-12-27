# Google Reviews Widget Setup

This document explains how to set up the Google Reviews widget that appears above the footer.

## Overview

The Google Reviews widget displays your business's Google reviews in a beautiful, responsive layout. It fetches reviews from the Google Places API.

## Setup Instructions

### 1. Get Your Google Place ID

1. Go to [Google Places API - Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for your business name and location
3. Copy the Place ID (it looks like: `ChIJN1t_tDeuEmsRUsoyG83frY4`)

### 2. Get Your Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click "Enable"
4. Create an API Key:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key
5. (Recommended) Restrict your API key:
   - Click on the API key to edit it
   - Under "API restrictions", select "Restrict key"
   - Choose "Places API"
   - Save

### 3. Add Environment Variables

Add these to your `.env` file:

```env
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_api_key_here
NEXT_PUBLIC_GOOGLE_PLACE_ID=your_place_id_here
```

**Important:** The `NEXT_PUBLIC_` prefix makes these variables available to client-side code.

### 4. Update the Component

The `FooterWithReviews` component will automatically use these environment variables. You can also pass them as props:

```tsx
<FooterWithReviews 
  googlePlaceId="your_place_id"
  googleApiKey="your_api_key"
  maxReviews={3}
/>
```

## Usage

### Option 1: Use FooterWithReviews Component (Recommended)

Replace `Footer` with `FooterWithReviews` in your pages:

```tsx
import FooterWithReviews from '@/components/FooterWithReviews'

// In your component:
<FooterWithReviews />
```

### Option 2: Use Components Separately

```tsx
import Footer from '@/components/Footer'
import GoogleReviews from '@/components/GoogleReviews'

// In your component:
<GoogleReviews 
  placeId="your_place_id"
  apiKey="your_api_key"
  maxReviews={3}
/>
<Footer />
```

## Features

- ✅ Responsive design (mobile-friendly)
- ✅ Dark mode support
- ✅ Star ratings display
- ✅ Review text with truncation
- ✅ Author names and timestamps
- ✅ Link to view all reviews on Google
- ✅ Gracefully handles missing credentials (doesn't show widget)

## Cost Considerations

Google Places API has a pricing structure:
- First 1,000 requests per month: Free
- After that: $0.017 per request

The widget fetches reviews once per page load, so costs are minimal for most websites.

## Troubleshooting

### Widget doesn't appear

1. Check that both `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` and `NEXT_PUBLE_GOOGLE_PLACE_ID` are set
2. Verify your API key has Places API enabled
3. Check browser console for errors
4. Ensure your Place ID is correct

### CORS Errors

If you see CORS errors, you may need to:
1. Create an API route to proxy the requests (server-side)
2. Or use a service like Google My Business API instead

### Rate Limiting

If you hit rate limits, consider:
- Caching reviews server-side
- Using a service like Google My Business API
- Implementing request throttling

## Alternative: Manual Reviews

If you prefer not to use the API, you can manually add reviews by modifying the `GoogleReviews` component to use static data instead of fetching from the API.

