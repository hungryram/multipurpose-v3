'use client'

import Script from "next/script"

export default function ListingsPage() {
    return (
        <div>
            <div className="content">
                <h1>test</h1>
            </div>
            <div className="section">
                <div className="container">
                <Script
  id="listingsScript"
  dangerouslySetInnerHTML={{
    __html: `document.currentScript.replaceWith(ihfKestrel.render())`,
  }}
/>                </div>
            </div>
        </div>
    )
}