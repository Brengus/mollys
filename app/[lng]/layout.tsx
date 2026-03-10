import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
    const { lng } = await params;

    const titles: Record<string, string> = {
        en: "Molly's Pet Grooming Spa | Dog & Cat Grooming",
        ka: "მოლის | გრუმინგ სალონი, ძაღლის და კატის შეჭრა"
    };

    const descriptions: Record<string, string> = {
        en: "Professional dog and cat grooming in Tbilisi. Molly’s Pet Grooming Spa offers bathing, trimming, styling and daycare services for your pet.",
        ka: "ცხოველების გრუმინგ სალონი თბილისში. ძაღლისა და კატის პროფესიონალური გრუმინგი: შეჭრა, გაპარსვა, დაბანა და სრულფასოვანი მოვლა."
    };

    const ogLocales: Record<string, string> = {
        en: 'en_US',
        ka: 'ka_GE'
    };

    const title = titles[lng] || titles.en;
    const description = descriptions[lng] || descriptions.en;

    return {
        metadataBase: new URL('https://mollys.ge'),
        title: {
            default: title,
            template: "%s | Molly's",
        },
        description,
        alternates: {
            canonical: './',
        },
        openGraph: {
            title,
            description,
            type: 'website',
            siteName: "Molly's",
            url: './',
            locale: ogLocales[lng] || ogLocales.en,
            images: [
                {
                    url: '/og-default.jpg',
                    width: 1200,
                    height: 630,
                    alt: "Molly's Pet Grooming Spa",
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/og-default.jpg'],
        },
        icons: {
            icon: '/favicon.ico',
        }
    };
}

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/chatbot/ChatBot';
import "../globals.css";

async function LngLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ lng: string }>;
}) {
    const { lng } = await params;

    const supportedLanguages = ['en', 'ka'];
    if (!supportedLanguages.includes(lng)) {
        notFound();
    }

    return (
        <html lang={lng}>
            <body>
                <Providers>
                    <Navigation />
                    <main>
                        {children}
                    </main>
                    <Footer />
                    <ChatBot />
                </Providers>
            </body>
        </html>
    );
}

export default LngLayout;
