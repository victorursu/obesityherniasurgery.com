'use client'

import { useEffect } from 'react'

export default function BMICalculator() {
  useEffect(() => {
    // Load the Omni Calculator SDK
    const script = document.createElement('script')
    script.src = 'https://cdn.omnicalculator.com/sdk.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector('script[src="https://cdn.omnicalculator.com/sdk.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="w-full max-w-full overflow-x-auto">
      <div
        className="omni-calculator w-full"
        data-calculator="health/gastric-sleeve-weight-loss"
        data-width="100%"
        data-config='{"height":{"unitDefault":"ftinch"},"weight":{"unitDefault":"lb"},"surgery_type":{"default":"6"}}'
        data-currency="USD"
        data-show-row-controls="false"
        data-version="3"
        data-t="1669518185552"
        style={{ width: '100%', maxWidth: '100%' }}
      >
        <div className="omni-calculator-header">How much weight will I loose after surgery</div>
        <div className="omni-calculator-footer">
          <a
            href="https://www.omnicalculator.com/health/gastric-sleeve-weight-loss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Omni"
              className="omni-calculator-logo"
              src="https://cdn.omnicalculator.com/embed/omni-calculator-logo-long.svg"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

