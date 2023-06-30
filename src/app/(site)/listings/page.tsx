import Script from "next/script";

export default function ListingsPage() {
    return (
        <div>
            <Script id="ihfIDXScript">
                {`document.currentScript.replaceWith(ihfKestrel.render());`}
            </Script>
        </div>
    )
}