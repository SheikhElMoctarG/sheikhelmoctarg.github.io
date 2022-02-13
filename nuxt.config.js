export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: 'spa',
  router: {
    base: '/'
  },
  head: {
    title: 'الشيخ المختار الشنقيطي',
    htmlAttrs: {
      lang: 'ar'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "مرحبا بك في موقع المهندس الشيخ المختار الشنقيطي، هنا يمكنك الاطلاع على بعض المعلومات عني"},
      { name: 'format-detection', content: 'telephone=yes' },
      {hid: 'og:title', name: 'og:title', content: "الشيخ المختار الشنقيطي"},
      {hid: 'og:image', property: 'og:image', content: 'https://g.top4top.io/p_22352uaul1.jpg'},
      { name: 'google-site-verification', content: "ZeiClcfAeb4Ssc-QGjzpPhylmKe2U6-Baks6Fj6AU2A"},
      {hid: 'keywords', name: 'keywords', content: 'Sheikh El-Moctar, sheikh el-moctar, sheikhelmoctar, SheikhElMoctar, الشيخ المختار الشنقيطي, الشيخ المختار, المهندس الشيخ المختار, مهندس برمجيات'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  // analytics
  googleAnalytics: {
    id: 'UA-220193948-1'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  
  // sitemap
  sitemap: {
    hostname: "https://sheikhelmoctarg.github.io",
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**'
    ],
    routes: [
      '/',
    ]
  },

  // robots
  robots: {
    UserAgent: '*',
    Disallow: '/'
  },
  // i18n
  i18n: {
    locales: [
      {code: 'ar', dir: 'rtl'},
      {code: 'en', dir: 'ltr'},
      ],
    defaultLocale: 'ar',
    vueI18n:{
      fallbackLocale: 'ar',
      messages: {
        ar: {
          logoName: 'الشيخ المختار الشنقيطي',
          lang: "English",
          helloIam: "مرحبًا! أنا",
          sheikhEl: "الشيخ المختار",
          description: "انا مهندس برمجيات موريتاني الجنسية وخليجي الثقافة، اعمل على تطوير البرمجيات بمختلف اللغات البرمجيات واطر عمل مختلفة",
          sendM: "إرسال رسالة",
          skills1: "مجالاتي",
          skills2: "التي أهتم بها",
          programming: {
            title: "البرمجة",
            description: "عملية كتابة تعليمات وتوجيه أوامر لجهاز الحاسوب او أي جهاز اخر ",
            src: "1"
          },
          sienceSpace: {
            title: "علوم الفضاء",
            description: "هو علم طبيعي يدرس الظواهر الفلكية والاجرام السماوية، يستخدم علم الفضاء الرياضيات والفيزياء والكيمياء لشرح اصل وتطور تلك الظواهر والأجرام",
            src: "2"

          },
          reverseEngeenir: {
            title: "الهندسة العكسية",
            description: "هي ألية تعني باكتشاف المبادئ التقنية لألة او نظام من خلال تحليل بنيته وطريقة عمله، غالبا ما تتم هذه العملية بتحليل نظام ما الى أجزاء او محاولة إعادة تصنيعه",
            src: "3"
          },
          missileEng: {
            title: "هندسة الصواريخ",
            description: "هو العلم المسؤول عن تصميم وتطوير الطائرات والمركبات الفضائية",
            src: "4"
          },
          fb: "الفيسبوك",
          qu: "كيورا العربية",
          tw: "تويتر",
          cc: "تم التصميم والتطوير من أجلك❤️ من قلبي لكم",
          description: "مرحبا بك في موقع المهندس الشيخ المختار الشنقيطي، هنا يمكنك الاطلاع على بعض المعلومات عني"
        },
        en: {
          logoName: 'Sheikh El-Moctar El-Shengeeti',
          lang: "العربية",
          helloIam: "HEY, I AM",
          sheikhEl: "SHEIKH EL-MOCTAR",
          description: "I am software engineer, I have Mauritania's nationality  but my cutlet is gulf   ",
          sendM: "Send message",
          skills1: "MY",
          skills2: "SKILLS",
          programming: {
            title: "Programming",
            description: "The process of writing instructions and directing commands to a computer or any other devices",
            src: "1"
          },
          sienceSpace: {
            title: "Space Science",
            description: "its a natural science that studies Astronomical  phenomena and celestial bodies,",
            src: "2"
          },
          reverseEngeenir: {
            title: "Reverse Engineering",
            description: "It is mechanism that means discovering the technical principles of a machine or system by analyzing its structure and working method",
            src: "3"
          },
          missileEng: {
            title: "Missile Engineering",
            description: "It is the science responsible for the design and development of aircraft and spacecarft",
            src: "4"
          },
          fb: "Facebook",
          qu: "Quora Arabic",
          tw: "twitter",
          cc: "designed and developed by SHEIKH ❤️ to you",
          description: "Welcome in Sheikh El-Moctar El-Shengitee"
        }
      }
    }
  },

  // axios
  axios: {
    // extra config e.g
    // BaseURL: 'https://link-to-API'
  },
  // routes
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  }
}
