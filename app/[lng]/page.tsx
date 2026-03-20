import MainHero from '@/components/MainHero';
import Hero from '@/components/Hero';
import Gallery from "@/components/Gallery";
import RunningLine from '@/components/RunningLine';
import Why from '@/components/Why';
import Map from '@/components/Map';
import ClientLanguageSync from '@/components/ClientLanguageSync';

import Blog from '@/components/Blog';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }) {
    const { lng } = await params;
    return {
        alternates: {
            canonical: `/${lng}`,
            languages: {
                en: '/en',
                ka: '/ka',
            },
        },
    };
}

async function MainPage({ params }: { params: Promise<{ lng: string }> }) {
    const { lng } = await params;

    const pictures = [
        { url: "/pics/grooming.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/IMG_0686.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/IMG_0688.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/IMG_0689.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/IMG_0690.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/IMG_0691.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/IMG_0693.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/IMG_0696.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/IMG_0753(1).webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/IMG_0875.webp", aspect: 3 / 4, loading: "lazy" },
        { url: "/pics/IMG_1116.webp", aspect: 3 / 4, loading: "lazy" },
        { url: "/pics/IMG_1423.webp", aspect: 3 / 4, loading: "lazy" },
        { url: "/pics/IMG_1433.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/IMG_1436.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/petshop-molly.webp", aspect: 16 / 9, loading: "lazy" }
    ];

    return (
        <>
            <ClientLanguageSync lng={lng} />
            <section>
                <MainHero lng={lng} />
            </section>
            <Why lng={lng} />
            <section style={{ minHeight: 400 }}>
                <Hero lng={lng} />
            </section>
            <section id="ourpartners" style={{ height: '300px' }}>
                <RunningLine lng={lng} />
            </section>
            <Gallery title="MollysSpace" pictures={pictures} />
            <Blog lng={lng} />
            <section id="map">
                <div style={{ height: '350px' }}>
                    <Map />
                </div>
            </section>
        </>
    );
}

export default MainPage;