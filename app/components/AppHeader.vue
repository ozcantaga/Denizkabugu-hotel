<template>
  <header class="relative pt-16 pb-10 px-6 flex flex-col items-center border-b border-hotel-accent/10 overflow-hidden bg-hotel-cream">
    <div class="absolute -top-24 w-64 h-64 bg-hotel-blue/20 blur-[100px] -z-10 rounded-full"></div>

    <div class="absolute top-4 right-4 flex gap-3 z-20">
      <button v-for="l in locales" :key="l.code" @click="setLocale(l.code)"
              :class="['text-[10px] font-bold uppercase tracking-widest transition-all', 
                       locale === l.code ? 'text-hotel-dark border-b border-hotel-dark' : 'text-hotel-dark/30 hover:text-hotel-dark/60']">
        {{ l.code }}
      </button>
    </div>

    <div class="mb-8 relative group cursor-pointer">
      <div class="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center p-2 transition-transform duration-1000 group-hover:scale-105">
        <NuxtImg 
          src="/logo/denizkabugulogoson.svg" 
          width="128"
          height="128"
          class="w-full h-full object-contain drop-shadow-sm" 
          alt="Deniz Kabuğu Logo" 
          loading="eager"
        />
      </div>
      
      <div class="absolute inset-0 border border-hotel-accent/20 rounded-full -m-2 md:-m-4 -z-10 transition-all duration-700 group-hover:border-hotel-blue/40 group-hover:rotate-45"></div>
      <div class="absolute inset-0 border border-dashed border-hotel-accent/10 rounded-full -m-3 md:-m-6 -z-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
    </div>

    <div class="text-center space-y-3">
      <h1 class="font-serif italic text-3xl md:text-4xl text-hotel-dark tracking-tight uppercase font-bold">
        {{ $t('hotelName') }}
      </h1>
      
      <div class="flex items-center justify-center gap-4">
        <div class="h-[1px] w-8 bg-hotel-accent/20"></div>
        <p class="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-hotel-accent font-bold">
          {{ $t('welcome') }}
        </p>
        <div class="h-[1px] w-8 bg-hotel-accent/20"></div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();
</script>

<style scoped>
header {
  animation: fadeInDown 0.8s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>