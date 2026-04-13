export default defineNuxtConfig({
  compatibilityDate: '2026-04-09',
  devtools: { enabled: false },

  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Deniz Kabuğu Hotel | Dijital Menü',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
      meta: [
        { name: 'theme-color', content: '#fdfcf8' }
      ],
      link: [
        {rel: 'icon', type:'image/svg+xml', href: '/logo.svg'},
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;600;700&display=swap' 
        },{ 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' 
        },
        
      ]
    }
  },
 css: ['~/assets/css/main.css'],
image: {
   
   screens: {
      xs: 150,
      sm: 300,  // Uyarıda geçen (300) boyutu buraya eklendi
      md: 320,
      lg: 640,
      xl: 768
    },
    format: ['webp', 'avif','jpeg'],
    quality: 80,
  },

  vite: {
    optimizeDeps: {
      include: ['lucide-vue-next']
    }
  },

  i18n: {
    langDir: 'locales/',
    strategy: 'no_prefix',
    defaultLocale: 'tr',
    locales: [
      { code: 'tr', iso: 'tr-TR', file: 'tr.json', name: 'Türkçe' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' }
    ]
  }
})