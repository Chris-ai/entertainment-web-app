import '../assets/globals.css'
import {Outfit} from 'next/font/google'
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";


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
        <div className={'lg:flex lg:gap-x-8'}>
            <Sidebar />
            {children}
        </div>
        </body>
        </html>
    )
}