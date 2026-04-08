<script setup lang="ts">
import * as LucideIcons from 'lucide-vue-next';

// Props tanımlamaları (TypeScript ile daha güvenli)
interface Props {
  categories: Record<string, any>;
  activeCategory: string;
}
const props = defineProps<Props>();

// Emit tanımlaması
const emit = defineEmits<{
  (e: 'change', key: string): void
}>();

// İkon yardımcı fonksiyonu (Ana sayfadakiyle aynı mantık)
const getIcon = (iconName: string) => {
  return (LucideIcons as any)[iconName] || LucideIcons.LayoutGrid;
};
</script>

<template>
  <nav class="sticky top-0 z-50 bg-[#FDFCF8]/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
    <div class="flex gap-3 overflow-x-auto p-4 no-scrollbar max-w-2xl mx-auto items-center">
      <button 
        v-for="(data, key) in categories" 
        :key="key"
        @click="emit('change', key as string)"
        :class="[
          'flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] uppercase font-bold transition-all whitespace-nowrap border shrink-0', 
          activeCategory === key 
            ? 'bg-[#2C3E50] text-white border-[#2C3E50] shadow-md scale-95' 
            : 'bg-white text-gray-400 border-gray-100 hover:border-amber-200'
        ]"
      >
        <component :is="getIcon(data.icon)" :size="14" />
        {{ $t(`categories.${data.translationKey}`) }}
      </button>
    </div>
  </nav>
</template>

<style scoped>
/* Kaydırma çubuğunu gizleme (cross-browser) */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Aktif buton için hafif basılma efekti */
button:active {
  transform: scale(0.92);
}
</style>