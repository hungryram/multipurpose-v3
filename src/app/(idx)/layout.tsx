'use client'
import Script from "next/script"

export default function IdxLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Script id="ihf-kestrel" src="https://kestrel.idxhome.com/ihf-kestrel.js" strategy="beforeInteractive"/>
            <Script id="ihfSCript" strategy="beforeInteractive">
                {`window.ihfKestrel = window.ihfKestrel || {};
	ihfKestrel.config = {
		platform: "custom",
		activationToken: "3779C949-155D-6043-0911FD9A208A875D",
	};`}
            </Script>
            <section>
                <div className="section">
                    <h1>LAYOUT</h1>
                    <div className="container">
                        {children}
                    </div>
                </div>
            </section>
        </>
    )
}