'use client'
import Script from "next/script"

export default function IdxScript({ id }: { id: string }) {
    return (
        <>
            <div className="section">
                <div className="container">
                    <Script
                        id={id}
                        dangerouslySetInnerHTML={{
                            __html: `document.currentScript.replaceWith(ihfKestrel.render())`,
                        }}
                    />
                </div>
            </div>
        </>
    )
}