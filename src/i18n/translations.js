/**
 * All user-facing text for the site in English (en) and Hindi (hi).
 * Components read the active dictionary via useLanguage().
 */
export const translations = {
  en: {
    whatsappMessage: 'Hi, I would like a quote for sand, stone or bricks.',
    nav: {
      links: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#products', label: 'Materials' },
        { href: '#process', label: 'Process' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
      ],
      getQuote: 'Get Quote',
    },
    hero: {
      titleLines: ['Sand, Stone', '& Bricks.'],
      sub: 'Family-run supply business in Prayagraj — quality sand, stone, and bricks delivered to your site at fair rates.',
      call: 'Call',
      whatsappQuote: 'WhatsApp Quote',
      legendTitle: 'From base to brick —',
      marquee: 'Sand · Stone · Bricks · Prayagraj · Azad Nagar · Site Delivery ·',
    },
    materials: [
      {
        id: 'sand',
        title: 'Sand',
        tag: 'River & M-Sand',
        desc: 'Clean river sand and M-sand for concrete, plastering, and flooring — sold by truck or cubic feet with reliable quality.',
        alt: 'Construction sand supply',
      },
      {
        id: 'stone',
        title: 'Stone',
        tag: 'Blue Metal & Gitti',
        desc: 'Blue metal, gitti, and crushed stone for foundations, road work, and concrete mix — graded and ready for site delivery.',
        alt: 'Blue metal and crushed stone',
      },
      {
        id: 'bricks',
        title: 'Bricks',
        tag: 'Clay & Fly-Ash',
        desc: 'Red clay bricks and fly-ash bricks — uniform size, strong quality, and competitive rates for homes and commercial builds.',
        alt: 'Red clay bricks',
      },
    ],
    about: {
      titleLines: ['About', 'us'],
      paragraphs: [
        'We are a family-run materials business in Azad Nagar, Prayagraj, supplying sand, stone, and bricks to builders, contractors, and homeowners across the city and nearby areas.',
        'With years of experience in this trade, we focus on honest rates, good quality stock, and on-time delivery. Whether you need one truck of sand or a full load of bricks, we treat every order with the same care.',
        'Call or WhatsApp us anytime during business hours — we will confirm stock, share the rate, and dispatch materials straight to your site.',
      ],
      areasLabel: 'What we supply for',
      areas: [
        {
          title: 'Home Construction',
          desc: 'Sand for plastering, stone for foundations, and bricks for walls — everything for your house build.',
        },
        {
          title: 'Road & Paving',
          desc: 'Gitti, gravel, and crushed stone for roads, driveways, and base layers.',
        },
        {
          title: 'Boundary & Commercial',
          desc: 'Bulk brick supply and sand delivery for compound walls, shops, and commercial sites.',
        },
      ],
    },
    products: {
      titleLines: ['our', 'materials'],
      intro: 'We supply sand, stone, and bricks for every kind of build — from home construction to road and boundary work across Prayagraj and nearby areas.',
      requestPrice: 'Request price',
      quoteFor: (title) => `Hi, I'd like a quote for ${title}.`,
    },
    process: {
      titleLines: ['our', 'process'],
      intro: 'Ordering sand, stone, or bricks is simple — call us, get a rate, and we deliver straight to your site.',
      steps: [
        {
          title: 'Call or WhatsApp',
          desc: 'Tell us what you need - sand, stone, or bricks - along with the quantity (trucks, cft, or number of bricks) and your delivery location in Prayagraj or nearby.',
        },
        {
          title: 'Rate & Stock Check',
          desc: 'We confirm availability at our yard and share the rate per truck, per cft, or per thousand bricks. No hidden charges - you get a clear price before ordering.',
        },
        {
          title: 'Loading & Dispatch',
          desc: 'Once you confirm, materials are loaded at our Azad Nagar yard and dispatched to your site on the agreed date and time.',
        },
        {
          title: 'Delivery & Payment',
          desc: 'Materials are delivered and unloaded at your location. Payment is settled as agreed - cash or UPI - and repeat orders are always welcome.',
        },
      ],
      prevStep: 'Previous step',
      nextStep: 'Next step',
    },
    projects: {
      titleLines: ['past', 'projects'],
      intro: 'From family homes to city infrastructure — materials from our yards are built into landmarks across the region.',
      items: [
        { title: 'Skyline Residences', category: 'Residential' },
        { title: 'Metro Corporate Park', category: 'Commercial' },
        { title: 'Riverside Expressway', category: 'Infrastructure' },
        { title: 'Green Valley Villas', category: 'Residential' },
      ],
      explore: 'Explore Our Supply',
      prevProject: 'Previous project',
      nextProject: 'Next project',
    },
    cta: {
      eyebrow: 'Prayagraj supply',
      titleLines: ['Need Sand,', 'Stone or Bricks?'],
      sub: "Call us for today's rate and delivery timing. We supply directly from our yard in Azad Nagar to your site.",
      contactUs: 'Contact Us',
      getQuote: 'Get a Quote',
    },
    contact: {
      titleLines: ["Let's", 'Connect'],
      intro: 'Call, WhatsApp, or email us for rates on sand, stone, and bricks — we respond quickly during business hours.',
      call: 'Call',
      whatsapp: 'WhatsApp',
      email: 'Email',
      visit: 'Visit',
      address: 'Manoj Ballo Business, Azad Nagar, Prayagraj, Uttar Pradesh 211016',
      hours: 'Mon – Sat: 8:00 AM – 8:00 PM',
      openMaps: 'Open in Google Maps',
      chatWhatsApp: 'Chat on WhatsApp',
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'Sand, Stone & Bricks Supplier — Prayagraj',
    },
    floating: {
      whatsappAria: 'Chat with us on WhatsApp',
      callNow: 'Call Now',
      getQuote: 'Get Quote',
    },
  },

  hi: {
    whatsappMessage: 'नमस्ते, मुझे बालू, गिट्टी या ईंट का रेट चाहिए।',
    nav: {
      links: [
        { href: '#home', label: 'होम' },
        { href: '#about', label: 'हमारे बारे में' },
        { href: '#products', label: 'सामग्री' },
        { href: '#process', label: 'प्रक्रिया' },
        { href: '#projects', label: 'प्रोजेक्ट्स' },
        { href: '#contact', label: 'संपर्क' },
      ],
      getQuote: 'रेट पूछें',
    },
    hero: {
      titleLines: ['बालू, गिट्टी', 'और ईंट।'],
      sub: 'प्रयागराज का पारिवारिक सप्लाई व्यवसाय — अच्छी क्वालिटी की बालू, गिट्टी और ईंट, सही रेट पर सीधे आपकी साइट तक।',
      call: 'कॉल करें:',
      whatsappQuote: 'व्हाट्सऐप पर रेट पूछें',
      legendTitle: 'नींव से ईंट तक —',
      marquee: 'बालू · गिट्टी · ईंट · प्रयागराज · आज़ाद नगर · साइट डिलीवरी ·',
    },
    materials: [
      {
        id: 'sand',
        title: 'बालू',
        tag: 'नदी की बालू और एम-सैंड',
        desc: 'कंक्रीट, प्लास्टर और फर्श के लिए साफ नदी की बालू और एम-सैंड — ट्रक या घन फुट के हिसाब से, भरोसेमंद क्वालिटी के साथ।',
        alt: 'निर्माण के लिए बालू की सप्लाई',
      },
      {
        id: 'stone',
        title: 'गिट्टी',
        tag: 'ब्लू मेटल और गिट्टी',
        desc: 'नींव, सड़क के काम और कंक्रीट मिक्स के लिए ब्लू मेटल, गिट्टी और क्रश्ड स्टोन — ग्रेड की हुई और साइट डिलीवरी के लिए तैयार।',
        alt: 'ब्लू मेटल और क्रश्ड स्टोन',
      },
      {
        id: 'bricks',
        title: 'ईंट',
        tag: 'लाल मिट्टी और फ्लाई-ऐश',
        desc: 'लाल मिट्टी की ईंटें और फ्लाई-ऐश ईंटें — एक समान साइज़, मज़बूत क्वालिटी और घरों व कमर्शियल निर्माण के लिए वाजिब रेट।',
        alt: 'लाल मिट्टी की ईंटें',
      },
    ],
    about: {
      titleLines: ['हमारे', 'बारे में'],
      paragraphs: [
        'हम आज़ाद नगर, प्रयागराज का एक पारिवारिक सामग्री व्यवसाय हैं, जो शहर और आसपास के इलाकों में बिल्डरों, ठेकेदारों और घर बनाने वालों को बालू, गिट्टी और ईंट सप्लाई करते हैं।',
        'इस काम में सालों के अनुभव के साथ, हमारा ध्यान ईमानदार रेट, अच्छी क्वालिटी के माल और समय पर डिलीवरी पर रहता है। चाहे आपको एक ट्रक बालू चाहिए या ईंटों की पूरी गाड़ी, हम हर ऑर्डर का एक जैसा ध्यान रखते हैं।',
        'कारोबारी समय में कभी भी कॉल या व्हाट्सऐप करें — हम स्टॉक कन्फर्म करेंगे, रेट बताएँगे और सामग्री सीधे आपकी साइट पर भेज देंगे।',
      ],
      areasLabel: 'हम किन कामों के लिए सप्लाई करते हैं',
      areas: [
        {
          title: 'घर का निर्माण',
          desc: 'प्लास्टर के लिए बालू, नींव के लिए गिट्टी और दीवारों के लिए ईंट — आपके घर के निर्माण की हर ज़रूरत।',
        },
        {
          title: 'सड़क और पेविंग',
          desc: 'सड़कों, ड्राइववे और बेस लेयर के लिए गिट्टी, बजरी और क्रश्ड स्टोन।',
        },
        {
          title: 'बाउंड्री और कमर्शियल',
          desc: 'कंपाउंड वॉल, दुकानों और कमर्शियल साइटों के लिए थोक में ईंट और बालू की डिलीवरी।',
        },
      ],
    },
    products: {
      titleLines: ['हमारी', 'सामग्री'],
      intro: 'हम हर तरह के निर्माण के लिए बालू, गिट्टी और ईंट सप्लाई करते हैं — घर बनाने से लेकर प्रयागराज और आसपास के इलाकों में सड़क और बाउंड्री के काम तक।',
      requestPrice: 'रेट पूछें',
      quoteFor: (title) => `नमस्ते, मुझे ${title} का रेट चाहिए।`,
    },
    process: {
      titleLines: ['हमारी', 'प्रक्रिया'],
      intro: 'बालू, गिट्टी या ईंट मंगवाना आसान है — हमें कॉल करें, रेट लें, और हम सीधे आपकी साइट पर डिलीवर कर देंगे।',
      steps: [
        {
          title: 'कॉल या व्हाट्सऐप करें',
          desc: 'बताएँ कि आपको क्या चाहिए — बालू, गिट्टी या ईंट — मात्रा (ट्रक, घन फुट या ईंटों की संख्या) और प्रयागराज या आसपास में डिलीवरी की जगह के साथ।',
        },
        {
          title: 'रेट और स्टॉक की जानकारी',
          desc: 'हम अपने यार्ड में उपलब्धता कन्फर्म करते हैं और प्रति ट्रक, प्रति घन फुट या प्रति हज़ार ईंट का रेट बताते हैं। कोई छिपा हुआ चार्ज नहीं — ऑर्डर से पहले साफ-साफ रेट।',
        },
        {
          title: 'लोडिंग और रवानगी',
          desc: 'आपके कन्फर्म करते ही सामग्री हमारे आज़ाद नगर यार्ड से लोड होकर तय तारीख और समय पर आपकी साइट के लिए रवाना कर दी जाती है।',
        },
        {
          title: 'डिलीवरी और भुगतान',
          desc: 'सामग्री आपकी जगह पर पहुँचाकर उतारी जाती है। भुगतान तय शर्तों के अनुसार — कैश या यूपीआई — और दोबारा ऑर्डर का हमेशा स्वागत है।',
        },
      ],
      prevStep: 'पिछला चरण',
      nextStep: 'अगला चरण',
    },
    projects: {
      titleLines: ['पिछले', 'प्रोजेक्ट्स'],
      intro: 'घरों से लेकर शहर के इंफ्रास्ट्रक्चर तक — हमारे यार्ड की सामग्री इस क्षेत्र की कई इमारतों में लगी है।',
      items: [
        { title: 'स्काईलाइन रेज़िडेंसेज़', category: 'आवासीय' },
        { title: 'मेट्रो कॉर्पोरेट पार्क', category: 'कमर्शियल' },
        { title: 'रिवरसाइड एक्सप्रेसवे', category: 'इंफ्रास्ट्रक्चर' },
        { title: 'ग्रीन वैली विलाज़', category: 'आवासीय' },
      ],
      explore: 'हमारी सप्लाई देखें',
      prevProject: 'पिछला प्रोजेक्ट',
      nextProject: 'अगला प्रोजेक्ट',
    },
    cta: {
      eyebrow: 'प्रयागराज सप्लाई',
      titleLines: ['बालू, गिट्टी', 'या ईंट चाहिए?'],
      sub: 'आज के रेट और डिलीवरी समय के लिए हमें कॉल करें। हम आज़ाद नगर के अपने यार्ड से सीधे आपकी साइट पर सप्लाई करते हैं।',
      contactUs: 'संपर्क करें',
      getQuote: 'रेट पूछें',
    },
    contact: {
      titleLines: ['हमसे', 'जुड़ें'],
      intro: 'बालू, गिट्टी और ईंट के रेट के लिए कॉल, व्हाट्सऐप या ईमेल करें — कारोबारी समय में हम जल्दी जवाब देते हैं।',
      call: 'कॉल',
      whatsapp: 'व्हाट्सऐप',
      email: 'ईमेल',
      visit: 'पता',
      address: 'Manoj Ballo Business, आज़ाद नगर, प्रयागराज, उत्तर प्रदेश 211016',
      hours: 'सोम – शनि: सुबह 8:00 – रात 8:00',
      openMaps: 'गूगल मैप्स में खोलें',
      chatWhatsApp: 'व्हाट्सऐप पर चैट करें',
    },
    footer: {
      rights: 'सर्वाधिकार सुरक्षित।',
      tagline: 'बालू, गिट्टी और ईंट सप्लायर — प्रयागराज',
    },
    floating: {
      whatsappAria: 'व्हाट्सऐप पर हमसे चैट करें',
      callNow: 'कॉल करें',
      getQuote: 'रेट पूछें',
    },
  },
}
