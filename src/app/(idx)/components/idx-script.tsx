'use client'
import { useEffect } from "react";

export default function IdxScript() {
    useEffect(() => {
        const ihomefinder = document.getElementById("ihomefinder")
        const script = document.createTextNode(`ihfKestrel.render()`);
        ihomefinder.appendChild(script);
    }, []);

    return (
        <>
            <div className="section">
                <div className="container">
                    <div
                        id="ihomefinder"
                        dangerouslySetInnerHTML={{
                            __html: `<script>ihfKestrel.render()</script>`,
                        }}
                    />
                </div>
            </div>
        </>
    )
}