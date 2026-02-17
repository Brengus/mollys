'use client';
import MainHero from '@/components/MainHero';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import RunningLine from '@/components/RunningLine';
import Services from '@/components/Services';
import Map from '@/components/Map';
import { appWithTranslation } from 'next-i18next';

function MainPage() {
    return (
        <>
            <MainHero />
            <Hero />
            <Services />
            <AboutUs />
            <RunningLine />
            <Map />
        </>
    );
}

export default appWithTranslation(MainPage);