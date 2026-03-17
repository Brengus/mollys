import MainHero from '@/components/MainHero';
import Hero from '@/components/Hero';
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

    return (
        <>
            <ClientLanguageSync lng={lng} />
            <section>
                <MainHero lng={lng} />
            </section>
            <section style={{ minHeight: 400 }}>
                <Hero lng={lng} />
            </section>
            <section id="ourpartners" style={{ height: '300px' }}>
                <RunningLine lng={lng} />
            </section>
            <Why lng={lng} />
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