'use client';
import AboutUs from '@/components/AboutUs';
import { appWithTranslation } from 'next-i18next';

function AboutUsComponent() {

    return (
        <>
            <div style={{ margin: "30px auto" }}>
                <AboutUs />
            </div>

        </>
    );
}

export default appWithTranslation(AboutUsComponent);