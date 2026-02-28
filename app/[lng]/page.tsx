'use client';
import { useSyncLanguage } from '../useSyncLanguage';
import MainHero from '@/components/MainHero';
import Hero from '@/components/Hero';
import RunningLine from '@/components/RunningLine';
import Why from '@/components/Why';
import Map from '@/components/Map';
import { appWithTranslation } from 'next-i18next';
import { useParams } from 'next/navigation';
import Blog from '@/components/Blog';

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
                <Hero lng={lng} />
            </section>
            <section id="ourpartners" style={{ height: '300px' }}>
                <RunningLine />
            </section>
            <Why />
            <Blog lng={lng} />
            <section id="map">
                <div style={{ height: '350px' }}>
                    <Map />
                </div>
            </section>
        </>
    );
}

export default appWithTranslation(MainPage);