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
            "Story": "OUR STORY",
            "Story-p": "Founded on the belief that grooming shouldn't be scary, Molly's was born out of a simple necessity: finding a groomer who treats pets like family. We realized that a great haircut is useless if the dog is stressed. That's why we've built a sanctuary where patience is our priority and treats are always on the house.",
            "Philosophy": "OUR PHILOSOPHY",
            "Philosophy-p": "We don't believe in \"rushing the process.\" Every snout, paw, and tail is different. Whether your pup is a nervous nelly or a drama queen, we take the time to ensure they feel safe, comfortable, and loved before the clippers ever turn on.",
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
        }
    },
    ge: {
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
            "Story": "ჩვენი ისტორია",
            "Story-p": "ჩვენთვის შეფასებული გრუმინგის გამოყენება, რომლიც შეუძლიათ, გვხდეს დღეში, თუმცა, კონკრეტულად, ოთხფეხა მეგობრისთვის. მივხვდით რომ კარგი თმის შეჭრა უსარგებლოა, თუ ძაღლი სტრესშია. ამიტომ შევქმენით თავშესაფარი, სადაც მოთმინება ჩვენი პრიორიტეტია და ტკბილეულები ყოველთვის უფასოა.",
            "Philosophy": "ჩვენი ფილოზოფია",
            "Philosophy-p": "ჩვენ არ ვემხრობით პროცესის დაჩქარებას. ყველა ცხვირი, თათი და კუდი განსხვავებულია. მიუხედავად იმისა, თქვენი ოთხფეხა მეგობარი მშიშარაა თუ ნამდვილი „დრამა ქუინი“, ჩვენ დროს არ ვზოგავთ, რათა მან თავი უსაფრთხოდ, კომფორტულად და საყვარლად იგრძნოს მანამ, სანამ საკრეჭი მანქანა ჩაირთვება.",
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
            "Book Now": "დაჯავშნე ახლავე"
        }
    }
};

i18n
    .use(LanguageDetector) // Add this
    .use(initReactI18next)
    .init({
        resources,
        // lng: "en", <--- REMOVE THIS line
        fallbackLng: "ge",
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