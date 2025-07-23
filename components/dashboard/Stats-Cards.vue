<template>
  <div class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 xl:gap-2 xxl:gap-6">
      <!-- Price Card -->
      <div class="flex flex-1 items-center bg-white rounded-2xl shadow p-2 sm:p-4 xl:p-2 xxl:p-6 gap-2 sm:gap-4 xl:gap-2 xxl:gap-6">
        <div class="flex items-center justify-center rounded-xl bg-blue-100 w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-16 xl:h-16 xxl:w-24 xxl:h-24">
          <img src="/solar_tag-price-bold.svg" alt="Price Icon" class="w-6 h-6 sm:w-8 sm:h-8 xl:w-6 xl:h-6 xxl:w-10 xxl:h-10" />
        </div>
        <div class="flex flex-col justify-center gap-2 sm:gap-8 xl:gap-2 xxl:gap-6">
          <span class="text-lg sm:text-2xl md:text-3xl xl:text-xl xxl:text-3xl font-bold text-gray-900">{{ gameStats ? `$${gameStats.price}` : '--' }}</span>
          <span class="text-xs sm:text-sm xl:text-xs xxl:text-lg font-bold text-gray-500 mt-1 sm:mt-2 xl:mt-1 xxl:mt-2">Price</span>
        </div>
      </div>
      <!-- Downloads Card -->
      <div class="flex flex-1 items-center bg-white rounded-2xl shadow p-2 sm:p-4 xl:p-2 xxl:p-6 gap-2 sm:gap-4 xl:gap-2 xxl:gap-6">
        <div class="flex items-center justify-center rounded-xl bg-pink-100 w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-16 xl:h-16 xxl:w-24 xxl:h-24">
          <img src="/mingcute_game-1-fill.svg" alt="Downloads Icon" class="w-7 h-7 sm:w-10 sm:h-10 xl:w-7 xl:h-7 xxl:w-10 xxl:h-10" />
        </div>
        <div class="flex flex-col justify-center gap-2 sm:gap-10 xl:gap-2 xxl:gap-6">
          <span class="text-base sm:text-xl md:text-2xl xl:text-lg xxl:text-2xl font-bold text-gray-900">{{ gameStats ? formatNumber(gameStats.downloads) : '--' }}</span>
          <span class="text-xs sm:text-sm xl:text-xs xxl:text-lg font-bold text-gray-500 mt-1 sm:mt-2 xl:mt-1 xxl:mt-2">Downloads</span>
        </div>
      </div>
      <!-- Revenue Card -->
      <div class="flex flex-1 items-center bg-white rounded-2xl shadow p-2 sm:p-4 xl:p-2 xxl:p-6 gap-2 sm:gap-4 xl:gap-2 xxl:gap-6">
        <div class="flex items-center justify-center rounded-xl bg-red-100 w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-16 xl:h-16 xxl:w-24 xxl:h-24">
          <img src="/healthicons_money-bag.svg" alt="Revenue Icon" class="w-7 h-7 sm:w-10 sm:h-10 xl:w-7 xl:h-7 xxl:w-10 xxl:h-10" />
        </div>
        <div class="flex flex-col justify-center gap-2 sm:gap-10 xl:gap-2 xxl:gap-6">
          <span class="text-base sm:text-xl md:text-2xl xl:text-lg xxl:text-2xl font-bold text-gray-900">{{ gameStats ? formatNumber(gameStats.revenue) : '--' }}</span>
          <span class="text-xs sm:text-sm xl:text-xs xxl:text-lg font-bold text-gray-500 mt-1 sm:mt-2 xl:mt-1 xxl:mt-2">Revenue</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { getGameOverview } from '@/services/api/gameApi'

// Sayı kısaltma fonksiyonu
function formatNumber(num) {
  if (num === null || num === undefined) return '--';
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'm';
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
  return num.toLocaleString();
}

const props = defineProps({
  gameId: {
    type: [String, Number],
    required: true
  }
})

const gameStats = ref(null)

const fetchStats = async () => {
  gameStats.value = await getGameOverview(props.gameId)
}

onMounted(fetchStats)
watch(() => props.gameId, fetchStats)
</script> 