<template>
  <div class="min-h-screen bg-hotel-cream pb-20 font-sans text-hotel-dark selection:bg-hotel-blue/30">
    
    <header class="relative pt-10 pb-6 px-6 max-w-2xl mx-auto flex flex-col items-center border-b border-hotel-accent/10 mb-4">
      <div class="absolute top-4 right-4 flex gap-3">
        <button v-for="l in locales" :key="l.code" @click="setLocale(l.code)"
                :class="['text-[10px] font-bold uppercase tracking-widest transition-opacity', 
                         locale === l.code ? 'text-hotel-dark border-b border-hotel-dark' : 'text-hotel-accent/40 hover:opacity-80']">
          {{ l.code }}
        </button>
      </div>

      <div class="mb-4 p-4 rounded-full bg-white/40 backdrop-blur-[2px] shadow-sm flex items-center justify-center">
        <NuxtImg 
          src="/logo.svg" 
          :width="160"
          :height="160"
          class="object-contain logo-enhance w-[150px] h-auto" 
          loading="eager"
          alt="Deniz Kabuğu Hotel"
        />
      </div>
    </header>

    <nav class="bg-hotel-cream/80 backdrop-blur-md z-[40] relative">
      <div class="flex flex-wrap gap-2 p-4 max-w-2xl mx-auto justify-center">
        <button v-for="(data, key) in menuData" :key="key" @click="changeCategory(key as string)"
                :class="['flex items-center gap-2 px-4 py-2 rounded-full text-[10px] uppercase font-bold transition-all border shrink-0', 
                         currentMainCat === key ? 'bg-hotel-dark text-white border-hotel-dark shadow-md' : 'bg-white text-hotel-accent border-hotel-accent/20 hover:border-hotel-accent/50']">
          <span class="material-symbols-outlined !text-[14px]">
            {{ data.icon }}
          </span>
          {{ $t(`categories.${data.translationKey}`) }}
        </button>
      </div>
    </nav>

    <div class="sticky top-0 z-[50] bg-hotel-cream/95 backdrop-blur-md border-b border-hotel-accent/10 shadow-sm">
      <div class="max-w-2xl mx-auto overflow-hidden">
        <div class="flex flex-nowrap items-center gap-6 px-6 py-4 overflow-x-auto no-scrollbar scroll-smooth">
          <button v-for="(_, subKey) in activeCategory.subs" :key="subKey" 
                  @click="currentSubCat = subKey as string"
                  :class="['text-[11px] uppercase tracking-[0.15em] transition-all whitespace-nowrap relative pb-1 font-bold shrink-0', 
                            currentSubCat === subKey 
                              ? 'text-hotel-dark border-b-2 border-hotel-blue' 
                              : 'text-hotel-dark/40 hover:text-hotel-dark']">
            {{ $t(`subCategories.${subKey}`) }}
          </button>
        </div>
      </div>
    </div>

    <main class="max-w-2xl mx-auto px-6 pt-8 min-h-[400px]">
      
     <div class="aspect-video w-full rounded-[2rem] overflow-hidden shadow-xl mb-10 border-4 border-white relative bg-hotel-cream-dark/20">
  <Transition name="scale" mode="out-in">
    <NuxtImg 
      :key="activeDisplayImage" 
      :src="activeDisplayImage"
      sizes="sm:100vw md:800px"
      class="w-full h-full object-cover transition-all duration-500 top" 
      :class="imageClass"
      format="webp"
      quality="90"
      alt="Menu Item Image" 
    />
  </Transition>
