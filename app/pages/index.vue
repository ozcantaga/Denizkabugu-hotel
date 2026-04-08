<template>
  <div class="min-h-screen bg-[#FDFCF8] pb-20 font-sans text-[#2C3E50] selection:bg-amber-100">
    
    <header class="pt-12 pb-8 px-6 max-w-2xl mx-auto flex flex-col items-center border-b border-gray-100 mb-6">
      <div class="mb-6 relative group">
        <div class="w-24 h-24 flex items-center justify-center transition-transform duration-700 group-hover:rotate-12">
          <NuxtImg 
            src="/logo/denizkabugulogoson.svg" 
            class="w-full h-full object-contain"
            alt="Deniz Kabuğu Logo"
          />
        </div>
        <div class="absolute -inset-4 border border-gray-100 rounded-full -z-10 animate-pulse"></div>
      </div>

      <h1 class="font-serif italic text-3xl md:text-4xl text-[#2C3E50] tracking-tight mb-2 text-center uppercase">
        {{ $t('hotelName') }}
      </h1>
      <p class="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold mb-8 text-center">
        {{ $t('welcome') }}
      </p>

      <div class="flex gap-6 md:gap-8 border-t border-gray-50 pt-5 w-full justify-center">
        <button v-for="l in locales" :key="l.code" @click="setLocale(l.code)"
                :class="['text-[11px] font-bold uppercase tracking-widest transition-all hover:text-[#2C3E50]', 
                         locale === l.code ? 'text-[#2C3E50] border-b-2 border-[#2C3E50] pb-1' : 'text-gray-300']">
          {{ l.name }}
        </button>
      </div>
    </header>

  <nav class="sticky top-0 z-50 bg-[#FDFCF8]/90 backdrop-blur-md border-b border-gray-100 mb-8 shadow-sm">
  <div class="flex flex-wrap gap-2 md:gap-3 p-4 max-w-2xl mx-auto justify-center">
    <button v-for="(data, key) in menuData" :key="key" @click="changeCategory(key as string)"
            :class="['flex items-center gap-2 px-4 py-2 rounded-full text-[10px] uppercase font-bold transition-all border shrink-0', 
                     currentMainCat === key 
                       ? 'bg-[#2C3E50] text-white border-[#2C3E50] shadow-md' 
                       : 'bg-white text-gray-400 border-gray-100']">
      <component :is="getIcon(data.icon)" :size="12" />
      {{ $t(`categories.${data.translationKey}`) }}
    </button>
  </div>
</nav>

    <main class="max-w-2xl mx-auto px-6">
      <div class="h-48 md:h-60 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl mb-10 md:mb-12 border-4 border-white">
        <Transition name="scale" mode="out-in">
          <NuxtImg :key="activeCategory.image" :src="activeCategory.image" class="w-full h-full object-cover" format="webp" />
        </Transition>
      </div>

      <div class="flex justify-start md:justify-center gap-6 md:gap-10 mb-10 md:mb-14 overflow-x-auto no-scrollbar border-b border-gray-50 pb-4">
        <button v-for="(_, subKey) in activeCategory.subs" :key="subKey" @click="currentSubCat = subKey as string"
                :class="['text-[10px] md:text-xs uppercase tracking-[0.25em] transition-all whitespace-nowrap relative pb-1', 
                         currentSubCat === subKey ? 'font-black text-[#2C3E50]' : 'text-gray-300 hover:text-gray-500']">
          {{ $t(`subCategories.${subKey}`) }}
          <span v-if="currentSubCat === subKey" 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full shadow-[0_2px_4px_rgba(217,119,6,0.4)]"></span>
        </button>
      </div>

      <Transition name="fade" mode="out-in">
        <div :key="currentMainCat + currentSubCat">
           <MenuList :items="activeCategory.subs[currentSubCat]" />
        </div>
      </Transition>
    </main>

    <footer class="mt-24 pb-12 text-center border-t border-gray-50 pt-12">
      <p class="text-[9px] text-gray-300 uppercase tracking-[0.3em] px-6 leading-relaxed">
        {{ $t('ui.service_note') }}
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import * as LucideIcons from 'lucide-vue-next';

const { menuData, currentMainCat, currentSubCat } = useMenu();
const { locale, locales, setLocale } = useI18n();

const getIcon = (iconName: string) => {
  return (LucideIcons as any)[iconName] || LucideIcons.LayoutGrid;
};

const activeCategory = computed(() => menuData[currentMainCat.value]);

const changeCategory = (name: string) => {
  if (currentMainCat.value === name) return;

  currentMainCat.value = name;
  
  // Alt kategorileri alıyoruz
  const subKeys = Object.keys(menuData[name]?.subs || {});

  // Hatanın çözümü: Değerin string olduğunu garanti et veya fallback (yedek) ver
  if (subKeys.length > 0) {
    // subKeys[0] her zaman string olacaktır ama TS emin olamaz, 
    // bu yüzden 'as string' kullanarak veya varsayılan değer vererek hatayı çözüyoruz.
    currentSubCat.value = subKeys[0] as string;
  } else {
    currentSubCat.value = ""; // Eğer alt kategori yoksa boş string ata
  }
};
</script>

<style>
/* Kaydırma çubuğunu gizle */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

/* Yumuşak Fade Geçişi */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from { opacity: 0; transform: translateY(15px); }
.fade-leave-to { opacity: 0; transform: translateY(-15px); }

/* Görsel Ölçekleme Geçişi */
.scale-enter-active, .scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from { opacity: 0; transform: scale(1.05); }
.scale-leave-to { opacity: 0; transform: scale(0.95); }
</style>