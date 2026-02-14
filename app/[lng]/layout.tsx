import { Providers } from '@/components/Providers';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }) {
    const { lng } = await params;

    const titles: Record<string, string> = {
        en: "Molly's | Pet Grooming Spa, Dog and Cat Grooming",
        ge: "მოლი'ს | გრუმინგ სალონი, ძაღლის და კატის შეჭრა"
    };

    const descriptions: Record<string, string> = {
        en: "Professional grooming and daycare for your best friend.",
        ge: "ცხოველების გრუმინგ სალონი. ძაღლისა და კატის პროფესიონალური გრუმინგი. შეჭრა, გაპარსვა, დაბანა, გამოვარცხნა, გაშრობა, საგამოფენოდ მომზადება."
    };

    return {
        title: titles[lng] || titles.en,
        description: descriptions[lng] || descriptions.en,
        icons: {
            icon: '/favicon.ico',
        }
    };
}

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
import "../globals.css";

export default async function LngLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ lng: string }>;
}) {
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