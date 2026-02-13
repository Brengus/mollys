'use client';
import MainHero from '@/components/MainHero';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import RunningLine from '@/components/RunningLine';
import Services from '@/components/Services';
// import OpeningHours from '@/components/OpeningHours';

export default function MainPage() {
    return (
        <>
            <MainHero />
            <Hero />
            <AboutUs />
            <RunningLine />
            <Services />
            {/* <OpeningHours /> */}
        </>
    );
}