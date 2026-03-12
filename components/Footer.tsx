'use client';
import "../css/footer.css";
import { useTranslation } from "react-i18next";
import Image from 'next/image'; // Optimized Next.js Image component

function Footer() {
    const { t } = useTranslation();
    // backgroundColor: "var(--color-two)",

    return (
        <div style={{ backgroundColor: "#36404A" }}>
            <div className="main-footer">
                <div className="card-footer">
                    <div className="title-footer letter-spacing-medium">
                        {t("Address").toUpperCase()}
                    </div>
                    <div className="letter-spacing-small opacity-90">
                        <a href="https://maps.app.goo.gl/Jdq79VnCxxiASKY5A">{t("Address-p")}</a>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="title-footer letter-spacing medium">{t("Phone").toUpperCase()}</div>
                    <div className="letter-spacing-small opacity-90"><a href="tel:+995568611223">+995 568 611 223</a></div>
                </div>
                <div className="card-footer">
                    <div className="title-footer letter-spacing-medium">{t("Email").toUpperCase()}</div>
                    <div className="letter-spacing-small opacity-90"><a href="mailto:mollys.grooming.daycare@gmail.com" className="link-footer">mollys.grooming.daycare@gmail.com</a></div>
                </div>
                <div className="card-footer">
                    <div className="title-footer letter-spacing-medium">{t("Social").toUpperCase()}</div>
                    <div className="footer-icons-list">
                        <Image src="/social/tik-tok.webp" width="32" height="32" alt="Tiktok" title={t("Tiktok")} className="footer-icon" loading="lazy" onClick={() => window.open("https://www.tiktok.com/@mollys_ge?_r=1&_t=ZS-94H9ezPTjv6", "_blank")} />
                        <Image src="/social/instagram.webp" width="32" height="32" alt="Instagram" title={t("Instagram")} className="footer-icon" loading="lazy" onClick={() => window.open("https://www.instagram.com/mollys_ge?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank")} />
                        <Image src="/social/facebook.webp" width="32" height="32" title={t("Facebook")} alt="Facebook" className="footer-icon" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer