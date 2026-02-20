import Image from "next/image";
import { useTranslation } from "next-i18next";


export default function GalleryComponent() {
    const { t } = useTranslation();
    const pictures = [
        { url: "/gallery/dog1.jpeg", width: 4026, height: 6039, loading: "priority" },
        { url: "/gallery/dog2.jpeg", width: 4204, height: 6306, loading: "priority" },
        { url: "/gallery/dog3.jpeg", width: 3935, height: 5902, loading: "priority" },
        { url: "/gallery/dog4.jpeg", width: 6053, height: 4035, loading: "lazy" },
        { url: "/gallery/dog5.jpeg", width: 4171, height: 2781, loading: "lazy" },
        { url: "/gallery/dog6.jpeg", width: 4956, height: 2868, loading: "lazy" },
        { url: "/gallery/dog7.jpeg", width: 5184, height: 3888, loading: "lazy" },
    ];

    return (
        <>
            <h2 style={{
                textAlign: "center",
                fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                lineHeight: "1.5em",
                marginBottom: "4rem",
                color: "var(--color-two)",
                fontWeight: "700"
            }}>
                {t("HappyClients")}
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "10px",
                }}
            >
                {pictures.map((pic) => (
                    <div
                        key={pic.url}
                        style={{
                            position: "relative",
                            width: "100%",
                            breakInside: "avoid",
                            marginBottom: "10px",
                        }}
                    >
                        <Image
                            src={pic.url}
                            alt="Dog photo"
                            title="Dog photo"
                            width={pic.width} // width will scale to column width
                            height={pic.height} // we will let Next.js calculate height automatically
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "8px",
                                display: "block",
                            }}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div >
        </>
    );
}
