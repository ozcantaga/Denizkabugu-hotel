// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],

  // --- NUXT IMAGE AYARLARI ---
  // Resimlerin farklı ekran boyutlarına göre otomatik optimize edilmesi için
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
    domains: ['images.unsplash.com'], // Eğer dış kaynaklı resim kullanacaksan buraya eklemelisin
    format: ['webp', 'avif', 'jpeg'], // En hızlı formatları önceliklendirir
  },

  // --- I18N (DİL) AYARLARI ---
i18n: {
  
  langDir: 'locales/', // 'i18n/locales' değil, sadece 'locales/' yap
  strategy: 'prefix_except_default',
  defaultLocale: 'tr',
  locales: [
    { code: 'tr', iso: 'tr-TR', file: 'tr.json', name: 'Türkçe' },
    { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' }
  ],
  // ... diğer ayarlar
},

  // --- TAILWIND CSS AYARLARI ---
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  // --- GLOBAL CSS & FONTS ---
  app: {
    head: {
      title: 'Deniz Kabuğu Hotel | Gastronomi',
      htmlAttrs: { lang: 'tr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
        { name: 'theme-color', content: '#c2d9e7' }
      ],
    }
  }
})