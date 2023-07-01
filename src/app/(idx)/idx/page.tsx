
'use client'
import IdxScript from "../components/idx-script"

export default function IdxPage() {
    return (
        // <IdxScript id="idxPage" />
        <div 
            dangerouslySetInnerHTML={{
                __html: `{idx_body}`
            }}
        />
    )
}