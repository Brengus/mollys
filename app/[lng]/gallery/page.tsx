'use client';
import Gallery from '@/components/Gallery';
import { appWithTranslation } from 'next-i18next';

function GalleryPage() {

    return (
        <>
            <Gallery />
        </>
    );
}

export default appWithTranslation(GalleryPage);