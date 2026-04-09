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

      <div class="mb-4">
        <NuxtImg 
          src="/logo/denizkabugulogoson.svg" 
          width="100" 
          height="100" 
          class="object-contain" 
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
          <component :is="getIcon(data.icon)" :size="12" />
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

    <main class="max-w-2xl mx-auto px-6 pt-8">
      <div class="h-44 rounded-[2rem] overflow-hidden shadow-xl mb-10 border-4 border-white relative bg-gray-50">
        <Transition name="scale" mode="out-in">
          <NuxtImg 
            :key="activeCategory.image" 
            :src="activeCategory.image" 
            width="768" 
            height="432" 
            class="w-full h-full object-cover"
            format="webp"
            alt="Category Header"
          />
        </Transition>
      </div>

      <Transition name="fade" mode="out-in">
        <div :key="currentMainCat + currentSubCat">
           <MenuList :items="activeCategory.subs[currentSubCat]" />
        </div>
      </Transition>
    </main>

    <footer class="mt-20 pb-12 text-center">
      <div class="flex flex-col items-center mb-8">
        <div class="w-8 h-[1px] bg-hotel-accent/30 mb-6"></div>
        <h2 class="font-serif italic text-2xl text-hotel-dark tracking-hotel uppercase font-bold">
          {{ $t('hotelName') }}
        </h2>
      </div>
      
      <div class="border-t border-hotel-accent/5 pt-12">
        <p class="text-[9px] text-hotel-accent uppercase tracking-widest px-8 font-light italic leading-relaxed">
          {{ $t('ui.service_note') }}
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import * as LucideIcons from 'lucide-vue-next';

const { menuData, currentMainCat, currentSubCat } = useMenu();
const { locale, locales, setLocale } = useI18n();

const getIcon = (iconName: string) => (LucideIcons as any)[iconName] || LucideIcons.LayoutGrid;

const activeCategory = computed(() => {
  return menuData[currentMainCat.value] || { subs: {}, image: '' };
});

const changeCategory = (name: string) => {
  if (currentMainCat.value === name) return;
  currentMainCat.value = name;
  const subKeys = Object.keys(menuData[name]?.subs || {});
  currentSubCat.value = subKeys.length > 0 ? (subKeys[0] as string) : "";
  
  if (import.meta.client) {
    window.scrollTo({ top: 150, behavior: 'smooth' });
  }
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.fade-enter-from { opacity: 0; transform: translateY(8px); }
.fade-leave-to { opacity: 0; transform: translateY(-8px); }

.scale-enter-active, .scale-leave-active { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.scale-enter-from { opacity: 0; transform: scale(1.03); }
.scale-leave-to { opacity: 0; transform: scale(0.97); }
</style>