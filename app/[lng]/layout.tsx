import type { Metadata } from 'next';
import Script from 'next/script';
import { Providers } from '@/components/Providers';
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
    const { lng } = await params;

    const titles: Record<string, string> = {
        en: "Molly's Pet Grooming Spa | Dog & Cat Grooming",
        ka: "მოლის | გრუმინგ სალონი, ძაღლის და კატის შეჭრა"
    };

    const descriptions: Record<string, string> = {
        en: "Professional dog and cat grooming in Tbilisi. Molly's Pet Grooming Spa offers bathing, trimming, styling and daycare services for your pet.",
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
        verification: {
            google: '-haxGJ-yIyLnZ3avshE8EFMGZPaka1oJ6IPV3-AHNVY',
            other: {
                'msvalidate.01': 'BB9794C87C7D9CD65BB55CD26957EDB1',
            },
        },
        alternates: {
            canonical: `/${lng}`, // Self-referencing: /en or /ka
            languages: {
                'en-US': '/en',
                'ka-GE': '/ka',
                'x-default': '/ka', // Best practice: points to your main language
            },
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

    const schemaDescriptions: Record<string, string> = {
        en: "Molly's is a pet grooming salon in Tbilisi offering dog and cat grooming, bathing, trimming, nail clipping, and ear care. With a team of professional groomers, premium-quality products, and a dog daycare service, Molly's provides a comfortable and caring space for your four-legged friend.",
        ka: "Molly's არის გრუმინგ სალონი თბილისში, რომელიც გთავაზობთ ძაღლისა და კატის გრუმინგს, დაბანას, კრეჭას, ბრჭყალების დაჭრასა და ყურების მოვლას. პროფესიონალი გრუმერების გუნდი, პრემიუმ ხარისხის კოსმეტიკა და ძაღლების ბაღის სერვისი Molly's-ს თქვენი ოთხფეხა მეგობრისთვის კომფორტულ სივრცედ აქცევს."
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Molly's",
        url: "https://mollys.ge",
        logo: "https://mollys.ge/logo.webp",
        image: "https://mollys.ge/og-default.jpg",
        description: schemaDescriptions[lng] || schemaDescriptions.en,
        sameAs: [
            "https://www.instagram.com/mollys_ge?igsh=eGw3OTVnc2RjcGVw&utm_source=qr",
            "https://www.facebook.com/people/Mollys-grooming-daycare/61587126842591",
            "https://www.tiktok.com/@mollys_ge?_r=1&_t=ZS-94H9ezPTjv6"
        ],
        telephone: "+995568611223",
        email: "mollys.grooming.daycare@gmail.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Ana Politkovskaia 4g",
            addressLocality: "Tbilisi",
            postalCode: "0168",
            addressCountry: "GE"
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                opens: "10:00",
                closes: "20:00"
            }
        ],
        areaServed: {
            "@type": "City",
            name: "Tbilisi"
        },
        priceRange: "50-250 GEL",
        hasMap: "https://www.google.com/maps/place/4g+Ana+Politkovskaia+St,+T'bilisi/@41.7162652,44.7075001,15z/data=!4m6!3m5!1s0x40447376d903b0fd:0x60785a626810a3a8!8m2!3d41.7193885!4d44.7156111!16s%2Fg%2F11rxnh0sw1?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D"
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Molly's",
        url: "https://mollys.ge"
    };

    return (
        <html lang={lng}>
            <body>
                <Script id="microsoft-clarity" strategy="afterInteractive">
                    {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "vuk0sap6yx");
                    `}
                </Script>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                />
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
