import '../assets/globals.css'
import {Outfit} from 'next/font/google'
import Navbar from "@/components/navbar/Navbar";


const font = Outfit({subsets: ['latin']})

export const metadata = {
    title: "e-web-app",
    viewport: { width: "device-width", initialScale: 1 }
}


export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
        <body className={font.className}>
        <Navbar/>
        {children}
        </body>
        </html>
    )
}