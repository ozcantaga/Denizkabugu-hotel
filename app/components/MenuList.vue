<script setup lang="ts">
import * as LucideIcons from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const props = defineProps(['items']);
const { t } = useI18n();

const getIcon = (iconName: string) => (LucideIcons as any)[iconName] || LucideIcons.Utensils;
const currentHour = new Date().getHours();

/**
 * Özkan, kuralı burada sadece Ana Yemekler (main) anahtarı içeren
 * ürünler için çalışacak şekilde güncelledim.
 */
const getStatus = (item: any) => {
  // Eğer ürün ana yemek değilse her zaman açıktır
  if (!item.name.startsWith('main.')) return 'now';

  // Ana yemek ise 17:00 kontrolü başlar
  if (currentHour < 17) return 'now';

  // 17:00 sonrası: Sadece 'after_17' işaretli olanlar (Izgara/Burger) açık
  if (item.availability === 'after_17') return 'now';

  // Geri kalan ana yemekler (Makarnalar vb.) ön siparişe düşer
  return 'pre_order';
};

const formatPrice = (price: number) => new Intl.NumberFormat('tr-TR').format(price || 0);
const safeT = (key: string | undefined) => {
  if (!key) return '';
  return key.includes('.') ? t(key) : key;
};
</script>

<template>
  <div class="space-y-8">
    <div v-for="item in items" :key="item.id" 
         class="flex justify-between items-start gap-4 group border-b border-hotel-accent/10 pb-6 last:border-0 transition-all duration-500"
         :class="getStatus(item) === 'pre_order' ? 'opacity-40 select-none' : ''">
      
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2.5 mb-1.5">
          <component :is="getIcon(item.icon)" :size="17" class="text-hotel-accent shrink-0" />
          
          <h3 class="font-serif font-bold italic text-[17px] md:text-xl text-hotel-dark leading-snug tracking-tight">
            {{ safeT(item.name) }}
          </h3>
          
          <span v-if="item.tag" 
                :class="[
                  'font-serif italic text-[9px] px-2 py-0.5 rounded-sm uppercase tracking-[1px] border shrink-0',
                  item.tag === 'new' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
                  item.tag === 'popular' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                  'bg-hotel-dark/5 text-hotel-dark/60 border-hotel-dark/10'
                ]">
            {{ safeT(`tags.${item.tag}`) }}
          </span>
        </div>
        
        <p v-if="item.ingredients" class="font-serif italic text-[13px] text-gray-500/90 leading-relaxed pl-7 max-w-xl group-hover:text-hotel-dark transition-colors">
          {{ safeT(item.ingredients) }}
        </p>

        <div v-if="getStatus(item) === 'pre_order'" class="pl-7 mt-3">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 shadow-sm animate-pulse-fast">
            <component :is="getIcon('CalendarClock')" :size="14" class="text-rose-600" />
            
            <span class="text-[11px] uppercase tracking-[1.5px] font-bold">
               {{ safeT('ui.order_for_tomorrow') }}
            </span>
            
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
            </span>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-end shrink-0 pt-1 font-serif italic text-hotel-dark">
        <div v-if="item.bottlePrice" class="flex items-baseline gap-1 mb-0.5">
          <span class="text-[9px] text-hotel-accent font-bold uppercase tracking-tighter">{{ safeT('ui.bottle') }}</span>
          <span class="text-base font-semibold tabular-nums">{{ formatPrice(item.bottlePrice) }}</span>
          <span class="text-[10px] text-hotel-accent">{{ safeT('ui.currency') }}</span>
        </div>
        <div class="flex items-baseline gap-1">
          <span v-if="item.bottlePrice" class="text-[9px] text-hotel-accent font-bold uppercase tracking-tighter">{{ safeT('ui.glass') }}</span>
          <span class="text-base font-semibold tabular-nums">{{ formatPrice(item.price) }}</span>
          <span class="text-[10px] text-hotel-accent">{{ safeT('ui.currency') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tabular-nums { font-variant-numeric: tabular-nums; }

/* Dikkat çekici hızlı nabız animasyonu */
@keyframes pulse-fast {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.02); opacity: 0.95; }
}

.animate-pulse-fast {
  animation: pulse-fast 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>