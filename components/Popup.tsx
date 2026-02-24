'use client';
import "../css/popup.css";
import { useTranslation } from "next-i18next";

function Popup() {
    const { t } = useTranslation();
    return (
        <>
            <button
                className={`book-icon`}
                onClick={() => {
                    window.open("https://www.fresha.com/book-now/bregvasbusiness-efouvgsj/all-offer?share=true&pId=2786881", "_blank");
                }}
            >
                <div className="text-wrapping">
                    {t("Book Now").toUpperCase()}
                </div>
            </button >
        </>
    )
}

export default Popup