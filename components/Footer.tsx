'use client';
import "../css/footer.css"
import { useTranslation } from "react-i18next"
function Footer() {
    const { t } = useTranslation();

    return (
        <div style={{ backgroundColor: "var(--color-two)" }}>
            <div className="main-footer">
                <div className="card-footer">
                    <div className="title-footer">{t("Address")}</div>
                    <div>{t("Address-p")}</div>
                </div>
                <div className="card-footer">
                    <div className="title-footer">{t("Phone")}</div>
                    <div>{t("Phone-reception")} : +995 590 010 203</div>
                    <div>{t("Phone-office")} : +995 510 020 453</div>
                </div>
                <div className="card-footer">
                    <div className="title-footer">{t("Email")}</div>
                    <div><span>{t("Email-office")} : </span><a href="mailto:sao@example.com" className="link-footer">info@mollys.com</a></div>
                    <div><span>{t("Email-site")} : </span><a href="mailto:sao@example.com" className="link-footer">admin@mollys.com</a></div>
                </div>
                <div className="card-footer">
                    <div className="title-footer">{t("Social")}</div>
                    <div className="footer-icons-list">
                        <img src="../social/tik-tok.png" alt="Tiktok" title={t("Tiktok")} className="footer-icon" />
                        <img src="../social/instagram.png" alt="Instagram" title={t("Instagram")} className="footer-icon" onClick={() => window.open("https://www.instagram.com/mollys_ge?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank")} />
                        <img src="../social/facebook.png" title={t("Facebook")} alt="Facebook" className="footer-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer