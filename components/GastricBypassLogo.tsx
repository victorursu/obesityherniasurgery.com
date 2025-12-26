export default function GastricBypassLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Multi-layered base - bottom white platform */}
      <rect
        x="10"
        y="82"
        width="80"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-primary dark:text-primary-light"
      />
      
      {/* Black middle section */}
      <rect
        x="20"
        y="75"
        width="60"
        height="7"
        rx="1"
        fill="currentColor"
        className="text-primary dark:text-primary-light"
      />
      
      {/* Top white section of base */}
      <rect
        x="25"
        y="68"
        width="50"
        height="7"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-primary dark:text-primary-light"
      />
      
      {/* Central column - tapering from wider base to narrower top */}
      <path
        d="M42 68 L42 50 L58 50 L58 68 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        className="text-primary dark:text-primary-light"
      />
      <rect
        x="45"
        y="50"
        width="10"
        height="18"
        fill="currentColor"
        className="text-primary dark:text-primary-light"
      />
      
      {/* Horizontal crossbar at top */}
      <rect
        x="15"
        y="45"
        width="70"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        className="text-primary dark:text-primary-light"
      />
      
      {/* Left side arms - 4 arms with multiple segments */}
      {/* Arm 1 - Leftmost */}
      <path
        d="M20 49 L12 35 L8 28 L5 25 L8 22 L12 25 L8 28"
        stroke="currentColor"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary dark:text-primary-light"
      />
      <circle cx="12" cy="28" r="2.5" fill="currentColor" className="text-primary dark:text-primary-light" />
      <line x1="8" y1="28" x2="6" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary dark:text-primary-light" />
      
      {/* Arm 2 */}
      <path
        d="M28 49 L22 38 L18 32 L15 30 L18 28 L22 30 L18 32"
        stroke="currentColor"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary dark:text-primary-light"
      />
      <circle cx="22" cy="32" r="2.5" fill="currentColor" className="text-primary dark:text-primary-light" />
      <line x1="18" y1="32" x2="16" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary dark:text-primary-light" />
      
      {/* Arm 3 */}
      <path
        d="M36 49 L30 38 L26 32 L23 30 L26 28 L30 30 L26 32"
        stroke="currentColor"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary dark:text-primary-light"
      />
      <circle cx="30" cy="32" r="2.5" fill="currentColor" className="text-primary dark:text-primary-light" />
      <line x1="26" y1="32" x2="24" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary dark:text-primary-light" />
      
      {/* Arm 4 */}
      <path
        d="M44 49 L38 38 L34 32 L31 30 L34 28 L38 30 L34 32"
        stroke="currentColor"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary dark:text-primary-light"
      />
      <circle cx="38" cy="32" r="2.5" fill="currentColor" className="text-primary dark:text-primary-light" />
      <line x1="34" y1="32" x2="32" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary dark:text-primary-light" />
      
      {/* Right side arms - 4 arms with multiple segments */}
      {/* Arm 5 */}
      <path
        d="M56 49 L62 38 L66 32 L69 30 L66 28 L62 30 L66 32"
        stroke="currentColor"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary dark:text-primary-light"
      />
      <circle cx="62" cy="32" r="2.5" fill="currentColor" className="text-primary dark:text-primary-light" />
      <line x1="66" y1="32" x2="68" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary dark:text-primary-light" />
      
      {/* Arm 6 */}
      <path
        d="M64 49 L70 38 L74 32 L77 30 L74 28 L70 30 L74 32"
        stroke="currentColor"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary dark:text-primary-light"
      />
      <circle cx="70" cy="32" r="2.5" fill="currentColor" className="text-primary dark:text-primary-light" />
      <line x1="74" y1="32" x2="76" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary dark:text-primary-light" />
      
      {/* Arm 7 - with camera cable */}
      <path
        d="M72 49 L78 38 L82 32 L85 30 L82 28 L78 30 L82 32"
        stroke="currentColor"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary dark:text-primary-light"
      />
      <circle cx="78" cy="32" r="2.5" fill="currentColor" className="text-primary dark:text-primary-light" />
      <line x1="82" y1="32" x2="84" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary dark:text-primary-light" />
      {/* Camera cable */}
      <path d="M78 38 L80 35 L82 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" className="text-primary dark:text-primary-light" />
      
      {/* Arm 8 - Rightmost */}
      <path
        d="M80 49 L88 35 L92 28 L95 25 L92 22 L88 25 L92 28"
        stroke="currentColor"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary dark:text-primary-light"
      />
      <circle cx="88" cy="28" r="2.5" fill="currentColor" className="text-primary dark:text-primary-light" />
      <line x1="92" y1="28" x2="94" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary dark:text-primary-light" />
    </svg>
  )
}

