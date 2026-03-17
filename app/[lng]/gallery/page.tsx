import Gallery from '@/components/Gallery';
// import { appWithTranslation } from 'next-i18next';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }) {
    const { lng } = await params;
    const path = 'gallery'; // Change this for each page (e.g., 'about', 'gallery')

    return {
        alternates: {
            canonical: `/${lng}/${path}`,
            languages: {
                en: `/en/${path}`,
                ka: `/ka/${path}`,
            },
        },
    };
}

function GalleryPage() {

    return (
        <>
            <Gallery />
        </>
    );
}

export default GalleryPage;