</div>

      <Transition name="fade" mode="out-in">
        <div :key="currentMainCat + currentSubCat">
           <MenuList :items="activeSubItems" />
        </div>
      </Transition>
    </main>

    <footer class="mt-20 w-full bg-white border-t border-hotel-accent/20 relative z-10">
      <div class="bg-hotel-cream py-8 border-b border-hotel-accent/10">
        <div class="max-w-2xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/905333018323" target="_blank" 
             class="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-md hover:scale-105 transition-all">
             <span class="material-symbols-outlined !text-[16px]">chat</span> {{ $t('footer.whatsapp_btn') }}
          </a>
          <a href="tel:+902327168090" 
             class="flex items-center gap-2 px-6 py-3 bg-hotel-dark text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-md hover:scale-105 transition-all">
             <span class="material-symbols-outlined !text-[16px]">call</span> {{ $t('footer.call_btn') }}
          </a>
        </div>
      </div>

      <div class="max-w-2xl mx-auto px-8 py-16 text-center md:text-left">
        <div class="flex flex-col md:flex-row justify-between gap-12">
          <div class="flex-1 space-y-4">
            <h3 class="font-serif italic text-2xl text-hotel-dark font-bold uppercase tracking-tight">
              {{ $t('hotelName') }}
            </h3>
            <div class="flex items-start justify-center md:justify-start gap-3 text-[12px] text-hotel-accent leading-relaxed">
              <span class="material-symbols-outlined text-hotel-blue shrink-0 mt-1 !text-[18px]">location_on</span>
              <p>Alaçatı Mah, 12080 Sok No:6,<br />35930 Çeşme/İzmir, Türkiye</p>
            </div>
          </div>

          <div class="flex-1 space-y-6">
            <h4 class="text-[10px] uppercase tracking-[0.3em] text-hotel-dark font-black">
              {{ $t('footer.contact_title') }}
            </h4>
            <div class="flex flex-col gap-4 text-[13px] text-hotel-accent font-medium">
              <a href="tel:+902327168090" class="hover:text-hotel-blue transition-colors flex items-center justify-center md:justify-start gap-3">
                <span class="material-symbols-outlined !text-[16px]">phone_in_talk</span> +90 232 716 80 90
              </a>
              <a href="mailto:info@denizkabuguhotel.com" class="hover:text-hotel-blue transition-colors flex items-center justify-center md:justify-start gap-3">
                <span class="material-symbols-outlined !text-[16px]">mail</span> info@denizkabuguhotel.com
              </a>
            </div>
          </div>
        </div>

        <div class="mt-16 pt-8 border-t border-hotel-accent/10 text-center">
          <p class="text-[9px] text-hotel-accent/40 uppercase tracking-[0.2em]">
            © {{ new Date().getFullYear() }} {{ $t('hotelName') }} Alaçatı
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { menuData, currentMainCat, currentSubCat } = useMenu();
const { locale, locales, setLocale } = useI18n();

const activeCategory = computed(() => {
  return menuData[currentMainCat.value] || { subs: {}, image: '' };
});

const activeDisplayImage = computed(() => {
  const sub = activeCategory.value.subs[currentSubCat.value];
  return (sub && typeof sub === 'object' && sub.image) ? sub.image : activeCategory.value.image;
});

// Resmin hizalamasını (top, center, bottom) belirler
const imageClass = computed(() => {
  const sub = activeCategory.value.subs[currentSubCat.value];
  const pos = (sub && typeof sub === 'object' && sub.position) ? sub.position : 'center';
  
  if (pos === 'top') return 'object-top';
  if (pos === 'bottom') return 'object-bottom';
  return 'object-center';
});

const activeSubItems = computed(() => {
  const sub = activeCategory.value.subs[currentSubCat.value];
  return (sub && typeof sub === 'object' && sub.items) ? sub.items : [];
});

const changeCategory = (name: string) => {
  if (currentMainCat.value === name) return;
  currentMainCat.value = name;
  const subKeys = Object.keys(menuData[name]?.subs || {});
  currentSubCat.value = subKeys.length > 0 ? (subKeys[0] as string) : "";
  if (import.meta.client) window.scrollTo({ top: 180, behavior: 'smooth' });
};

useHead({
  title: 'Deniz Kabuğu Hotel - Alaçatı Menü',
  meta: [{ name: 'description', content: 'Alaçatı mutfağından eşsiz lezzetler.' }]
})
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  vertical-align: middle;
}

.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.fade-enter-from { opacity: 0; transform: translateY(10px); }
.fade-leave-to { opacity: 0; transform: translateY(-10px); }

.scale-enter-active, .scale-leave-active { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
.scale-enter-from { opacity: 0; transform: scale(1.03); }
.scale-leave-to { opacity: 0; transform: scale(0.97); }
</style>