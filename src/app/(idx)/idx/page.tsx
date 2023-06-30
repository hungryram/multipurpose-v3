'use client'

import Script from "next/script"

export default function IdxPage() {
    return (
        <div className="section">
            <div className="container">
                <Script
  id="show-banner"
  dangerouslySetInnerHTML={{
    __html: `document.currentScript.replaceWith(ihfKestrel.render())`,
  }}
/>
            </div>
        </div>
    )
}