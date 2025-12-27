export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    console.log('Proxying booking request to emr.docksal.site:', JSON.stringify(body, null, 2))

    // Get API URL from environment variable, fallback to default
    // In Cloudflare Pages, env vars are available via process.env
    const apiUrl = process.env.BOOKING_API_URL || 'http://emr.docksal.site/api/booking'
    
    console.log('Attempting to fetch:', apiUrl)

    // Forward the request to the external API
    // Create fetch options with timeout support for Cloudflare Workers
    const fetchOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    }

    // Use AbortSignal.timeout() if available (newer Cloudflare Workers), otherwise skip timeout
    // Cloudflare Workers may not support AbortSignal.timeout() in all runtime versions
    try {
      if (typeof AbortSignal !== 'undefined' && typeof (AbortSignal as any).timeout === 'function') {
        fetchOptions.signal = (AbortSignal as any).timeout(30000) // 30 second timeout
      }
    } catch (timeoutError) {
      console.warn('AbortSignal.timeout() not available, proceeding without timeout:', timeoutError)
    }

    const response = await fetch(apiUrl, fetchOptions)

    console.log('External API response status:', response.status)
    console.log('External API response headers:', Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      const errorText = await response.text()
      console.error('External API error response:', errorText)
      return NextResponse.json(
        { error: `Booking failed: ${response.status}`, details: errorText },
        { 
          status: response.status,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        }
      )
    }

    const data = await response.json()
    console.log('Booking successful, response:', data)
    return NextResponse.json(data, { 
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    })
  } catch (error) {
    console.error('Error proxying booking request:', error)
    
    // Extract detailed error information
    let errorMessage = 'Unknown error'
    let errorName = 'Error'
    let errorDetails: any = {}
    
    if (error instanceof Error) {
      errorMessage = error.message
      errorName = error.name
      errorDetails = {
        name: error.name,
        message: error.message,
        stack: error.stack
      }
    } else if (typeof error === 'object' && error !== null) {
      errorDetails = error
      errorMessage = JSON.stringify(error)
    } else {
      errorMessage = String(error)
    }
    
    console.error('Error details:', errorDetails)
    
    return NextResponse.json(
      { 
        error: 'Failed to submit booking request',
        errorName,
        details: errorMessage,
        fullError: errorDetails,
        hint: 'Check if emr.docksal.site is accessible from the server',
        apiUrl: process.env.BOOKING_API_URL || 'http://emr.docksal.site/api/booking'
      },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    )
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}

