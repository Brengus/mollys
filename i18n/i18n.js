'use client';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


const resources = {
    en: {
        translation: {
            "Tiktok": "Tiktok",
            "Facebook": "Facebook",
            "Instagram": "Instagram",
            "Light Mode": "Light/Dark Mode",
            "Home": "HOME",
            "About": "ABOUT US",
            "Partners": "OUR PARTNERS",
            "Services": "SERVICES",
            "MainHero": "WHERE WAGGING TAILS MEET EXPERT HANDS",
            "Grooming": "GROOMING",
            "Daycare": "DAYCARE",
            "About-h1": "IT'S A SPA DAY FOR YOUR BEST FRIEND",
            "About-h2": "About Us",
            "About-h3": "Where wagging tails meet top-tier styling",
            "Story": "Grooming",
            "Story-p": "Professional grooming for cats and dogs is a safe and gentle care process focused not only on maintaining a neat appearance but also on supporting the pet’s health and comfort. Procedures are carried out by professional groomers who take into consideration each animal’s individual needs, as well as coat and skin condition, using professional tools and premium-quality cosmetics to ensure a calm, stress-free experience and high-quality results. For identification and safety purposes, microchipping is required for all pets receiving grooming services.",
            "Philosophy": "Daycare",
            "Philosophy-p": "Dog daycare is a safe and supervised environment where dogs can spend the day playing, socializing, and relaxing while their owners are busy. It is suitable for friendly, social dogs that enjoy the company of other dogs, as well as for active ones that need regular exercise and mental stimulation. The daycare is located within our grooming salon and operates from 10:00 to 19:30. We provide essential amenities, including clean bedding, food and water bowls, to ensure your dog’s comfort throughout the day. Grooming services can also be arranged prior to pick-up. We welcome dogs weighing up to 10 kg, which allows us to maintain a calm atmosphere and ensure a safe and enjoyable experience for all guests. To help keep all dogs in our care healthy and safe, we require pets that are boarding with us to have current rabies and distemper vaccinations, along with other species-specific vaccinations.",
            "Bathing": "Bathing",
            "Bathing-p": "Using natural shampoos to suit a variety of coats, dogs enjoy the comfort of our purpose built hydro-bath.",
            "Clipping": "Clipping",
            "Clipping-p": "We have a range of different blade lengths depending on how long or short you would like.",
            "Safe Drying": "Safe Drying",
            "Safe Drying-p": "Each dog is dried by hand using a turbo blast drier enabling us to see each part of your dogs skin.",
            "Paws and Claws": "Paws & Claws",
            "Paws and Claws-p": "Nails are clipped, and matted hair in the pads removed. This prevents build up of mud and other harmful debris.",
            "Ear Cleaning": "Ear Cleaning",
            "Ear Cleaning-p": "We pride ourselves on only using ear cleaning products that contain natural ingredients for each dog we groom.",
            "Tick Removal": "Tick Removal",
            "Tick Removal-p": "Ticks are super easy to pick up, if you notice any on your dog then pop in. We are always happy to remove.",
            "Face Trim": "Face Trim",
            "Face Trim-p": "If you can't see a dogs eyes they cannot see yours either! Don't wait for your next appt, pop in for a trim.",
            "Spritz": "Spritz",
            "Spritz-p": "Dogs can be sprayed with a coat conditioning spray with a gorgeous scent to make them smell divine!",
            "Opening Hours": "OPENING HOURS",
            "Monday": "Monday",
            "Tuesday": "Tuesday",
            "Wednesday": "Wednesday",
            "Thursday": "Thursday",
            "Friday": "Friday",
            "Saturday": "Saturday",
            "Sunday": "Sunday",
            "Address": "Address",
            "Address-p": "71 Amsteroum Avenue Cronish Night, NY 35098",
            "Phone": "Phone",
            "Phone-reception": "Reception: ",
            "Phone-office": "Office: ",
            "Email": "Email",
            "Email-office": "Office: ",
            "Email-site": "Site: ",
            "Social": "Social Media",
            "Book Now": "Book Now",
            "Map": "ADDRESS"
        }
    },
    ka: {
        translation: {
            "Tiktok": "ტიკტოკი",
            "Facebook": "ფეისბუქი",
            "Instagram": "ინსტაგრამი",
            "Light Mode": "ლაით/დარქ მოუდი",
            "Home": "მთავარი",
            "About": "ჩვენს შესახებ",
            "Partners": "ჩვენი პარტნიორები",
            "Services": "სერვისები",
            "MainHero": "აბედნიერე შენი ოთხფეხა მეგობარი პროფესიონალების ხელში",
            "Grooming": "გრუმინგი",
            "Daycare": "დეიქეარი",
            "About-h1": "ეს არის სპა შენი საუკეთესო მეგობრისთვის",
            "About-h2": "ჩვენს შესახებ",
            "About-h3": "სად მოძრავი მიმართულების მონაწილეობა ხდება პროფესიონალური სტილის მიმართულებით",
            "Story": "გრუმინგი",
            "Story-p": "კატებისა და ძაღლების პროფესიონალური გრუმინგი წარმოადგენს უსაფრთხო და ნაზ მოვლის პროცესს, რომელიც მიზნად ისახავს არა მხოლოდ მოწესრიგებული გარეგნობის შენარჩუნებას, არამედ შინაური ცხოველის ჯანმრთელობისა და კომფორტის მხარდაჭერას. პროცედურები ტარდება პროფესიონალი გრუმერების მიერ, თითოეული ცხოველის ინდივიდუალური საჭიროებების, ბეწვისა და კანის მდგომარეობის გათვალისწინებით, პროფესიონალური ინსტრუმენტებისა და პრემიუმ ხარისხის კოსმეტიკის გამოყენებით, რათა უზრუნველყოფილი იყოს მშვიდი, სტრესისგან თავისუფალი პროცესი და მაღალი ხარისხის შედეგი.",
            "Philosophy": "ძაღლების ბაღი",
            "Philosophy-p": "ძაღლების ბაღი წარმოადგენს უსაფრთხო გარემოს, სადაც ძაღლებს შეუძლიათ დღე გაატარონ თამაშში, სოციალიზაციასა და დასვენებაში, სანამ მათი პატრონები დაკავებულნი არიან. სერვისი განკუთვნილია მეგობრული და სოციალურად აქტიური ძაღლებისთვის, რომლებსაც სიამოვნებთ სხვა ძაღლების გარემო, ასევე აქტიური ძაღლებისთვის, რომლებსაც სჭირდებათ რეგულარული ფიზიკური დატვირთვა. ბაღი მდებარეობს ჩვენი გრუმინგ სალონის სივრცეში და მუშაობს 10:00-დან 19:30-მდე. ჩვენი ოთხფეხა მეგობრებისთვის ვუზრუნველყოფთ აუცილებელ კომფორტს- სუფთა საწოლებს, საკვებს და წყლის ჯამებს, რათა თქვენი მეგობარი დღის განმავლობაში თავი კომფორტულად იგრძნოს. სურვილის შემთხვევაში, შესაძლებელია გრუმინგის სერვისის ჩატარებაც ძაღლის წაყვანამდე. ჩვენ ვიღებთ 10 კგ-მდე წონის ძაღლებს, რაც საშუალებას გვაძლევს შევინარჩუნოთ მშვიდი გარემო და უზრუნველვყოთ ყველა სტუმრისთვის უსაფრთხო და სასიამოვნო გამოცდილება. ჩვენი მზრუნველობის ქვეშ მყოფი ყველა ძაღლის ჯანმრთელობისა და უსაფრთხოების უზრუნველსაყოფად, აუცილებელია, რომ ბაღის ცხოველებს ჰქონდეთ განახლებული ცოფისა და ჭირის საწინააღმდეგო ვაქცინაცია, ასევე ასაკისა და სახეობის შესაბამისი სხვა აუცილებელი ვაქცინები.",
            "Bathing": "დაბანა და მოვლა",
            "Bathing-p": "ვიყენებთ ნატურალურ შამპუნებს სხვადასხვა ტიპის ბეწვისთვის; ძაღლები სიამოვნებას იღებენ ჩვენი სპეციალურად მოწყობილი ჰიდრო-აბაზანით.",
            "Clipping": "კრეჭა",
            "Clipping-p": "გვაქვს სხვადასხვა სიგრძის პირები იმის მიხედვით, თუ რამდენად მოკლე ან გრძელი გსურთ რომ იყოს ბეწვი.",
            "Safe Drying": "უსაფრთხო შრობა",
            "Safe Drying-p": "თითოეული ძაღლი შრება ხელით, ტურბო-საშრობის გამოყენებით, რაც საშუალებას გვაძლევს დეტალურად დავათვალიეროთ კანის ყველა ნაწილი.",
            "Paws and Claws": "თათები და ბრჭყალები",
            "Paws and Claws-p": "ვიჭერთ ბრჭყალებს და ვაშორებთ აბურდულ ბეწვს თათის ბალიშებიდან. ეს ხელს უშლის ტალახისა და სხვა მავნე ნარჩენების დაგროვებას.",
            "Ear Cleaning": "ყურების გაწმენდა",
            "Ear Cleaning-p": "ჩვენ ვამაყობთ იმით, რომ ყურების გასაწმენდად ვიყენებთ მხოლოდ ნატურალურ ინგრედიენტებზე დამზადებულ პროდუქტებს.",
            "Tick Removal": "ტკიპების მოცილება",
            "Tick Removal-p": "ტკიპების აკიდება ძალიან ადვილია. თუ შეამჩნევთ მათ თქვენს ძაღლზე, შემოიარეთ ჩვენთან. ჩვენ ყოველთვის მზად ვართ მათ მოსაცილებლად.",
            "Face Trim": "სახის ბეწვის შესწორება",
            "Face Trim-p": "თუ თქვენ ვერ ხედავთ ძაღლის თვალებს, ისიც ვერ ხედავს თქვენსას! ნუ დაელოდებით შემდეგ ვიზიტს, შემოიარეთ სახის ბეწვის შესასწორებლად.",
            "Spritz": "სურნელოვანი სპრეი",
            "Spritz-p": "ბეწვის დამატენიანებელი და სასიამოვნო არომატის მქონე სპრეი თქვენს ოთხფეხა მეგობარს საოცარ სურნელს შესძენს!",
            "Opening Hours": "სამუშაო საათები",
            "Monday": "ორშაბათი",
            "Tuesday": "სამშაბათი",
            "Wednesday": "ოთხშაბათი",
            "Thursday": "ხუთშაბათი",
            "Friday": "პარასკევი",
            "Saturday": "შაბათი",
            "Sunday": "კვირა",
            "Address": "მისამართი",
            "Address-p": "ამსტერდამის გამზირი 71, კრონიშ ნაითი, ნიუ-იორკი 35098",
            "Phone": "ტელეფონი",
            "Phone-reception": "მისაღები: ",
            "Phone-office": "ოფისი: ",
            "Email": "ელ-ფოსტა",
            "Email-office": "ოფისი: ",
            "Email-site": "საიტი: ",
            "Social": "სოციალური ქსელები",
            "Book Now": "დაჯავშნე ახლავე",
            "Map": "მისამართი"
        }
    }
};

i18n
    .use(LanguageDetector) // Add this
    .use(initReactI18next)
    .init({
        resources,
        lng: "ka",
        detection: {
            // order: look at path first (e.g., /ge), then query string (?lng=ge)
            order: ['path', 'querystring', 'cookie', 'localStorage', 'navigator'],
            lookupFromPathIndex: 0, // This looks at the first part of the URL
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;