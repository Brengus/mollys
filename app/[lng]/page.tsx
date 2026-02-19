'use client';
import MainHero from '@/components/MainHero';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import RunningLine from '@/components/RunningLine';
import Services from '@/components/Services';
import Map from '@/components/Map';
import { appWithTranslation } from 'next-i18next';
import GalleryComponent from '@/components/Gallery';

function MainPage() {


    return (
        <>
            <section >
                <div style={{ minHeight: 600 }}>
                    <MainHero />
                </div>
            </section>
            <section >
                <div style={{ minHeight: 400 }}>
                    <Hero />
                </div>
            </section>
            <section >
                <div style={{ minHeight: 900 }}>
                    <GalleryComponent />
                </div>
            </section>
            <section id="services" >
                <div style={{ minHeight: '600px' }}>
                    <Services />
                </div>
            </section>
            <section id="aboutus">
                <div style={{ minHeight: '900px' }}>
                    <AboutUs />
                </div>

            </section>
            <section id="ourpartners" >
                <div style={{ minHeight: '200px' }}>
                    <RunningLine />
                </div>
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