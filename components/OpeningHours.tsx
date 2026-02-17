import "../css/openinghours.css";
import { useSelector } from "react-redux";
import { useTranslation } from "next-i18next";
function OpeningHours() {
    const { t } = useTranslation();
    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode);
    const objArr = [
        { day: t('Monday'), hours: '9:00 - 17:00' },
        { day: t('Tuesday'), hours: '9:00 - 17:00' },
        { day: t('Wednesday'), hours: '9:00 - 17:00' },
        { day: t('Thursday'), hours: '9:00 - 17:00' },
        { day: t('Friday'), hours: '9:00 - 17:00' },
        { day: t('Saturday'), hours: '10:00 - 16:00' },
        { day: t('Sunday'), hours: 'Closed' },
    ]

    return (
        <>
            <div id="openinghours" className="opening-main">
                <h3 className={`opening-title ${isDarkmode ? "opening-title-dark" : ""}`}>{t('Opening Hours')}</h3>
                {/* <div className={`opening-subtitle ${isDarkmode ? "opening-subtitle-dark" : ""}`}>Grooming sessions are strictly by appointment only. All pre-booked appointments must follow the Salon Policy guidelines.</div> */}
                <div className="opening-card-parent">
                    {objArr.map((item, index) => {
                        return (
                            <div className={`opening-child ${isDarkmode ? "opening-child-dark" : ""}`} key={index} >
                                <h3>{item.day}</h3>
                                <p>{item.hours}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default OpeningHours