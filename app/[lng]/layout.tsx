// NO 'use client' here!
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
import { Providers } from '@/components/Providers';
import "../globals.css";

export default async function LngLayout({
    children,
    params
}: {
    children: React.ReactNode;
    // Update to Promise for Next.js 15
    params: Promise<{ lng: string }>;
}) {
    // Unwrap the params
    const { lng } = await params;

    return (
        <html lang={lng}>
            <body>
                <Providers>
                    <Navigation />
                    <main>{children}</main>
                    <Footer />
                    <Popup />
                </Providers>
            </body>
        </html>
    );
}