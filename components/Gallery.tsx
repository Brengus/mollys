'use client';
import Image from "next/image";
import { useTranslation } from "next-i18next";
import "../css/gallery.css";

export default function GalleryComponent() {
    const { t } = useTranslation();
    const pictures = [
        { url: "/pics/banner.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/bath.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/coffee.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/daycare.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/daycaretwo.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/daycarethree.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/dog.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/door.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/grooming.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/groomingdog.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/outsidearea.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/reception.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/shampoo.webp", aspect: 16 / 9, loading: "lazy" },
        { url: "/pics/toys.webp", aspect: 16 / 9, loading: "lazy" }
    ];

    return (
        <>
            <h2 className="gallery-title">{t("HappyClients").toUpperCase()}</h2>
            <div className="gallery">
                {pictures.map((pic) => (
                    <div
                        key={pic.url}
                        className="gallery-item"
                        style={{ aspectRatio: pic.aspect }}
                    >
                        <Image
                            src={pic.url}
                            alt="Dog photo"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="gallery-image-fill"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div >
        </>
    );
}
