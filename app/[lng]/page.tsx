'use client';
import { useSyncLanguage } from '../useSyncLanguage';
import MainHero from '@/components/MainHero';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import RunningLine from '@/components/RunningLine';
import Services from '@/components/Services';
import Map from '@/components/Map';
import { appWithTranslation } from 'next-i18next';
import GalleryComponent from '@/components/Gallery';
import { useParams } from 'next/navigation';

function MainPage() {
    const params = useParams();
    const lng = params.lng as string;
    useSyncLanguage();

    return (
        <>
            <section>
                <MainHero lng={lng} />
            </section>
            <section style={{ minHeight: 400 }}>
                <Hero />
            </section>
            <section style={{ maxWidth: "1200px", minHeight: "1200px", margin: "0 auto", padding: "20px" }}>
                <GalleryComponent />
            </section>
            <section id="services" style={{ minHeight: '600px' }}>
                <Services />
            </section>
            <AboutUs />
            <section id="ourpartners" style={{ height: '300px' }}>
                <RunningLine />
            </section>
            <section id="map">
                <div style={{ height: '350px' }}>
                    <Map />
                </div>
            </section>
        </>
    );
}

export default appWithTranslation(MainPage);