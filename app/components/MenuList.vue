<script setup lang="ts">
import * as LucideIcons from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const props = defineProps(['items']);
const { itemCounts, updateCount, progressiveRate } = useMenu();
const { t } = useI18n();

// İkon yardımcı fonksiyonu
const getIcon = (iconName: string) => {
  return (LucideIcons as any)[iconName] || LucideIcons.Utensils;
};

// Sistem saatini alıyoruz
const currentHour = new Date().getHours();

/**
 * Tip güvenliği için miktar çekme fonksiyonu
 */
const getItemCount = (id: string): number => {
  const counts = itemCounts.value as Record<string, number>;
  return counts[id] || 1;
};

/**
 * Ürünün şu anki saate göre siparişe açık olup olmadığını kontrol eder
 */
const isAvailable = (type?: string) => {
  if (!type) return true; 
  if (type === 'before_17') return currentHour < 17;
  if (type === 'after_17') return currentHour >= 17;
  return true;
};

/**
 * Fiyat Hesaplama
 */
const calculatePrice = (basePrice: number, id: string) => {
  const count = getItemCount(id);
  if (count <= 1) return new Intl.NumberFormat('tr-TR').format(basePrice);
  
  const rate = progressiveRate || 0.5;
  const totalPrice = basePrice + (basePrice * rate * (count - 1));
  return new Intl.NumberFormat('tr-TR').format(Math.round(totalPrice));
};

/**
 * Şişe fiyatı için formatlama
 */
const formatBottlePrice = (price: number) => {
  return new Intl.NumberFormat('tr-TR').format(price || 0);
};

/**
 * Güvenli Çeviri Fonksiyonu
 */
const safeT = (key: string | undefined) => {
  if (!key) return '';
  return key.includes('.') ? t(key) : key;
};
</script>

<template>
  <div class="space-y-8 md:space-y-12">
    <div v-for="item in items" :key="item.id" 
         class="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 group border-b border-gray-100 pb-6 md:pb-8 last:border-0 transition-all duration-500"
         :class="!isAvailable(item.availability) ? 'opacity-50' : ''">
      
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1.5">
          <component :is="getIcon(item.icon)" :size="18" class="text-amber-300 md:size-4 shrink-0" />
          <h3 class="font-serif italic text-lg md:text-xl text-[#2C3E50] truncate group-hover:text-amber-600 transition-colors">
            {{ safeT(item.name) }}
          </h3>
          
          <span v-if="item.tag" class="text-[8px] md:text-[7px] px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full uppercase font-bold tracking-widest border border-amber-100 shrink-0">
              {{ safeT(`tags.${item.tag}`) }}
          </span>
        </div>
        
        <p v-if="item.ingredients" class="text-[12px] md:text-[11px] text-gray-400 italic leading-relaxed md:leading-snug pl-7 md:pl-6 max-w-2xl">
          {{ safeT(item.ingredients) }}
        </p>

        <div v-if="item.availability" class="pl-7 md:pl-6 mt-3 md:mt-2">
          <div v-if="item.availability === 'before_17'" 
               class="flex items-center gap-1.5 p-1 px-2 rounded-md w-fit transition-all"
               :class="currentHour < 17 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'">
            <component :is="getIcon('Clock')" :size="12" />
            <span class="text-[9px] md:text-[8px] font-bold uppercase tracking-tighter">
              {{ currentHour < 17 ? safeT('ui.order_before_17') : safeT('ui.closed_after_17') }}
            </span>
          </div>
          
          <div v-if="item.availability === 'after_17'" 
               class="flex items-center gap-1.5 p-1 px-2 rounded-md w-fit transition-all"
               :class="currentHour >= 17 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'">
            <component :is="getIcon('Clock')" :size="12" />
            <span class="text-[9px] md:text-[8px] font-bold uppercase tracking-tighter">
              {{ currentHour >= 17 ? safeT('ui.order_after_17') : safeT('ui.available_after_17') }}
            </span>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between md:justify-end gap-4 md:gap-8 shrink-0 mt-2 md:mt-0 p-3 md:p-0 bg-gray-50/50 md:bg-transparent rounded-2xl md:rounded-none border border-gray-100 md:border-0">
        
        <div class="text-right flex flex-col justify-center min-w-[100px] md:min-w-[110px]">
          <div v-if="item.bottlePrice" class="flex flex-col items-end mb-1 md:mb-1.5 border-b border-gray-200 md:border-gray-100 pb-1 md:pb-1.5">
            <div class="flex items-baseline gap-1">
              <span class="text-[8px] text-gray-400 font-bold uppercase">{{ safeT('ui.bottle') }}</span>
              <span class="text-xl md:text-2xl font-bold tabular-nums text-[#2C3E50] tracking-tight leading-none">
                {{ formatBottlePrice(item.bottlePrice) }}
              </span>
              <span class="text-[10px] font-medium text-[#2C3E50]">{{ safeT('ui.currency') }}</span>
            </div>
          </div>

          <div class="flex flex-col items-end">
            <div class="flex items-baseline gap-0.5" :class="item.bottlePrice ? 'opacity-50 scale-90 origin-right' : ''">
              <span v-if="item.bottlePrice" class="text-[8px] text-gray-400 font-bold uppercase mr-1">{{ safeT('ui.glass') }}:</span>
              <span :class="item.bottlePrice ? 'text-lg font-medium' : 'text-2xl font-bold'" class="tabular-nums text-[#2C3E50] tracking-tight leading-none">
                {{ calculatePrice(item.price, item.id) }}
              </span>
              <span class="text-[10px] font-light text-[#2C3E50]">{{ safeT('ui.currency') }}</span>
            </div>
            
            <div v-if="getItemCount(item.id) > 1" 
                 class="inline-block text-[8px] md:text-[7px] text-amber-600 font-extrabold uppercase tracking-tighter bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100 mt-1 animate-pulse">
              + %{{ (progressiveRate || 0.5) * 100 }} {{ safeT('ui.bundle_savings') }}
            </div>
          </div>
        </div>

        <div class="flex items-center bg-white md:bg-gray-50 rounded-xl p-1 border border-gray-100 shadow-sm transition-all"
             :class="!isAvailable(item.availability) ? 'opacity-20 grayscale pointer-events-none' : 'hover:border-amber-200'">
          <button @click="updateCount(item.id, -1)" 
                  class="w-10 h-10 md:w-8 md:h-8 flex items-center justify-center hover:bg-gray-50 md:hover:bg-white rounded-lg transition-all active:scale-90 text-[#2C3E50]">
            <component :is="getIcon('Minus')" :size="14" />
          </button>
          
          <div class="flex flex-col items-center px-3 md:px-2 min-w-[40px] md:min-w-[35px]">
            <span class="text-base md:text-sm font-bold text-[#2C3E50]">{{ getItemCount(item.id) }}</span>
            <span class="text-[8px] md:text-[7px] uppercase font-bold text-gray-400 -mt-1 tracking-tighter">
              {{ safeT('ui.person') }}
            </span>
          </div>
          
          <button @click="updateCount(item.id, 1)" 
                  class="w-10 h-10 md:w-8 md:h-8 flex items-center justify-center hover:bg-gray-50 md:hover:bg-white rounded-lg transition-all active:scale-90 text-[#2C3E50]">
            <component :is="getIcon('Plus')" :size="14" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tabular-nums { font-variant-numeric: tabular-nums; }
</style>