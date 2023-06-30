import Script from "next/script";

export default function IdxPage() {
    return (
        <div>
            <Script id="ihfIDXScript">
                {`document.currentScript.replaceWith(ihfKestrel.render());`}
            </Script>
        </div>
    )
}