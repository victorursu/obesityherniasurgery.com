import Footer from './Footer'
import GoogleReviews from './GoogleReviews'

interface FooterWithReviewsProps {
  googlePlaceId?: string
  maxReviews?: number
}

export default function FooterWithReviews({ 
  googlePlaceId, 
  maxReviews = 3 
}: FooterWithReviewsProps) {
  // Use props if provided, otherwise fall back to environment variables
  // NEXT_PUBLIC_ env vars are available in client components at build time
  const placeId = googlePlaceId || process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID

  return (
    <>
      <GoogleReviews 
        placeId={placeId}
        maxReviews={maxReviews}
      />
      <Footer />
    </>
  )
}

