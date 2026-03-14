import "../css/hero.css";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'next-i18next';

function Hero({ lng }: { lng: string }) {
    const { t } = useTranslation();
    const heroImages = [
        { className: "box-1", src: "/pics/daycare.webp", alt: "Grooming service", size: "(max-width: 768px) 100vw, 50vw" },
        { className: "box-2", src: "/pics/outsidearea.webp", alt: "Happy dog", size: "(max-width: 768px) 100vw, 33vw" },
        { className: "box-3", src: "/pics/coffee.webp", alt: "Our Studio", size: "(max-width: 768px) 100vw, 25vw", hasLink: true },
        { className: "box-4", src: "/pics/door.webp", alt: "Daycare", size: "(max-width: 768px) 100vw, 25vw" },
    ]
    return (
        <div className="hero-grid">
            {heroImages.map(item => {
                return <div key={item.className} className={`hero-text ${item.className}`} style={{ gridArea: item.className }} >
                    <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes={item.size}
                        className="hero-img-optimized"
                        loading="lazy"
                    />
                    {item.hasLink && (
                        <div className="box-overlay">
                            <Link className="hero-link" href={`${lng ? 'ka/' : 'en/'}gallery`}>
                                {t("View-more").toUpperCase()}
                            </Link>
                        </div>
                    )}
                </div>
            })}
        </div>
    )
}
export default Hero;