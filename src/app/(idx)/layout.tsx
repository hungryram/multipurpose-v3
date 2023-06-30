import Script from "next/script"

export default function IdxLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <html lang="en">
                <body>
                    <Script id="ihf-kestrel" src="https://kestrel.idxhome.com/ihf-kestrel.js" />
                    <Script id="ihfSCript">
                        {`window.ihfKestrel = window.ihfKestrel || {};
	ihfKestrel.config = {
		platform: "custom",
		activationToken: "3779C949-155D-6043-0911FD9A208A875D",
	};`}
                    </Script>
                    <div className="section">
                        <div className="container">
                            <div className="content">
                                <h1>Layout</h1>
                                <div className="section">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        </>
    )
}