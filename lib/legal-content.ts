export type QuestionSection = "general" | "special";
export type LegalQuestion = { id: string; section: QuestionSection; number: number; question: string; options: string[]; correctIndex: number };
export type LegalCase = { id: string; number: number; title: string; situation: string; prompt: string; qualification: string; reasoning: string };
export const legalQuestions: LegalQuestion[] = [
  {
    "id": "general-1",
    "section": "general",
    "number": 1,
    "question": "Jinoyat kodeksiga ko‘ra, jinoyat deb nimaga aytiladi?",
    "options": [
      "Har qanday noqonuniy qilmish",
      "Ijtimoiy xavfli qilmish",
      "Faqat og‘ir qilmish",
      "Sud hukmi bilan belgilangan qilmish"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-2",
    "section": "general",
    "number": 2,
    "question": "Jinoiy javobgarlik yoshi umumiy tartibda necha yoshdan boshlanadi?",
    "options": [
      "14 yosh",
      "16 yosh",
      "18 yosh",
      "15 yosh"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-3",
    "section": "general",
    "number": 3,
    "question": "Jinoyat kodeksining 17-moddasiga ko‘ra, qaysi jinoyatlar uchun javobgarlik 13 yoshdan boshlanadi?",
    "options": [
      "O‘g‘irlik",
      "Qasddan odam o‘ldirish",
      "Tovlamachilik",
      "Jinoiy javobgarlik 13 yoshdan boshlanmaydi"
    ],
    "correctIndex": 3
  },
  {
    "id": "general-4",
    "section": "general",
    "number": 4,
    "question": "Jinoyat qonunining vaqt bo‘yicha amal qilishi qaysi paytdan e’tiboran hisoblanadi?",
    "options": [
      "Jinoyat sodir etilgan paytda amalda bo‘lgan qonun",
      "Jinoyat ochilgan paytdagi qonun",
      "Tergov boshlangan paytdagi qonun",
      "Sud hukmi chiqarilgan paytdagi qonun"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-5",
    "section": "general",
    "number": 5,
    "question": "Jinoyat qonunining hududiylik prinsipiga ko‘ra, O‘zbekiston hududida jinoyat sodir etgan shaxs qanday javobgarlikka tortiladi?",
    "options": [
      "Xalqaro sud tomonidan",
      "O‘zbekiston Respublikasi Jinoyat kodeksi bo‘yicha",
      "O‘z davlati qonunlari bo‘yicha",
      "Javobgarlikka tortilmaydi"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-6",
    "section": "general",
    "number": 6,
    "question": "Qasddan sodir etilgan jinoyat tushunchasi qonunda qanday ta’riflangan?",
    "options": [
      "Jinoyat oqibatlarini oldindan ko‘ra bilib, ularga beparvo qarash",
      "Qilmishning ijtimoiy xavfli ekanligini anglagan holda, uning sodir etilishini istash yoki ongli ravishda yo‘l qo‘yish",
      "Faqatgina salbiy oqibatlarni keltirib chiqarish maqsadida harakat qilish",
      "Ehtiyotsizlik oqibatida sodir etilgan xatti-harakat"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-7",
    "section": "general",
    "number": 7,
    "question": "O‘ziga bino qo‘yish shaklidagi ehtiyotsizlik nimani anglatadi?",
    "options": [
      "Shaxs o‘z qilmishining ijtimoiy xavfli oqibatlari kelib chiqishi mumkinligini anglamaydi",
      "Shaxs o‘z qilmishining ijtimoiy xavfli oqibatlari kelib chiqishi mumkinligini ko‘ra biladi, lekin ularning oldini olishga jiddiy harakat qilmaydi",
      "Shaxs oqibatlar kelib chiqishini oldindan ko‘ra bilsa ham, yetarli asoslarga ega bo‘lmagan holda ularning oldini olishiga yengiltaklarcha umid qiladi",
      "Qilmish to‘liq tasodifiy ravishda sodir etiladi"
    ],
    "correctIndex": 2
  },
  {
    "id": "general-8",
    "section": "general",
    "number": 8,
    "question": "Jinoyat sodir etishda ishtirokchilik deb nimaga aytiladi?",
    "options": [
      "Bir necha shaxsning oldindan til biriktirib yoki til biriktirmasdan jinoyat sodir etishi",
      "Ikki yoki undan ortiq shaxsning qasddan sodir etilgan jinoyatda qasddan birgalikda qatnashishi",
      "Faqat bir guruh shaxslar tomonidan uyushgan holda jinoyat sodir etilishi",
      "Jinoyatni yashirishda yordam berish"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-9",
    "section": "general",
    "number": 9,
    "question": "Jinoyat ishtirokchilarining turlari O‘zbekiston Respublikasi Jinoyat kodeksiga ko‘ra kimlardan iborat?",
    "options": [
      "Faqat ijrochi va tashkilotchi",
      "Ijrochi, tashkilotchi, dastaklavchi (qutquvchi) va ko‘maklashuvchi",
      "Buyurtmachi va ijrochi",
      "Hamroh va guvoh"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-10",
    "section": "general",
    "number": 10,
    "question": "Qaysi shaxs jinoyat ishtirokchiligida ijrochi deb topiladi?",
    "options": [
      "Jinoyatni bevosita o‘zi sodir etgan yoki boshqa shaxslardan foydalangan holda jinoyat sodir etgan shaxs",
      "Jinoyatni rejalashtirgan shaxs",
      "Jinoyat sodir etilishiga ko‘maklashgan shaxs",
      "Jinoyat qurolini yetkazib bergan shaxs"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-11",
    "section": "general",
    "number": 11,
    "question": "O‘ta xavfli retsidivist deb topish masalasi qanday shaxslarga nisbatan qo‘llaniladi?",
    "options": [
      "Birinchi marta yengil jinoyat sodir etganlarga",
      "Ilgari qasddan og‘ir jinoyatlar sodir etib, sudlangan va qonunda nazarda tutilgan boshqa og‘ir talablarga javob berdigan shaxslarga",
      "Faqat voyaga yetmaganlarga",
      "Ehtiyotsizlik orqasida jinoyat sodir etganlarga"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-12",
    "section": "general",
    "number": 12,
    "question": "Yengillashtiruvchi holatlar qatoriga quyidagilardan kaysi biri kiradi?",
    "options": [
      "Jinoyatni retsidiv tarzda sodir etish",
      "Aybdorning tavba qilgani, jinoyatning ochilishiga faol ko‘maklashgani",
      "Jinoyatni mast holda sodir etish",
      "Jinoyat oqibatida og‘ir zarar yetkazilishi"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-13",
    "section": "general",
    "number": 13,
    "question": "Og‘irlashtiruvchi holatlar sifatida nima e’tirof etiladi?",
    "options": [
      "Jinoyatning og‘ir oqibatlarga olib kelishi, jinoyatda retsidiv mavjudligi",
      "Aybdorning shaxsiy muammolari",
      "Jamoatchilikning fikri",
      "Jinoyatning kunduz kuni sodir etilishi"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-14",
    "section": "general",
    "number": 14,
    "question": "O‘zbekiston Respublikasi Jinoyat kodeksida jazoning maqsadi nimadan iborat?",
    "options": [
      "Faqat aybdorni jamiyatdan ajratib qo‘yish va qo‘rqitish",
      "Aybdorni axloqan tuzatish, u yangi jinoyat sodir etishining oldini olish, shuningdek mahkumlarni va boshqa shaxslarni yangi jinoyatlar sodir etishidan ogohlantirish",
      "Faqat yetkazilgan moddiy zararni qoplash",
      "Qiynash va azob berish orqali jazolash"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-15",
    "section": "general",
    "number": 15,
    "question": "Jinoyat kodeksida jazoning qanday turlari asosiy jazo hisoblanadi?",
    "options": [
      "Jarima, axloq tuzatish ishlari, ozodlikni cheklash, ozodlikdan mahrum qilish va h.k.",
      "Faqat jarima va qamoq",
      "Mulkni musodara qilish va maxsus unvondan mahrum qilish",
      "Faqat ozodlikdan mahrum qilish"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-16",
    "section": "general",
    "number": 16,
    "question": "O‘zbekiston Respublikasi Jinoyat kodeksida jazoning qo‘shimcha turlariga nimalar kiradi?",
    "options": [
      "Jarima va ozodlikni cheklash",
      "Muayyan huquqdan mahrum qilish, maxsus, harbiy yoki boshqa unvondan mahrum qilish, mulkni musodara qilish",
      "Axloq tuzatish ishlari va majburiy jamoat ishlari",
      "Qamoq va ozodlikdan mahrum qilish"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-17",
    "section": "general",
    "number": 17,
    "question": "Voyaga yetmaganlarga nisbatan qanday jazo choralari qo‘llanilishi mumkin emas?",
    "options": [
      "Jarima",
      "Mulkni musodara qilish va umrbod ozodlikdan mahrum qilish",
      "Axloq tuzatish ishlari",
      "Ozodlikni cheklash"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-18",
    "section": "general",
    "number": 18,
    "question": "Javobgarlikka tortish muddati o‘tib ketganligi munosabati bilan shaxsni javobgarlikdan ozod qilish qanday tartibda amalga oshiriladi?",
    "options": [
      "Agar sodir etilgan jinoyatning og‘irligiga qarab qonunda belgilangan muddatlar (masalan, uncha og‘ir bo‘lmagan jinoyat uchun 2 yil) o‘tib ketgan bo‘lsa va shaxs yashirinmagan bo‘lsa",
      "Faqat jabrlanuvchining xohishi bilan",
      "Prezident farmoni bilangina",
      "Muddat o‘tishining ahamiyati yo‘q"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-19",
    "section": "general",
    "number": 19,
    "question": "Afv etish instituti O‘zbekiston Respublikasida kim tomonidan amalga oshiriladi?",
    "options": [
      "Oliy Majlis Senati",
      "Bosh prokuror",
      "O‘zbekiston Respublikasi Prezidenti",
      "Oliy sud raisi"
    ],
    "correctIndex": 2
  },
  {
    "id": "general-20",
    "section": "general",
    "number": 20,
    "question": "Amnistiya akti kim tomonidan qabul qilinadi?",
    "options": [
      "O‘zbekiston Respublikasi Prezidenti",
      "O‘zbekiston Respublikasi Oliy Majlisi Senati",
      "Vazirlar Mahkamasi",
      "Oliy sud Plenumi"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-21",
    "section": "general",
    "number": 21,
    "question": "Qasddan sodir etilgan uncha og‘ir bo‘lmagan jinoyat uchun jazoni o‘tashdan ozod qilish muddati qancha?",
    "options": [
      "2 yil",
      "3 yil",
      "5 yil",
      "10 yil"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-22",
    "section": "general",
    "number": 22,
    "question": "O‘ta og‘ir jinoyat sodir etilganda javobgarlikka tortish muddati necha yilni tashkil qiladi?",
    "options": [
      "10 yil",
      "15 yil",
      "20 yil",
      "Muddat belgilanmagan"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-23",
    "section": "general",
    "number": 23,
    "question": "O‘z fikrini yoki harakatini anglay olmagan yoki boshqara olmagan shaxsning aqli norasolik holati qanday hisoblanadi?",
    "options": [
      "Ruhiy kasallik yoki aqli zaiflik tufayli sodir etilgan qilmish uchun javobgarlikka tortilmaydi",
      "Baribir javobgarlikka tortiladi",
      "Yengillashtiruvchi holat deb topiladi",
      "Faqat jarima to‘laydi"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-24",
    "section": "general",
    "number": 24,
    "question": "Zaruriy mudofaa chegarasidan chetga chiqish (ekssess) nima deb ataladi?",
    "options": [
      "Himoyalanish choralarining qasddan hujum qilish xususiyatiga va darajasiga yaqqol nomuvofiq kelishi",
      "Hujum qilgan shaxsga nisbatan biror bir qarshilik ko‘rsatmaslik",
      "Hujum to‘xtagandan keyin ham javob qaytarish",
      "Faqat mol-mulkka zarar yetkazish"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-25",
    "section": "general",
    "number": 25,
    "question": "Oxirgi zarurat holatida yetkazilgan zararning xususiyati qanday bo‘ladi?",
    "options": [
      "Oldi olinayotgan zarardan kamroq yoki teng bo‘lishi shart",
      "Istalgancha katta bo‘lishi mumkin",
      "Faqat mulkiy zarar bo‘lishi kerak",
      "Zarar yetkazish mumkin emas"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-26",
    "section": "general",
    "number": 26,
    "question": "Jinoyat sodir etgandan keyin yuzaga kelgan og‘ir kasallik shaxsni jazodan ozod qilishga asos bo‘la oladimi?",
    "options": [
      "Hech qachon asos bo‘lmaydi",
      "Agar shaxs jazoni o‘tab bo‘lmaydigan darajada og‘ir kasallikka chalinsa, sud uni jazoni o‘tashdan ozod qilishi mumkin",
      "Faqat jarima to‘lashdan ozod qilinadi",
      "Faqat uy qamog‘iga o‘tkaziladi"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-27",
    "section": "general",
    "number": 27,
    "question": "Shaxsni jinoiy javobgarlikka tortish muddati o‘tib ketganligi munosabati bilan uni javobgarlikdan ozod qilishga qanday hollarda yo‘l qo‘yilmaydi?",
    "options": [
      "Agar shaxs tergovdan yoki suddan yashiringan bo‘lsa va muddatning o‘tishi to‘xtatib turilgan bo‘lsa",
      "Jabrlanuvchi rozi bo‘lsa ham yo‘l qo‘yiladi",
      "Faqat og‘ir jinoyatlarda muddat hisoblanmaydi",
      "Hech qanday istisno yo‘q"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-28",
    "section": "general",
    "number": 28,
    "question": "Sudlanganlik holatining tugatilishi yoki olib tashlanishi qanday huquqiy oqibatga olib keladi?",
    "options": [
      "Shaxsning ilgari sudlanganligi bilan bog‘liq barcha huquqiy oqibatlarni bekor qiladi",
      "Jinoyat tarixini butunlay o‘chirib tashlaydi",
      "Hech qanday o‘zgarish kiritmaydi",
      "Faqat jarimani qaytarib beradi"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-29",
    "section": "general",
    "number": 29,
    "question": "Qasddan kichik uncha og‘ir bo‘lmagan jinoyat sodir etgan shaxs uchun sudlanganlik muddati qanchani tashkil etadi?",
    "options": [
      "1 yil",
      "O‘talganidan keyin 1 yil",
      "Hukm qonuniy kuchga kirgandan keyin 3 yil",
      "6 oy"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-30",
    "section": "general",
    "number": 30,
    "question": "O‘zbekiston Respublikasi Jinoyat kodeksiga ko‘ra, tayinlangan jazoni o‘tab bo‘lgandan keyin yangi qasddan jinoyat sodir etish qanday ataladi?",
    "options": [
      "Retsidiv jinoyat",
      "Ko‘p marotaba sodir etilgan jinoyat",
      "Uyushgan jinoyat",
      "Tasodifiy jinoyat"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-31",
    "section": "general",
    "number": 31,
    "question": "Jinoyatni sodir etish usuliga ko‘ra, qilmish qanday turlarga bo‘linadi?",
    "options": [
      "Faqat faol harakat yoki harakatsizlik orqali",
      "Faqat yozma ravishda",
      "Og‘zaki kelishuv asosida",
      "Faqat moliyaviy zarar yetkazish orqali"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-32",
    "section": "general",
    "number": 32,
    "question": "O‘z xizmat mavqeini suiiste’mol qilib jinoyat sodir etish Jinoyat kodeksida qanday baholanadi?",
    "options": [
      "Johillik deb",
      "Javobgarlikni og‘irlashtiruvchi holat sifatida",
      "Yengillashtiruvchi holat sifatida",
      "Hech qanday ahamiyatga ega emas"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-33",
    "section": "general",
    "number": 33,
    "question": "Jinoyat sodir etishga qasddan dastaklavlik (qutquv) qilgan shaxs kim hisoblanadi?",
    "options": [
      "Boshqa shaxsni jinoyat sodir etishga ko‘ndirgan shaxs",
      "Jinoyatni yashirgan shaxs",
      "Qurol sotgan shaxs",
      "Jabrlanuvchiga yordam bergan shaxs"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-34",
    "section": "general",
    "number": 34,
    "question": "Voyaga yetmaganlarga nisbatan tayinlanadigan ozodlikdan mahrum qilish jazosining eng kam muddati qancha?",
    "options": [
      "3 oydan",
      "6 oydan",
      "1 yildan",
      "3 yildan"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-35",
    "section": "general",
    "number": 35,
    "question": "Bir guruh shaxslar tomonidan oldindan til biriktirib jinoyat sodir etilishi qanday malakalanadi?",
    "options": [
      "Oddiy jinoyat",
      "Ishtirokchilikda, guruh tomonidan sodir etilgan jinoyat",
      "Tasodifiy holat",
      "Fuqarolik huquqibuzarligi"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-36",
    "section": "general",
    "number": 36,
    "question": "Jinoyat sodir etgandan keyin o‘z aybiga iqror bo‘lib kelish qanday ahamiyatga ega?",
    "options": [
      "Javobgarlikdan to‘liq ozod qiladi",
      "Javobgarlikni yengillashtiruvchi holat deb topiladi",
      "Hech qanday ahamiyatga ega emas",
      "Faqat jarimani kamaytiradi"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-37",
    "section": "general",
    "number": 37,
    "question": "Jinoyat sodir etish g‘oyasini paydo qilgan va uni amalga oshirishga rahbarlik qilgan shaxs kim deb topiladi?",
    "options": [
      "Ijrochi",
      "Tashkilotchi",
      "Ko‘maklashuvchi",
      "Guvoh"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-38",
    "section": "general",
    "number": 38,
    "question": "Jinoyat sodir etilishiga maslahatlar, ko‘rsatmalar berish, vositalar bilan ta’minlash orqali yordam bergan shaxs kim hisoblanadi?",
    "options": [
      "Ko‘maklashuvchi (posobnik)",
      "Ijrochi",
      "Tashkilotchi",
      "Jabrlanuvchi"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-39",
    "section": "general",
    "number": 39,
    "question": "O‘zbekiston Respublikasi hududidan tashqarida jinoyat sodir etgan O‘zbekiston Respublikasi fuqarosi qanday javobgarlikka tortiladi?",
    "options": [
      "Agar uning qilmishi jinoyat deb topilsa va u boshqa davlatda sudlanmagan bo‘lsa, O‘zbekiston Respublikasi Jinoyat kodeksi bo‘yicha javobgarlikka tortiladi",
      "Hech qachon javobgarlikka tortilmaydi",
      "Faqat diplomatik yo‘l bilan jarima to‘laydi",
      "Faqat chet el sudi jazolaydi"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-40",
    "section": "general",
    "number": 40,
    "question": "Chet el fuqarosi O‘zbekiston hududidan tashqarida chet davlat fuqarosiga qarshi jinoyat sodir etsa, O‘zbekiston kodeksi qo‘llaniladimi?",
    "options": [
      "Ha, doim qo‘llaniladi",
      "Yo‘q, xalqaro shartnomalarda nazarda tutilgan hollarda yoki O‘zbekiston Respublikasining manfaatlariga qarshi qaratilgan bo‘lsa qo‘llanilishi mumkin",
      "Faqat BRS ko‘rsatmasi bilan",
      "Qat’iyan qo‘llanilmaydi"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-41",
    "section": "general",
    "number": 41,
    "question": "Yengilroq jazo tayinlash instituti Jinoyat kodeksining qaysi moddasida ko‘zda tutilgan?",
    "options": [
      "57-modda",
      "70-modda",
      "45-modda",
      "90-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-42",
    "section": "general",
    "number": 42,
    "question": "Shaxsning qilmishida jinoyat alomatlari bo‘lmasa, lekin ma’muriy huquqbuzarlik mavjud bo‘lsa, unga nima qo‘llaniladi?",
    "options": [
      "Jinoiy jazo",
      "Ma’muriy javobgarlik",
      "Hech qanday chora ko‘rilmaydi",
      "Intizomiy jazo"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-43",
    "section": "general",
    "number": 43,
    "question": "Jazoni o‘tab bo‘lgandan keyin sudlanganlik holati muddati o‘tmasdan turib, jamoat birlashmasining iltimosnomasi bilan sudlanganlikni olib tashlash mumkinmi?",
    "options": [
      "Ha, agar shaxs o‘zini tutishi bilan jinoyat sodir etmaganini ko‘rsatsa, sud qisqartirishi yoki olib tashlashi mumkin",
      "Qat’iyan mumkin emas",
      "Faqat Prezident farmoni bilan",
      "Faqat prokuror roziligi bilan"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-44",
    "section": "general",
    "number": 44,
    "question": "O‘lim jazosi O‘zbekiston Respublikasida hozirgi kunda amaldami?",
    "options": [
      "Ha, barcha og‘ir jinoyatlar uchun saqlanib qolgan",
      "O‘zbekiston Respublikasida o‘lim jazosi bekor qilingan va u qo‘llanilmaydi",
      "Faqat harbiy holat paytida qo‘llaniladi",
      "Faqat terrorizm uchun beriladi"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-45",
    "section": "general",
    "number": 45,
    "question": "Qasddan sodir etilgan og‘ir jinoyat uchun sudlanganlik muddati qancha?",
    "options": [
      "3 yil",
      "O‘talganidan keyin 3 yil",
      "5 yil",
      "10 yil"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-46",
    "section": "general",
    "number": 46,
    "question": "O‘zbekiston Respublikasi Jinoyat kodeksining amal qilish doirasiga ko‘ra vaqt bo‘yicha orqaga qaytish kuchi deganda nima tushuniladi?",
    "options": [
      "Yangi qonun sodir etilgan jinoyat uchun javobgarlikni yengillashtirsa yoki jinoyat emas deb topsa, orqaga qaytish kuchiga ega bo‘ladi",
      "Yangi qonun doim har qanday holatda orqaga qaytadi",
      "Yangi qonun jazoni og‘irlashtirsa ham qo‘llaniladi",
      "Qonunlarning orqaga qaytish kuchi yo‘q"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-47",
    "section": "general",
    "number": 47,
    "question": "Jinoiy javobgarlikka tortish muddati o‘tib ketganligi munosabati bilan ish qaysi organ tomonidan tugatiladi?",
    "options": [
      "Faqat tergovchi tomonidan",
      "Sud yoki tergov organi tomonidan (qonunda belgilangan tartibda)",
      "Faqat advokat iltimosi bilan",
      "Hokimlik qarori bilan"
    ],
    "correctIndex": 1
  },
  {
    "id": "general-48",
    "section": "general",
    "number": 48,
    "question": "Aybdor tomonidan jinoyat natijasida yetkazilgan zararning ixtiyoriy ravishda qoplanishi qanday ahamiyat kasb etadi?",
    "options": [
      "Javobgarlikni yengillashtiruvchi holat hisoblanadi",
      "Jinoyatni umuman yo‘qqa chiqaradi",
      "Faqat soliqdan ozod qiladi",
      "Hech qanday ta’siri yo‘q"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-49",
    "section": "general",
    "number": 49,
    "question": "Ijtimoiy xavfi katta bo‘lmagan jinoyatlar qatoriga qanday qilmishlar kiradi?",
    "options": [
      "Qasddan sodir etilib, qonunda ozodlikdan mahrum qilish tarzidagi uch yildan ortiq bo‘lmagan jazo nazarda tutilgan jinoyatlar",
      "Har qanday o‘g‘irlik",
      "Faqat ma’muriy huquqbuzarliklar",
      "Odam o‘ldirish"
    ],
    "correctIndex": 0
  },
  {
    "id": "general-50",
    "section": "general",
    "number": 50,
    "question": "Birinchi 50 talik blok yakuni bo‘yicha: Jinoyat kodeksiga ko‘ra jazoning maqsadlariga erishilgandan keyin shaxs qanday maqomga ega bo‘ladi?",
    "options": [
      "Jazoni o‘tab bo‘lgan va sudlanganligi tugatilgan/olib tashlangnidan keyin to‘liq huquqli fuqaro maqomini oladi",
      "Umrbod cheklovda qoladi",
      "Huquqlari cheklangan holda yashaydi",
      "Mamlakatdan chiqarib yuboriladi"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-1",
    "section": "special",
    "number": 1,
    "question": "O‘zbekiston Respublikasi Jinoyat kodeksining 97-moddasi qaysi jinoyat uchun javobgarlikni belgilaydi?",
    "options": [
      "Badanga qasddan og‘ir shikast yetkazish",
      "Qasddan odam o‘ldirish",
      "Odam o‘g‘irlash",
      "Nomusga tegish"
    ],
    "correctIndex": 1
  },
  {
    "id": "special-2",
    "section": "special",
    "number": 2,
    "question": "O‘zini o‘zi o‘ldirish darajasiga yetkazish Jinoyat kodeksining qaysi moddasida ko‘zda tutilgan?",
    "options": [
      "98-modda",
      "103-modda",
      "104-modda",
      "110-modda"
    ],
    "correctIndex": 1
  },
  {
    "id": "special-3",
    "section": "special",
    "number": 3,
    "question": "Qasddan badanga o‘rtacha og‘ir shikast yetkazish Jinoyat kodeksining nechanchi moddasi bilan kvalifikatsiya qilinadi?",
    "options": [
      "104-modda",
      "105-modda",
      "109-modda",
      "111-modda"
    ],
    "correctIndex": 1
  },
  {
    "id": "special-4",
    "section": "special",
    "number": 4,
    "question": "O‘g‘irlik (o‘zganing mulkini yashirin ravishda talon-toroj qilish) Jinoyat kodeksining qaysi moddasida belgilangan?",
    "options": [
      "164-modda",
      "167-modda",
      "169-modda",
      "168-modda"
    ],
    "correctIndex": 2
  },
  {
    "id": "special-5",
    "section": "special",
    "number": 5,
    "question": "Firibgarlik (aldash yoki ishonchni suiiste’mol qilish yo‘li bilan o‘zganing mulkini qo‘lga kiritish) qaysi moddada ko‘rsatilgan?",
    "options": [
      "167-modda",
      "168-modda",
      "169-modda",
      "170-modda"
    ],
    "correctIndex": 1
  },
  {
    "id": "special-6",
    "section": "special",
    "number": 6,
    "question": "Bosqinchilik (o‘zganing mulkini egallash maqsadida hujum qilish) Jinoyat kodeksining nechanchi moddasi bilan jazolanadi?",
    "options": [
      "164-modda",
      "165-modda",
      "166-modda",
      "169-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-7",
    "section": "special",
    "number": 7,
    "question": "Tovlamachilik jinoyati Jinoyat kodeksining qaysi moddasida nazarda tutilgan?",
    "options": [
      "164-modda",
      "165-modda",
      "166-modda",
      "168-modda"
    ],
    "correctIndex": 1
  },
  {
    "id": "special-8",
    "section": "special",
    "number": 8,
    "question": "Talonchilik (o‘zganing mulkini ochiqdan-ochiq talon-toroj qilish) qaysi modda bilan tartibga solinadi?",
    "options": [
      "164-modda",
      "165-modda",
      "166-modda",
      "169-modda"
    ],
    "correctIndex": 2
  },
  {
    "id": "special-9",
    "section": "special",
    "number": 9,
    "question": "Pora olish jinoyati Jinoyat kodeksining qaysi moddasi bilan kvalifikatsiya qilinadi?",
    "options": [
      "210-modda",
      "211-modda",
      "212-modda",
      "213-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-10",
    "section": "special",
    "number": 10,
    "question": "Pora berish jinoyati Jinoyat kodeksining nechanchi moddasida ko‘zda tutilgan?",
    "options": [
      "210-modda",
      "211-modda",
      "212-modda",
      "214-modda"
    ],
    "correctIndex": 1
  },
  {
    "id": "special-11",
    "section": "special",
    "number": 11,
    "question": "Pora olish-berishda vositachilik qilish Jinoyat kodeksining qaysi moddasida ko‘zda tutilgan?",
    "options": [
      "210-modda",
      "211-modda",
      "212-modda",
      "213-modda"
    ],
    "correctIndex": 2
  },
  {
    "id": "special-12",
    "section": "special",
    "number": 12,
    "question": "Bekorga barobar solik yoki boshqa majburiy to‘lovlardan bo‘yin tovlash jinoyati qaysi modda bilan tartibga solinadi?",
    "options": [
      "184-modda",
      "175-modda",
      "190-modda",
      "181-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-13",
    "section": "special",
    "number": 13,
    "question": "Hokimiyat yoki mansab vakolatini suiiste’mol qilish Jinoyat kodeksining nechanchi moddasiga kiradi?",
    "options": [
      "205-modda",
      "206-modda",
      "209-modda",
      "210-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-14",
    "section": "special",
    "number": 14,
    "question": "Mansab soxtakorligi jinoyati qaysi moddada belgilangan?",
    "options": [
      "205-modda",
      "206-modda",
      "209-modda",
      "211-modda"
    ],
    "correctIndex": 2
  },
  {
    "id": "special-15",
    "section": "special",
    "number": 15,
    "question": "Bezovtalik yoki bezorilik jinoyati Jinoyat kodeksining qaysi moddasida nazarda tutilgan?",
    "options": [
      "277-modda",
      "278-modda",
      "267-modda",
      "276-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-16",
    "section": "special",
    "number": 16,
    "question": "Giyohvandlik vositalari yoki psixotrop moddalarni o‘tkazish maqsadisiz qonunga xilof ravishda saqlash qaysi modda bilan kvalifikatsiya qilinadi?",
    "options": [
      "270-modda",
      "271-modda",
      "276-modda",
      "273-modda"
    ],
    "correctIndex": 2
  },
  {
    "id": "special-17",
    "section": "special",
    "number": 17,
    "question": "Giyohvandlik vositalarini o‘tkazish maqsadida qonunga xilof ravishda tayyorlash, olish, saqlash va boshqa harakatlar qaysi moddada ko‘zda tutilgan?",
    "options": [
      "270-modda",
      "273-modda",
      "276-modda",
      "277-modda"
    ],
    "correctIndex": 1
  },
  {
    "id": "special-18",
    "section": "special",
    "number": 18,
    "question": "Banditizm (uyushgan qurolli guruhlar tuzish) jinoyati Jinoyat kodeksining nechanchi moddasida belgilangan?",
    "options": [
      "242-modda",
      "243-modda",
      "244-modda",
      "245-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-19",
    "section": "special",
    "number": 19,
    "question": "Terrorizm jinoyati Jinoyat kodeksining qaysi moddasi bilan jazolanadi?",
    "options": [
      "155-modda",
      "156-modda",
      "158-modda",
      "160-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-20",
    "section": "special",
    "number": 20,
    "question": "Nomusga tegish jinoyati Jinoyat kodeksining nechanchi moddasida ko‘rsatilgan?",
    "options": [
      "118-modda",
      "119-modda",
      "120-modda",
      "121-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-21",
    "section": "special",
    "number": 21,
    "question": "Jinoyat kodeksining 119-moddasi qanday jinoyat uchun javobgarlikni belgilaydi?",
    "options": [
      "Nomusga tegish",
      "Jinsiy ehtiyojni zo‘rlik ishlatib g‘ayritabiiy usulda qondirish",
      "Qo‘shmachilik qilish",
      "Voyaga yetmagan shaxsga nisbatan g‘ayriqonuniy harakatlar"
    ],
    "correctIndex": 1
  },
  {
    "id": "special-22",
    "section": "special",
    "number": 22,
    "question": "Tuhmat qilish (bilib turib yolg‘on, sha’ni va qadr-qimmatini tahqirlaydigan uydirmalarni tarqatish) qaysi moddada ko‘zda tutilgan?",
    "options": [
      "139-modda",
      "140-modda",
      "141-modda",
      "138-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-23",
    "section": "special",
    "number": 23,
    "question": "Haqorat qilish jinoyati Jinoyat kodeksining nechanchi moddasi bilan tartibga solinadi?",
    "options": [
      "139-modda",
      "140-modda",
      "141-modda",
      "137-modda"
    ],
    "correctIndex": 1
  },
  {
    "id": "special-24",
    "section": "special",
    "number": 24,
    "question": "O‘zganing mulkini qasddan nobud qilish yoki unga zarar yetkazish qaysi moddada ko‘rsatilgan?",
    "options": [
      "173-modda",
      "172-modda",
      "171-modda",
      "174-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-25",
    "section": "special",
    "number": 25,
    "question": "Transport vositalarini olib qochish jinoyati Jinoyat kodeksining qaysi moddasida nazarda tutilgan?",
    "options": [
      "266-modda",
      "267-modda",
      "268-modda",
      "269-modda"
    ],
    "correctIndex": 1
  },
  {
    "id": "special-26",
    "section": "special",
    "number": 26,
    "question": "Transport xavfsizligi qoidalarini buzish yoki ulardan foydalanish odam o‘lishiga sabab bo‘lsa, qaysi modda bilan kvalifikatsiya qilinadi?",
    "options": [
      "266-modda 3-qismi",
      "267-modda",
      "277-modda",
      "265-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-27",
    "section": "special",
    "number": 27,
    "question": "Soxta pul, aksiz markalari yoki qimmatbaho qog‘ozlar yasash yoki ularni o‘tkazish qaysi moddaga kiradi?",
    "options": [
      "176-modda",
      "177-modda",
      "178-modda",
      "179-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-28",
    "section": "special",
    "number": 28,
    "question": "Valyuta qimmatliklarini qonunga xilof ravishda olish yoki o‘tkazish Jinoyat kodeksining nechanchi moddasida ko‘zda tutilgan edi (keyingi o‘zgarishlarni hisobga olgan holda)?",
    "options": [
      "177-modda",
      "178-modda",
      "180-modda",
      "182-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-29",
    "section": "special",
    "number": 29,
    "question": "Harbiy xizmatni o‘tashdan bo‘yin tovlash Jinoyat kodeksining qaysi bobida joylashgan?",
    "options": [
      "Maxsus qismning harbiy jinoyatlarga oid bobida",
      "Umumiy qismda",
      "Mulkka qarshi jinoyatlar bobida",
      "Tinchlikka qarshi jinoyatlar bobida"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-30",
    "section": "special",
    "number": 30,
    "question": "Jinoyat to‘g‘risida xabar bermaslik jinoyati Jinoyat kodeksining qaysi moddasida nazarda tutilgan?",
    "options": [
      "241-modda",
      "238-modda",
      "239-modda",
      "240-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-31",
    "section": "special",
    "number": 31,
    "question": "Jinoyatni yashirish Jinoyat kodeksining qaysi moddasida ko‘zda tutilgan?",
    "options": [
      "240-modda",
      "241-modda",
      "242-modda",
      "238-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-32",
    "section": "special",
    "number": 32,
    "question": "Yolg‘on guvohlik berish jinoyati Jinoyat kodeksining nechanchi moddasida belgilangan?",
    "options": [
      "238-modda",
      "239-modda",
      "240-modda",
      "241-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-33",
    "section": "special",
    "number": 33,
    "question": "Sud hukmini bajarmaslik jinoyati qaysi modda bilan tartibga solinadi?",
    "options": [
      "232-modda",
      "267-modda",
      "219-modda",
      "235-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-34",
    "section": "special",
    "number": 34,
    "question": "Hokimiyat vakiliga qarshi qarshilik ko‘rsatish jinoyati Jinoyat kodeksining qaysi moddasida nazarda tutilgan?",
    "options": [
      "219-modda",
      "220-modda",
      "221-modda",
      "218-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-35",
    "section": "special",
    "number": 35,
    "question": "Ma’muriy nadzor qoidalarini qasddan buzish qaysi moddaga kiradi?",
    "options": [
      "226-modda",
      "227-modda",
      "228-modda",
      "229-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-36",
    "section": "special",
    "number": 36,
    "question": "Hujjatlar, shtamplar, muhrlar, blankalar yasash, ularni soqa qilish, sotish yoki ulardan foydalanish qaysi moddada ko‘zda tutilgan?",
    "options": [
      "228-modda",
      "227-modda",
      "229-modda",
      "230-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-37",
    "section": "special",
    "number": 37,
    "question": "O‘zboshimchalik (qonunga xilof ravishda o‘z huquqlarini haqiqiy yoki taxmin qilingan tarzda amalga oshirish) qaysi moddada belgilangan?",
    "options": [
      "229-modda",
      "230-modda",
      "231-modda",
      "225-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-38",
    "section": "special",
    "number": 38,
    "question": "Qasddan odam o‘ldirish jinoyati og‘irlashtiruvchi holatlarda (masalan, bir necha kishini o‘ldirganda) Jinoyat kodeksining qaysi moddasi bilan kvalifikatsiya qilinadi?",
    "options": [
      "97-modda 2-qismi",
      "98-modda",
      "99-modda",
      "100-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-39",
    "section": "special",
    "number": 39,
    "question": "Homilador ayolga qasddan badanga og‘ir shikast yetkazish oqibatida homilaning nobud bo‘lishi qaysi modda bilan jazolanadi?",
    "options": [
      "104-modda tegishli qismi bilan",
      "97-modda",
      "105-modda",
      "110-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-40",
    "section": "special",
    "number": 40,
    "question": "Qynoqqa solish va boshqa shafqatsiz, g‘ayriinsoniy yoki qadr-qimmatni kamsituvchi muomala hamda jazo turlarini qo‘llash qaysi moddada ko‘zda tutilgan?",
    "options": [
      "235-modda",
      "236-modda",
      "237-modda",
      "234-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-41",
    "section": "special",
    "number": 41,
    "question": "Jinoyat sodir etmagan shaxsni jinoiy javobgarlikka qasddan tortish qaysi moddada belgilangan?",
    "options": [
      "236-modda",
      "237-modda",
      "238-modda",
      "235-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-42",
    "section": "special",
    "number": 42,
    "question": "Uyushgan guruh tashkil etish yoki unda ishtirok etish Jinoyat kodeksining nechanchi moddasida ko‘zda tutilgan?",
    "options": [
      "242-modda (yoki unga monand uyushgan guruhga oid maxsus normalar)",
      "250-modda",
      "245-modda",
      "248-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-43",
    "section": "special",
    "number": 43,
    "question": "Qurol, o‘q-dorilar, portlovchi moddalar yoki portlash qurilmalarini qonunga xilof ravishda saqlash qaysi moddada nazarda tutilgan?",
    "options": [
      "248-modda",
      "249-modda",
      "247-modda",
      "250-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-44",
    "section": "special",
    "number": 44,
    "question": "Giyohvandlik vositalarini iste’mol qilishga jalb etish jinoyati qaysi modda bilan tartibga solinadi?",
    "options": [
      "274-modda",
      "273-modda",
      "275-modda",
      "276-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-45",
    "section": "special",
    "number": 45,
    "question": "Qo‘shmachilik qilish yoki fohijaxona saqlash Jinoyat kodeksining qaysi moddasiga kiradi?",
    "options": [
      "131-modda",
      "132-modda",
      "133-modda",
      "130-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-46",
    "section": "special",
    "number": 46,
    "question": "Voyaga yetmagan shaxsni g‘ayriijtimoiy xatti-harakatlarga jalb qilish qaysi moddada ko‘zda tutilgan?",
    "options": [
      "127-modda",
      "128-modda",
      "129-modda",
      "126-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-47",
    "section": "special",
    "number": 47,
    "question": "O‘n sakkiz yoshga to‘lmagan shaxs bilan jinsiy aloqa qilish yoki unga nisbatan zo‘rlik ishlatmagan holda g‘ayriqonuniy harakatlar sodir etish qaysi moddada ko‘rsatilgan?",
    "options": [
      "128-modda",
      "127-modda",
      "129-modda",
      "130-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-48",
    "section": "special",
    "number": 48,
    "question": "Farzandlikka olish yoki go‘daklarni almashtirib qo‘yish sirlarini oshkor qilish qaysi modda bilan tartibga solinadi?",
    "options": [
      "125-modda",
      "124-modda",
      "123-modda",
      "122-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-49",
    "section": "special",
    "number": 49,
    "question": "Aliment to‘lashdan bo‘yin tovlash Jinoyat kodeksining nechanchi moddasida nazarda tutilgan?",
    "options": [
      "122-modda",
      "123-modda",
      "124-modda",
      "121-modda"
    ],
    "correctIndex": 0
  },
  {
    "id": "special-50",
    "section": "special",
    "number": 50,
    "question": "Maxsus qism bo‘yicha dastlabki 50 talik blokning so‘nggi savoli: Shaxsni og‘ir yoki o‘ta og‘ir jinoyat sodir etganlikda ayblab tuhmat qilish (og‘irlashtiruvchi holatlarda) qaysi moddada ko‘zda tutilgan?",
    "options": [
      "139-modda 3-qismi",
      "140-modda",
      "138-modda",
      "141-modda"
    ],
    "correctIndex": 0
  }
];
export const legalCases: LegalCase[] = [
  {
    "id": "case-1",
    "number": 1,
    "title": "Qasdning turlari va xato (faktik xato)",
    "situation": "Fuqaro A. o‘zining azaliy dushmani B.ni o‘ldirish maqsadida kechqurun uning hovlisiga yashirincha kiradi. Deraza ortida B.ning karavotida adyolga o‘ranib yotgan odam gavdasini ko‘rib, uni B. deb o‘ylaydi va ov miltig‘idan o‘q uzadi. Natijada o‘sha kuni B.nikiga mehmonga kelib, uning o‘rnida uxlab yotgan qarindoshi V. vafot etadi.",
    "prompt": "A.ning qilmishini kvalifikatsiya qiling. Shaxsga nisbatan yanglishish (faktik xato) jinoyat kvalifikatsiyasiga qanday ta’sir qiladi?",
    "qualification": "A.ning qilmishi O‘zbekiston Respublikasi JKning 97-moddasi 1-qismi (Qasddan odam o‘ldirish) bilan kvalifikatsiya qilinadi.",
    "reasoning": "Jinoyat huquqida jabrlanuvchining shaxsi bo‘yicha yo‘l qo‘yilgan faktik xato (ya’ni B.ning o‘rniga adashib V.ni o‘ldirish) qasdning mazmuniga va qilmishning ijtimoiy xavflilik darajasiga ta’sir qilmaydi, chunki har ikkala shaxs ham teng huquqiy muhofaza obyektidir (inson hayoti). A.ning to‘g‘ri qasdi odam o‘ldirishga qaratilgan va bu maqsad amalga oshgan."
  },
  {
    "id": "case-2",
    "number": 2,
    "title": "Zaruriy mudofaa chegarasidan chetga chiqish (ekssess) va vaqt omili",
    "situation": "Kechasi S.ning uyiga qurollanmagan o‘g‘ri D. derazadan kiradi. S. shovqinni eshitib chiqadi va D.ni ko‘rib qoladi. D. qo‘rqib ketib, hech narsa olmasdan derazadan ko‘chaga sakrab qochishga tushadi. S. hovlida turgan temir trubani olib, ko‘cha bo‘ylab qochib ketayotgan D.ning orqasidan quvib yetadi va boshiga kuchli zarba beradi. Oqibatda D. og‘ir tan jarohati olib, voqea joyida vafot etadi.",
    "prompt": "S.ning harakatlarini zaruriy mudofaa deb baholash mumkinmi? Qilmishni kvalifikatsiya qiling.",
    "qualification": "S.ning harakatlari zaruriy mudofaa holati hisoblanmaydi va JKning 97-moddasi 1-qismi (Qasddan odam o‘ldirish) yoki agar qasd og‘ir shikast yetkazishga qaratilgan bo‘lib, o‘lim ehtiyotsizlikdan kelib chiqqan bo‘lsa, 104-moddasi 3-qismi «d» bandi bilan kvalifikatsiya qilinadi.",
    "reasoning": "JKning 37-moddasiga ko‘ra, zaruriy mudofaa faqat mavjud va real tajovuzni qaytarish vaqtida amalga oshiriladi. Tajovuz tugaganidan keyin (D. hech narsa olmasdan qochib ketayotgan paytda) qilingan harakatlar «kechikkan mudofaa» hisoblanadi va umumiy asoslarda jinoiy javobgarlikka sabab bo‘ladi."
  },
  {
    "id": "case-3",
    "number": 3,
    "title": "Ishtirokchilik va ijrochining ekssessi",
    "situation": "Uch nafar shaxs — K., L. va M. tunda do‘konni o‘marish (o‘g‘irlik) haqida oldindan til biriktiradilar. Rejaga ko‘ra, K. tashqarida poyloqchilik qiladi, L. va M. esa ichkariga kirib mollarni olib chiqishi kerak edi. Ichkariga kirganlarida do‘kon qorovuli uyg‘onib ketadi. L. kutilmaganda yonidagi pichoqni chiqarib, qorovulning ko‘kragiga urib o‘ldiradi. M. bundan dahshatga tushib, hech narsa olmasdan qochib chiqadi va K.ga bo‘lgan voqeani aytadi.",
    "prompt": "K., L. va M.ning harakatlarini alohida-alohida kvalifikatsiya qiling.",
    "qualification": "L.ning harakati: JK 25, 169-moddasi 2-qismi «v» bandi (bir guruh shaxslar tomonidan oldindan til biriktirib o‘g‘irlik qilishga suiqasd) hamda JK 97-moddasi 2-qismi «i» bandi (tamagirlik niyatida yoki boshqa jinoyatni yashirish maqsadida qasddan odam o‘ldirish). K. va M.ning harakati: JK 25, 169-moddasi 2-qismi «v» bandi (o‘g‘irlikka suiqasd).",
    "reasoning": "JKning 31-moddasiga asosan, ishtirokchilarning umumiy qasdi doirasidan chetga chiqib, boshqa jinoyat (odam o‘ldirish) sodir etgan ijrochi (L.)ning harakati ijrochining ekssessi hisoblanadi. Boshqa ishtirokchilar (K. va M.) faqat o‘z qasdlari qamrab olgan o‘g‘irlikka suiqasd uchungina javobgar bo‘ladilar."
  },
  {
    "id": "case-4",
    "number": 4,
    "title": "Jinoyatdan ixtiyoriy qaytish va tugallanmagan jinoyat",
    "situation": "Fuqaro R. hamkasbi T.ni zaharlab o‘ldirish maqsadida uning choyiga kuchli ta’sir qiluvchi zahar soladi. T. choyni ichib bo‘lgach, ahvoli yomonlasha boshlaydi. R. qilgan ishidan qattiq pushaymon bo‘lib, zudlik bilan tez yordam chaqiradi va shifokorlarga qanday zahar berganini aytadi. Shifokorlarning tezkor muolajasi tufayli T.ning hayoti saqlab qolinadi, biroq uning sog‘lig‘iga o‘rtacha og‘ir shikast yetadi.",
    "prompt": "R.ning harakatida jinoyatdan ixtiyoriy qaytish mavjudmi? U jinoiy javobgarlikka tortiladimi?",
    "qualification": "R.ning harakatida odam o‘ldirish jinoyatidan ixtiyoriy qaytish mavjud emas; u JK 25, 97-moddasi 1-qismi (qasddan odam o‘ldirishga suiqasd) bilan javobgarlikka tortiladi, biroq uning harakati jazoni yengillashtiruvchi holat (JK 55-modda) sifatida inobatga olinadi.",
    "reasoning": "JKning 26-moddasiga ko‘ra, shaxs jinoiy oqibat kelib chiqishining oldini olish uchun barcha zarur harakatlarni bajargan bo‘lsa ham, agar o‘limning oldi unga bog‘liq bo‘lmagan omillar (shifokorlarning mahorati) tufayli olingan bo‘lsa va amalda boshqa jinoyat tarkibi (sog‘liqqa shikast yetkazish) yuzaga kelgan bo‘lsa, bu to‘liq ixtiyoriy qaytish emas, balki faol pushaymonlik (samarali tavba) sifatida baholanadi."
  },
  {
    "id": "case-5",
    "number": 5,
    "title": "O‘g‘irlik, talonchilik va bosqinchilikning chegaralanishi",
    "situation": "Fuqaro N. tungi vaqtda ko‘chada ketayotgan ayolning qo‘lidagi sumkasini yulib olib qochadi. Ayol baqirib uning orqasidan quvadi va kurtkasidan ushlab oladi. N. sumkani bermaslik va qochib qutulish maqsadida ayolni yerga itarib yuboradi, natijada ayol boshini bordyurga urib, hayot uchun xavfli bo‘lgan og‘ir tan jarohati oladi.",
    "prompt": "Dastlab yashirin yoki ochiq boshlangan o‘zganing mulkini talon-toroj qilish qanday jinoyatga aylanadi?",
    "qualification": "N.ning qilmishi JKning 164-moddasi 1-qismi (Bosqinchilik) bilan kvalifikatsiya qilinadi.",
    "reasoning": "Oliy sud Plenumi tushuntirishlariga ko‘ra, o‘g‘irlik yoki talonchilik sifatida boshlangan qilmish jarayonida aybdor mulkni egallash yoki uni o‘zida saqlab qolish maqsadida jabrlanuvchining hayoti va sog‘lig‘i uchun xavfli bo‘lgan zo‘rlik ishlatsa (yoki shunday zo‘rlik ishlatish bilan qo‘rqitsa), qilmish bosqinchilikka o‘sib o‘tadi va tamom bo‘lgan bosqinchilik sifatida baholanadi."
  },
  {
    "id": "case-6",
    "number": 6,
    "title": "Pora olish va firibgarlikning farqlanishi",
    "situation": "Tuman hokimligi bo‘lim boshlig‘i X. tadbirkor Y.ga yer uchastkasini auksionsiz rasmiylashtirib berishni va’da qilib, buning evaziga 10 000 AQSH dollari talab qiladi. Aslida X.ning xizmat vakolati doirasiga yer ajratish masalasi kirmasligini va bu masalani hal qila olmasligini bilgan holda, pullarni shaxsiy ehtiyojiga ishlatib yuboradi.",
    "prompt": "Mansabdor shaxs tomonidan o‘z vakolatiga kirmaydigan harakat uchun pul olish pora olish hisoblanadimi yoki firibgarlik?",
    "qualification": "X.ning harakati JK 168-moddasi 3-qismi «v» bandi (xizmat mavqeidan foydalangan holda firibgarlik) hamda JK 28, 211-moddasi (pora berishga dalolat qilish) bilan kvalifikatsiya qilinadi (agar u pulni yuqori turuvchi mansabdorga berishini aytib aldagan bo‘lsa). Agar u yolg‘iz o‘zi hal qilishini aytib aldagan bo‘lsa, faqat JK 168-moddasi 3-qismi «v» bandi qo‘llaniladi.",
    "reasoning": "Pora olish (JK 210-modda) tarkibi vujudga kelishi uchun mansabdor shaxs o‘z xizmat mavqeidan foydalangan holda bajarishi lozim yoki mumkin bo‘lgan muayyan harakatni bajarishi kerak. Vakolatiga mutlaqo kirmaydigan va ta’sir o‘tkaza olmaydigan masalada aldash yo‘li bilan mulkni egallash firibgarlik hisoblanadi."
  },
  {
    "id": "case-7",
    "number": 7,
    "title": "Qo‘shma qasd (murakkab ayb shakli)",
    "situation": "Fuqaro G. mast holda kafeda o‘tirib, qo‘shni stoldagi Z. bilan janjallashib qoladi. G. jahl ustida Z.ning yuziga kuchli musht tushiradi. Z. zarbadan muvozanatini yo‘qotib yiqiladi va boshi bilan beton zina qirrasiga urilib, miyaga qon quyilishi oqibatida kasalxonada vafot etadi. G. sudda Z.ni o‘ldirish niyati bo‘lmaganini, faqat urib qo‘ymoqchi bo‘lganini bildiradi.",
    "prompt": "G.ning ayb shaklini aniqlang va qilmishni kvalifikatsiya qiling.",
    "qualification": "G.ning harakati JKning 104-moddasi 3-qismi «d» bandi (Qasddan badanga og‘ir shikast yetkazish jabrlanuvchining o‘lishiga sabab bo‘lsa) yoki agar zarba kuchi va sharoitga ko‘ra og‘ir shikast yetkazishga qasd bo‘lmasdan, o‘lim faqat yiqilish oqibatida kelib chiqqan bo‘lsa, JKning 102-moddasi 1-qismi (Ehtiyotsizlik orqasida odam o‘ldirish) bilan kvalifikatsiya qilinadi.",
    "reasoning": "Sud amaliyotida agar mushtlashish natijasida jabrlanuvchi qattiq yuzaga yiqilib vafot etsa va aybdor og‘ir tan jarohati yetkazishni nazarda tutmagan bo‘lsa, uning harakati ehtiyotsizlik orqasida odam o‘ldirish (JK 102-modda) deb baholanadi. Agar zarbaning o‘zi hayot uchun xavfli og‘ir shikast yetkazib, o‘limga olib kelgan bo‘lsa — qo‘shma qasd sifatida JK 104-modda 3-qismi «d» bandi qo‘llaniladi."
  },
  {
    "id": "case-8",
    "number": 8,
    "title": "Oxirgi zarurat va moddiy zarar",
    "situation": "Yuk mashinasi haydovchisi V. tormoz tizimi to‘satdan ishdan chiqqanini sezib qoladi. Oldinda piyodalar o‘tish joyidan o‘tayotgan bir guruh maktab o‘quvchilarini urib yubormaslik uchun V. rulni keskin chapga buradi va yo‘l chetidagi qimmatbaho xorijiy yengil avtomobilga borib uriladi. Natijada yengil avtomobilga 150 million so‘mlik zarar yetadi, hech kim tan jarohati olmaydi.",
    "prompt": "V.ning harakatida jinoyat tarkibi mavjudmi? Yetkazilgan moddiy zarar kim tomonidan qoplanadi?",
    "qualification": "V.ning harakati oxirgi zarurat (JK 38-modda) holatida sodir etilganligi sababli jinoiy javobgarlikni istisno qiladi (qilmishda jinoyat tarkibi yo‘q).",
    "reasoning": "JKning 38-moddasiga ko‘ra, insonlar hayotiga tahdid solayotgan xavfni boshqa vositalar bilan bartaraf etishning iloji bo‘lmagan va yetkazilgan moddiy zarar oldi olingan zarardan (bolalarning hayoti) kamroq bo‘lgan. Jinoiy javobgarlik kelib chiqmaydi, biroq moddiy zarar Fuqarolik kodeksi normalari asosida (avtomobil egasi — yuridik shaxs yoki xavfni yuzaga keltirgan shaxs hisobidan) hal etiladi."
  },
  {
    "id": "case-9",
    "number": 9,
    "title": "Mansab vakolatini suiiste’mol qilish va xo‘jalik tavakkalchiligi",
    "situation": "Davlat korxonasi direktori E. hosilni yomg‘irdan saqlab qolish va korxonani katta bankrotlikdan olib chiqish maqsadida tender o‘tkazmasdan, bozor narxidan biroz qimmatroqqa zudlik bilan quritish uskunalarini sotib oladi. Natijada hosil saqlab qolinadi va korxona 2 milliard so‘m sof foyda ko‘radi, biroq tender qoidalari buzilgani sababli nazorat organlari korxonaga 250 million so‘m miqdorida ortiqcha xarajat qilinganini aniqlaydi. E. hech qanday shaxsiy manfaat ko‘rmagan.",
    "prompt": "E.ning harakati JK 205-moddasi (Hokimiyat yoki mansab vakolatini suiiste’mol qilish) bilan kvalifikatsiya qilinadimi?",
    "qualification": "E.ning harakatida jinoyat tarkibi mavjud emas; bu asosli kasb yoki xo‘jalik tavakkalchiligi (JK 41-modda) hisoblanadi.",
    "reasoning": "JKning 41-moddasiga muvofiq, ijtimoiy foydali maqsadga erishish uchun qilingan asosli kasb yoki xo‘jalik tavakkalchiligi vaqtida zarar yetkazilgan bo‘lsa-da, shaxs fan-texnika bilimlari va tajribaga tayangan holda xavfning oldini olish uchun barcha choralarni ko‘rgan bo‘lsa, qilmish jinoyat deb topilmaydi."
  },
  {
    "id": "case-10",
    "number": 10,
    "title": "Jinoyat qonunining vaqt bo‘yicha amal qilishi (orqaga qaytish kuchi)",
    "situation": "Fuqaro O. 2025-yilning mart oyida ma’lum bir qilmishni sodir etadi. O‘sha paytda amalda bo‘lgan Jinoyat kodeksi moddasiga ko‘ra, ushbu qilmish uchun 5 yildan 8 yilgacha ozodlikdan mahrum qilish jazosi belgilangan edi. 2025-yilning sentabr oyida (tergov davom etayotgan vaqtda) qabul qilingan qonun bilan ushbu moddaning sanksiyasi og‘irlashtirilib, 8 yildan 12 yilgacha qilib belgilandi. 2026-yil yanvar oyida esa yangi qonun bilan ushbu moddaning sanksiyasi 3 yildan 5 yilgacha tushirildi. Sud hukmi 2026-yilning fevral oyida chiqarilmoqda.",
    "prompt": "Sud O.ga nisbatan qaysi sanada amalda bo‘lgan qonun normasini qo‘llashi shart?",
    "qualification": "Sud 2026-yil yanvar oyida qabul qilingan yangi qonunni (3 yildan 5 yilgacha bo‘lgan sanksiyani) qo‘llashi shart.",
    "reasoning": "JKning 13-moddasiga ko‘ra, qilmishning jinoiyligini bekor qiladigan, jazoni yengillashtiradigan yoki shaxsning ahvolini boshqacha tarzda yaxshilaydigan qonun orqaga qaytish kuchiga ega, ya’ni ushbu qonun kuchga kirгунга qadar tegishli qilmishni sodir etgan shaxslarga nisbatan tatbiq etiladi. Jazoni og‘irlashtiruvchi qonun (2025-yil sentabrdagi) esa orqaga qaytish kuchiga ega emas."
  }
];

