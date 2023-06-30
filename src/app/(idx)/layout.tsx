'use client'
import Script from "next/script"
import "../(site)/globals.css"

export default function IdxLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Script id="ihf-kestrel" src="https://kestrel.idxhome.com/ihf-kestrel.js" />
            <Script id="ihfSCript">
                {`window.ihfKestrel = window.ihfKestrel || {};
	ihfKestrel.config = {
		platform: "custom",
		activationToken: "3779C949-155D-6043-0911FD9A208A875D",
	};`}
            </Script>
            <section>
                <div className="section">
                    <div className="container">
                        {children}
                    </div>
                </div>
            </section>
        </>
    )
}