import Image from "next/image";
import { useTranslation } from "next-i18next";
import "../css/gallery.css";


export default function GalleryComponent() {
    const { t } = useTranslation();
    const pictures = [
        { url: "/pics/banner.webp", width: 6000, height: 3376, loading: "lazy" },
        { url: "/pics/bath.webp", width: 6000, height: 3376, loading: "lazy" },
        { url: "/pics/coffee.webp", width: 6000, height: 3376, loading: "lazy" },
        { url: "/pics/daycare.webp", width: 6000, height: 3376, loading: "lazy" },
        { url: "/pics/daycaretwo.webp", width: 6000, height: 3376, loading: "lazy" },
        { url: "/pics/daycarethree.webp", width: 6000, height: 3376, loading: "lazy" },
        { url: "/pics/dog.webp", width: 6000, height: 3376, loading: "lazy" },
        { url: "/pics/door.webp", width: 6000, height: 3376, loading: "lazy" },
        { url: "/pics/grooming.webp", width: 6000, height: 3376, loading: "lazy" },
        { url: "/pics/groomingdog.webp", width: 6000, height: 3376, loading: "lazy" },
        { url: "/pics/outsidearea.webp", width: 6000, height: 3376, loading: "lazy" },
        { url: "/pics/reception.webp", width: 6000, height: 3376, loading: "lazy" },
        { url: "/pics/shampoo.webp", width: 6000, height: 3376, loading: "lazy" },
        { url: "/pics/toys.webp", width: 6000, height: 3376, loading: "lazy" }
    ];

    return (
        <>
            <h2 className="gallery-title">
                {t("HappyClients").toUpperCase()}
            </h2>

            <div
                className="gallery"
            >
                {pictures.map((pic) => (
                    <div
                        key={pic.url}
                        className="gallery-item"
                    >
                        <Image
                            className="gallery-image"
                            src={pic.url}
                            alt="Dog photo"
                            title="Dog photo"
                            width={pic.width} // width will scale to column width
                            height={pic.height} // we will let Next.js calculate height automatically
                            loading="lazy"
                        />
                    </div>
                ))}
            </div >
        </>
    );
}
