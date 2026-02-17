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
            <section>
                <MainHero />
                <Hero />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="aboutus">
                <AboutUs />
            </section>
            <section id="ourpartners">
                <RunningLine />
            </section>
            <section id="map">
                <Map />
            </section>
        </>
    );
}

export default appWithTranslation(MainPage);