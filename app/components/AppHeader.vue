<template>
  <header class="pt-16 pb-10 px-6 flex flex-col items-center border-b border-gray-50/50 relative overflow-hidden">
    <div class="absolute -top-24 w-64 h-64 bg-amber-50/30 blur-[100px] -z-10 rounded-full"></div>

    <div class="mb-8 relative group cursor-pointer">
      <div class="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center p-2 transition-transform duration-1000 group-hover:scale-105">
        <NuxtImg 
          src="/logo/denizkabugulogoson.svg" 
          class="w-full h-full object-contain drop-shadow-sm" 
          alt="Deniz Kabuğu Logo" 
        />
      </div>
      
      <div class="absolute inset-0 border border-gray-100 rounded-full -m-2 md:-m-4 -z-10 transition-all duration-700 group-hover:border-amber-200 group-hover:rotate-45"></div>
      <div class="absolute inset-0 border border-dashed border-gray-50 rounded-full -m-3 md:-m-6 -z-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
    </div>

    <div class="text-center space-y-2">
      <h1 class="font-serif italic text-3xl md:text-4xl text-[#2C3E50] tracking-tight uppercase">
        {{ $t('hotelName') }}
      </h1>
      
      <div class="flex items-center justify-center gap-4">
        <div class="h-[1px] w-8 bg-gray-100"></div>
        <p class="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">
          {{ $t('welcome') || 'Gastronomy Experience' }}
        </p>
        <div class="h-[1px] w-8 bg-gray-100"></div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// i18n otomatik olarak Nuxt tarafından tanınır
</script>

<style scoped>
/* Header'ın en üstte çok sert durmaması için yumuşak bir giriş */
header {
  animation: fadeInDown 1s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>