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

    const pictures = [
        { url: "/clientPics/dog.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_0011.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_0071.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_0192.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_0272.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_0334.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_0501.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_0720.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_0815.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_0857.webp", aspect: 3 / 4, loading: "lazy" },
        { url: "/clientPics/IMG_0876.webp", aspect: 3 / 4, loading: "lazy" },
        { url: "/clientPics/IMG_1009.webp", aspect: 3 / 4, loading: "lazy" },
        { url: "/clientPics/IMG_1027.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_1389.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_1520.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_1521.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_1523.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_1524.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_1525.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_2592.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_2597.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/clientPics/IMG_8348.webp", aspect: 16 / 9, loading: "lazy" }
    ];

    return (
        <>
            <Gallery title="HappyClients" pictures={pictures} />
        </>
    );
}

export default GalleryPage;