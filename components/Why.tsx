import "../css/why.css";
import Wave from "./Wave";
// import Image from "next/image";
import GroomingVideo from "./Commercial";
import { useTranslation } from 'next-i18next';

function Why() {
    const array = [
        {
            title: "პრემიუმ ხარისხის გრუმინგი",
            desc: "ჩვენი გრუმინგ სალონი გთავაზობთ პრემიუმ ხარისხის მომსახურებას. ვიყენებთ პროფესიონალური, პრემიუმ ხაზის კოსმეტიკას, რომელიც ინდივიდუალურად შეირჩევა თითოეული ძაღლის და კატის ჯიშისა და ბეწვის ტიპის მიხედვით. ეს უზრუნველყოფს ბეწვის ჯანმრთელობას, სისუფთავეს და იდეალურ ვიზუალს.",
            box: "box-2"
        },
        {
            title: "გამოცდილება და უსაფრთხოება",
            desc: "ჩვენი გრუმერები 7 წლიანი გამოცდილების პროფესიონალები არიან, რომლებიც თითოეულ ცხოველს მაქსიმალური ყურადღებით და სიყვარულით უვლიან. პროცესში არ ვიყენებთ დამამშვიდებელ ან სედატიურ ნივთიერებებს — ჩვენთვის მნიშვნელოვანია, რომ თქვენი ოთხფეხა მეგობარი იყოს უსაფრთხოდ და კომფორტულად.",
            box: "box-3"
        },
        {
            title: "გამჭვირვალე და თანამედროვე გარემო",
            desc: "ჩვენს სალონში გრუმინგ ზონა სრულიად გამჭვირვალეა და დამონტაჟებულია კამერები, რათა ნებისმიერ დროს შეძლოთ თქვენი ცხოველის გრუმინგ პროცესის თვალყურის დევნება. ვიყენებთ საუკეთესო ტექნიკას, რაც პროცესს უფრო სწრაფს, უსაფრთხოს და კომფორტულს ხდის.",
            box: "box-4"
        },
        {
            title: "სივრცე ცხოველისა და პატრონის კომფორტისთვის",
            desc: "სალონი მოწყობილია ისე, რომ კომფორტული იყოს არა მხოლოდ ცხოველისთვის, არამედ მისი პატრონისთვისაც. „მოლი“ მხოლოდ გრუმინგ სალონი არ არის — ის ასევე წარმოადგენს ძაღლების ბაღს, სადაც თქვენს ოთხფეხა მეგობარს შეუძლია დრო სასიამოვნოდ და აქტიურად გაატაროს, თქვენ კი აპარატის ყავა მიირთვათ და დაელოდოთ თქვენს ოთხფეხა მეგობარს ესტეტიურ და მოწესრიგებულ გარემოშო.",
            box: "box-5"
        },

    ]
    const { t } = useTranslation();
    return (
        <>
            <div className="why-wave">
                <Wave />
            </div>

            <h3 className="why-title letter-spacing">{t("Why-title").toUpperCase()}</h3>
            <div className="why-grid">
                <div className="why-text why-box-1" style={{ gridArea: "box-1" }}>
                    <GroomingVideo />
                    {/* <Image src={"/pics/grooming.webp"} alt="Our Studio"
                        width="6000"
                        height="3376"
                        // sizes="(max-width: 768px) 100vw, 25vw"
                        loading='lazy' /> */}
                </div>
                {
                    array.map((item, index) => {
                        return <div key={index} className={`why-text why-${item.box}`} style={{ gridArea: `${item.box}` }}>
                            <div>
                                <div className="why-subtitle letter-spacing-medium">{item.title}</div>
                                <div className="why-desc letter-spacing-small">{item.desc}</div>
                            </div>
                        </div>
                    })
                }
            </div>

        </>
    )
}
export default Why;