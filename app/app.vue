<template>
  <div>
    <NuxtLoadingIndicator color="#d97706" :height="3" />
    
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
/**
 * Global SEO ve Meta Başlık Ayarları
 * i18n kullanıyorsan başlıkları t('site_title') şeklinde de verebilirsin.
 */
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Deniz Kabuğu Hotel` : 'Deniz Kabuğu Hotel | Alaçatı Gastronomi Deneyimi';
  },
  meta: [
    { name: 'description', content: 'Ege\'nin en taze lezzetleri, butik kahvaltı ve eşsiz gastronomi deneyimi Alaçatı Deniz Kabuğu Hotel\'de.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
    { name: 'theme-color', content: '#fdfcf8' },
    // Open Graph / Social Media
    { property: 'og:title', content: 'Deniz Kabuğu Hotel | Gastronomi' },
    { property: 'og:description', content: 'Alaçatı\'nın kalbinde butik bir lezzet yolculuğu.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  ],
  htmlAttrs: {
    lang: 'tr' // i18n kullanıyorsan burayı dinamik yapabiliriz: locale.value
  }
})
</script>

<style>
/* Global CSS Değişkenleri ve Reset
  Tailwind ile çakışmaması için en temel ayarları bırakıyoruz.
*/

:root {
  --primary-amber: #d97706;
  --bg-cream: #fdfcf8;
  --text-dark: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* Mobil cihazlarda tıklama mavi kutusunu kaldırır */
  -webkit-tap-highlight-color: transparent;
}

html {
  /* Scroll deneyimini iyileştirir */
  scroll-behavior: smooth;
  /* Mobilde dikey kaydırma sırasında oluşan bounce etkisini stabilize eder */
  overscroll-behavior-y: none;
}

body {
  background-color: var(--bg-cream);
  color: var(--text-dark);
  font-family: 'Inter', sans-serif; /* Veya projenin ana fontu */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* Mobilde metinlerin otomatik büyümesini engeller */
  -webkit-text-size-adjust: 100%;
}

/* Nuxt Sayfa Geçiş Animasyonları */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Görsel Yumuşatma (Global) */
img {
  -webkit-user-drag: none;
  user-select: none;
}
</style>