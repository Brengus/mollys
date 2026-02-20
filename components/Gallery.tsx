import Image from "next/image";
import { useTranslation } from "next-i18next";
import "../css/gallery.css";


export default function GalleryComponent() {
    const { t } = useTranslation();
    const pictures = [
        { url: "/gallery/dog1.jpeg", width: 4026, height: 6039, loading: "lazy" },
        { url: "/gallery/dog3.jpeg", width: 3935, height: 5902, loading: "lazy" },
        { url: "/gallery/dog4.jpeg", width: 6053, height: 4035, loading: "lazy" },
        { url: "/gallery/dog2.jpeg", width: 4204, height: 6306, loading: "lazy" },
        { url: "/gallery/dog5.jpeg", width: 4171, height: 2781, loading: "lazy" },
        { url: "/gallery/dog6.jpeg", width: 4956, height: 2868, loading: "lazy" },
        { url: "/gallery/dog7.jpeg", width: 5184, height: 3888, loading: "lazy" },
    ];

    return (
        <>
            <h2 className="gallery-title">
                {t("HappyClients")}
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
