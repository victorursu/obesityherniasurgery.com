// Cloudflare Pages Function for booking API
// This replaces the Next.js API route for better Cloudflare Pages compatibility

interface Env {
  BOOKING_API_URL?: string;
}

export async function onRequest({ request, env }: { request: Request; env: Env }) {
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  // Only allow POST requests
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  try {
    const body = await request.json();
    
    console.log('Proxying booking request to emr.docksal.site:', JSON.stringify(body, null, 2));

    // Get API URL from environment variable, fallback to default
    // In Cloudflare Pages Functions, env vars are available via env parameter
    const apiUrl = env.BOOKING_API_URL || 'http://emr.docksal.site/api/booking';
    
    console.log('Attempting to fetch:', apiUrl);

    // Forward the request to the external API
    // Cloudflare Workers have built-in timeout, so we don't need AbortSignal
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    });

    console.log('External API response status:', response.status);
    console.log('External API response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('External API error response:', errorText);
      return new Response(
        JSON.stringify({ 
          error: `Booking failed: ${response.status}`, 
          details: errorText 
        }),
        {
          status: response.status,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        }
      );
    }

    const data = await response.json();
    console.log('Booking successful, response:', data);
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    console.error('Error proxying booking request:', error);
    
    // Extract detailed error information
    let errorMessage = 'Unknown error';
    let errorName = 'Error';
    let errorDetails: any = {};
    
    if (error instanceof Error) {
      errorMessage = error.message;
      errorName = error.name;
      errorDetails = {
        name: error.name,
        message: error.message,
        stack: error.stack,
      };
    } else if (typeof error === 'object' && error !== null) {
      errorDetails = error;
      errorMessage = JSON.stringify(error);
    } else {
      errorMessage = String(error);
    }
    
    console.error('Error details:', errorDetails);
    
    return new Response(
      JSON.stringify({
        error: 'Failed to submit booking request',
        errorName,
        details: errorMessage,
        fullError: errorDetails,
        hint: 'Check if emr.docksal.site is accessible from the server',
        apiUrl: env.BOOKING_API_URL || 'http://emr.docksal.site/api/booking',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  }
}

