import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Magnolia',
    description: 'Magnolia is a System for florists'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body className={`${inter.className}`}>
                <Header/>
                {children}
                <Footer/>
            </body>
        </html>
    )
}
