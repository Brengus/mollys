import "../css/hero.css";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'next-i18next';

function Hero({ lng }: { lng: string }) {
    const { t } = useTranslation();
    return (
        <>
            <div className="hero-grid">
                <div className="hero-text box-1" style={{ gridArea: "box-1" }}>
                    <Image
                        src="/pics/daycare.webp"
                        alt="Grooming service"
                        fill
                        // priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="hero-img-optimized"
                        loading='lazy'

                    />
                </div>
                <div className="hero-text box-2" style={{ gridArea: "box-2" }}>
                    <Image
                        src="/pics/outsidearea.webp"
                        alt="Happy dog"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="hero-img-optimized"
                        loading='lazy'

                    />
                </div>
                <div className="hero-text box-3" style={{ gridArea: "box-3" }}>
                    <Image
                        src="/pics/coffee.webp"
                        alt="Our Studio"
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="hero-img-optimized"
                        loading='lazy'

                    />
                    <div className="box-overlay">
                        <Link className="hero-link" href={`${lng ? 'ka/' : 'en/'}gallery`}>
                            {t("View-more").toUpperCase()}
                        </Link>
                    </div>
                </div>
                <div className="hero-text box-4" style={{ gridArea: "box-4" }}>
                    <Image
                        src="/pics/door.webp"
                        alt="Dog grooming"
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="hero-img-optimized"
                        loading='lazy'
                    />
                </div>
            </div>
        </>
    )
}
export default Hero;