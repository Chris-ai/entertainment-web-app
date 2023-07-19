import React from "react";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <nav>
                navbar
            </nav>
            <main>{children}</main>
            <footer>
                footer
            </footer>
        </>
    )
}