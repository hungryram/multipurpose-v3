import Script from "next/script"

export default function IdxScript({ id }: { id: string }) {
    return (
        <>
            <div className="section">
                <div className="container">
                    {/* <div
                        id={id}
                        dangerouslySetInnerHTML={{
                            __html: `<script>document.currentScript.replaceWith(ihfKestrel.render())</script>`,
                        }}
                    /> */}
                    <Script 
                        id={id}
                        dangerouslySetInnerHTML={{
                            __html: `document.currentScript.replaceWith(ihfKestrel.render())`
                        }}
                    />
                    {/* <script id="idxWrapper" dangerouslySetInnerHTML={{
                        __html: `document.currentScript.replaceWith(ihfKestrel.render());`
                    }}/> */}
                </div>
            </div>
        </>
    )
}