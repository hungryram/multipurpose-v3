export default function IdxLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="section">
                <div className="container">
                    {children}
                </div>
            </div>
        </section>
    )
}