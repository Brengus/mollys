'use client';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


const resources = {
    en: {
        translation: {
            "HappyClients": "OUR HAPPY CLIENTS",
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
            "Hygienic Grooming": "Hygienic Grooming",
            "Hygienic Grooming-p": [
                "Bathing with professional shampoo tailored to skin and coat type",
                "Drying and brushing to remove knots and excess fur",
                "Hygienic trim of paws, under-tail, and intimate areas",
                "Nail clipping to maintain correct length and prevent deformity",
                "Ear cleaning to remove accumulated dirt and wax",
                "Eye area cleaning to control tear stains"
            ],
            "Full Grooming": "Full Grooming",
            "Full Grooming-p": [
                "Bathing with professional shampoo suitable for the specific coat type",
                "Blow-drying and thorough brushing",
                "Haircut/styling according to breed standards and owner preference",
                "Hygienic zone processing (paws, intimate area, under-tail)",
                "Nail clipping and shaping",
                "Ear cleaning",
                "Eye area cleaning and removal of tear stains",
                "Optional superficial teeth cleaning",
                "Application of a light scented spray"
            ],
            "Exhibition Grooming": "Safe Drying",
            "Exhibition Grooming-p": [
                "Bathing with high-quality professional cosmetics",
                "Special drying techniques for volume and texture",
                "Cutting and shaping according to breed standards",
                "Coat straightening, structuring, and volume creation",
                "Perfect processing of paws and pads",
                "Detailed ear cleaning and tidying",
                "Cleanliness and symmetry control around the eyes",
                "Intense brushing and final detailing",
                "Final styling and fixatives"
            ],
            "Additional Services": "Additional Services",
            "Additional Services-p": [
                "Paraanal gland cleaning (especially for dogs 3–6 months old)",
                "Hygienic teeth cleaning and plaque removal",
                "Safe parasite treatment against fleas and ticks"
            ],
            "Para Anal": "Paraanal gland cleaning",
            "Para Anal-p": [
                "Cleaning of the anal (paraanal) glands",
                "Especially necessary for dogs between 3-6 months of age",
                "Recommended for dogs showing signs of 'scooting' (rubbing the rear on the floor) or unpleasant odor"
            ],
            "Teeth Cleaning": "Pet teeth cleaning",
            "Teeth Cleaning-p": [
                "Hygienic cleaning of teeth and gums and plaque removal",
                "Especially recommended for pets over 6 months of age",
                "Necessary for pets with bad breath or yellow/brown plaque on teeth",
                "Please visit a veterinary clinic for dental stone (tartar) removal requiring medical equipment"
            ],
            "Parasite Treatment": "Parasite Treatment",
            "Parasite Treatment-p": [
                "Treatment of dogs and cats against fleas and ticks",
                "Use of safe preparations with both immediate and long-term effects"
            ],
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
            "Address-p": "Ana Politkovskaya Street 4g, Jikia Residence, Tbilisi, Georgia",
            "Phone": "Phone",
            "Phone-reception": "Reception: ",
            "Phone-office": "Office: ",
            "Email": "Email",
            "Email-office": "Office: ",
            "Email-site": "Site: ",
            "Social": "Social Media",
            "Book Now": "Book Now",
            "Map": "ADDRESS",
            "Gallery": "GALLERY",
            "Blog": "BLOG",
            "Why-title": "WHY CHOOSE Molly's?",
            "View-more": "VIEW MORE"
        }
    },
    ka: {
        translation: {
            "HappyClients": "ჩვენი ბედნიერი კლიენტები",
            "Tiktok": "ტიკტოკი",
            "Facebook": "ფეისბუქი",
            "Instagram": "ინსტაგრამი",
            "Light Mode": "ლაით/დარქ მოუდი",
            "Home": "მთავარი",
            "About": "ჩვენ შესახებ",
            "Partners": "პარტნიორები",
            "Services": "სერვისები",
            "MainHero": "აბედნიერე შენი ოთხფეხა მეგობარი პროფესიონალების ხელში",
            "Grooming": "გრუმინგი",
            "Daycare": "დეიქეარი",
            "About-h1": "ეს არის სპა შენი საუკეთესო მეგობრისთვის",
            "About-h2": "ჩვენ შესახებ",
            "About-h3": "სად მოძრავი მიმართულების მონაწილეობა ხდება პროფესიონალური სტილის მიმართულებით",
            "Story": "გრუმინგი",
            "Story-p": "კატებისა და ძაღლების პროფესიონალური გრუმინგი წარმოადგენს უსაფრთხო და ნაზ მოვლის პროცესს, რომელიც მიზნად ისახავს არა მხოლოდ მოწესრიგებული გარეგნობის შენარჩუნებას, არამედ შინაური ცხოველის ჯანმრთელობისა და კომფორტის მხარდაჭერას. პროცედურები ტარდება პროფესიონალი გრუმერების მიერ, თითოეული ცხოველის ინდივიდუალური საჭიროებების, ბეწვისა და კანის მდგომარეობის გათვალისწინებით, პროფესიონალური ინსტრუმენტებისა და პრემიუმ ხარისხის კოსმეტიკის გამოყენებით, რათა უზრუნველყოფილი იყოს მშვიდი, სტრესისგან თავისუფალი პროცესი და მაღალი ხარისხის შედეგი.",
            "Philosophy": "ძაღლების ბაღი",
            "Philosophy-p": "ძაღლების ბაღი წარმოადგენს უსაფრთხო გარემოს, სადაც ძაღლებს შეუძლიათ დღე გაატარონ თამაშში, სოციალიზაციასა და დასვენებაში, სანამ მათი პატრონები დაკავებულნი არიან. სერვისი განკუთვნილია მეგობრული და სოციალურად აქტიური ძაღლებისთვის, რომლებსაც სიამოვნებთ სხვა ძაღლების გარემო, ასევე აქტიური ძაღლებისთვის, რომლებსაც სჭირდებათ რეგულარული ფიზიკური დატვირთვა. ბაღი მდებარეობს ჩვენი გრუმინგ სალონის სივრცეში და მუშაობს 10:00-დან 19:30-მდე. ჩვენი ოთხფეხა მეგობრებისთვის ვუზრუნველყოფთ აუცილებელ კომფორტს- სუფთა საწოლებს, საკვებს და წყლის ჯამებს, რათა თქვენი მეგობარი დღის განმავლობაში თავი კომფორტულად იგრძნოს. სურვილის შემთხვევაში, შესაძლებელია გრუმინგის სერვისის ჩატარებაც ძაღლის წაყვანამდე. ჩვენ ვიღებთ 10 კგ-მდე წონის ძაღლებს, რაც საშუალებას გვაძლევს შევინარჩუნოთ მშვიდი გარემო და უზრუნველვყოთ ყველა სტუმრისთვის უსაფრთხო და სასიამოვნო გამოცდილება. ჩვენი მზრუნველობის ქვეშ მყოფი ყველა ძაღლის ჯანმრთელობისა და უსაფრთხოების უზრუნველსაყოფად, აუცილებელია, რომ ბაღის ცხოველებს ჰქონდეთ განახლებული ცოფისა და ჭირის საწინააღმდეგო ვაქცინაცია, ასევე ასაკისა და სახეობის შესაბამისი სხვა აუცილებელი ვაქცინები.",
            "Hygienic Grooming": "ჰიგიენური გრუმინგი",
            "Hygienic Grooming-p": [
                "დაბანა პროფესიონალური შამპუნით – კანის ტიპისა და ბეწვის სტრუქტურის გათვალისწინებით",
                "ბეწვის გაშრობა და დავარცხნა – კვანძების და ზედმეტი ბეწვის მოცილება",
                "ჰიგიენური ჭრა – თათების, კუდქვეშა და ინტიმური არეების დამუშავება",
                "ფრჩხილების დაჭრა – სწორი სიგრძის შენარჩუნება",
                "ყურების წმენდა – დაგროვილი ჭუჭყისა და ცვილის მოცილება",
                "თვალების გარშემო წმენდა – ცრემლდენის ლაქების კონტროლი"
            ],
            "Full Grooming": "სრული გრუმინგი",
            "Full Grooming-p": [
                "ბეწვის ტიპის შესაბამისი პროფესიონალური შამპუნით დაბანა",
                "ფენით გაშრობა და საფუძვლიანი დავარცხნა",
                "ბეწვის შეჭრა/მოდელირება (ჯიშისა და სურვილის მიხედვით)",
                "ჰიგიენური ზონების დამუშავება (თათები, ინტიმური არე, კუდქვეშა ნაწილი)",
                "ფრჩხილების დაჭრა და ფორმირება",
                "ყურების წმენდა",
                "თვალების გარშემო გაწმენდა და ცრემლდენის ლაქების მოცილება",
                "(სურვილის შემთხვევაში) კბილების ზედაპირული წმენდა",
                "მსუბუქი სურნელოვანი სპრეის გამოყენება"
            ],
            "Exhibition Grooming": "საგამოფენო გრუმინგი",
            "Exhibition Grooming-p": [
                "მაღალი ხარისხის პროფესიონალური კოსმეტიკით დაბანა",
                "სპეციალური ტექნიკით გაშრობა მოცულობისა და ტექსტურის მისაღებად",
                "ჯიშის სტანდარტის შესაბამისი შეჭრა და ფორმირება",
                "ბეწვის გასწორება, სტრუქტურირება და მოცულობის შექმნა",
                "თათებისა და ბალიშების იდეალური დამუშავება",
                "ყურების დეტალური წმენდა და მოწესრიგება",
                "თვალების გარშემო სისუფთავის და სიმეტრიის კონტროლი",
                "ინტენსიური დავარცხნა და ფინალური დეტალიზაცია",
                "ფინალური სტაილინგი"
            ],
            "Additional Services": "დამატებითი სერვისები",
            "Additional Services-p": [
                "პარაანალური ჯირკვლების გაწმენდა (განსაკუთრებით 3–6 თვის ასაკის ძაღლებისთვის)",
                "ცხოველების კბილების ჰიგიენური წმენდა და ნადების მოცილება",
                "პარაზიტებზე დამუშავება (რწყილებისა და ტკიპების საწინააღმდეგოდ)"
            ],
            "Para Anal": "პარაანალური ჯირკვლების გაწმენდა",
            "Para Anal-p": [
                "უკანა ტანის (პარაანალური) ჯირკვლების გასუფთავება",
                "განსაკუთრებით აუცილებელია 3–6 თვის ასაკის ძაღლებისთვის",
                "რეკომენდებულია იმ ძაღლებისთვის, რომლებსაც აღენიშნებათ უკანალის ხახუნი იატაკზე ან უსიამოვნო სუნი"
            ],
            "Teeth Cleaning": "ცხოველების კბილების წმენდა",
            "Teeth Cleaning-p": [
                "კბილებისა და ღრძილების ჰიგიენური წმენდა და ნადებისა მოცილება",
                "განსაკუთრებით რეკომენდებულია 6 თვის ზემოთ ასაკის ცხოველებისთვის",
                "აუცილებელია პირიდან უსიამოვნო სუნის ან კბილებზე ნადების არსებობისას",
                "დენტალური ქვის მოსაცილებლად მიმართეთ ვეტერინარულ კლინიკას"
            ],
            "Parasites": "პარაზიტებზე დამუშავება",
            "Parasites-p": [
                "ძაღლებისა და კატების დამუშავება რწყილებისა და ტკიპების საწინააღმდეგოდ",
                "გამოიყენება როგორც მყისიერი, ასევე გრძელვადიანი მოქმედების უსაფრთხო პრეპარატები"
            ],
            "Opening Hours": "სამუშაო საათები",
            "Monday": "ორშაბათი",
            "Tuesday": "სამშაბათი",
            "Wednesday": "ოთხშაბათი",
            "Thursday": "ხუთშაბათი",
            "Friday": "პარასკევი",
            "Saturday": "შაბათი",
            "Sunday": "კვირა",
            "Address": "მისამართი",
            "Address-p": "ანა პოლიტკოვსკაიას ქუჩა 4გ, ჯიქია რეზიდენსი, თბილისი, საქართველო",
            "Phone": "ტელეფონი",
            "Phone-reception": "მიმღები: ",
            "Phone-office": "ოფისი: ",
            "Email": "ელ-ფოსტა",
            "Email-office": "ოფისი: ",
            "Email-site": "საიტი: ",
            "Social": "სოციალური ქსელები",
            "Book Now": "დაჯავშნე ახლავე",
            "Map": "მისამართი",
            "Gallery": "გალერეა",
            "Blog": "ბლოგი",
            "Why-title": "რატომ Molly's?",
            "View-more": "იხილეთ მეტი"
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