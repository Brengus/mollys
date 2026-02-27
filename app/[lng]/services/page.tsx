'use client';
import Services from '@/components/Services';
import { appWithTranslation } from 'next-i18next';

function ServicesPage() {

    return (
        <>
            <Services />
        </>
    );
}

export default appWithTranslation(ServicesPage);