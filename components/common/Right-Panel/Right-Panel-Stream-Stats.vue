<template>
  <section class="flex flex-col min-w-0 min-h-0">
    <div class="flex items-center mb-1 sm:mb-2">
      <div class="w-0.5 h-5 bg-black/10 rounded"></div>
      <h3 class="text-xs sm:text-lg md:text-xl xl:text-base 2xl:text-xl xxl:text-base font-poppins font-bold text-[#111] leading-tight ml-1">Stream Stats</h3>
    </div>
    <div class="flex flex-row gap-2 sm:gap-4 xl:gap-2 2xl:gap-8 xxl:gap-2 w-full ipad-pro-stream-stats-row">
      <!-- Hours Watched Card -->
      <div class="flex-1 min-w-0 basis-0 bg-[#F5F7FB] rounded-xl p-1 md:p-4 xl:p-2 2xl:p-3 xxl:p-6 flex flex-col min-h-0 gap-3 md:gap-12 xl:gap-2 2xl:gap-3 xxl:gap-6">
        <div class="w-full mb-1 md:mb-4 flex justify-start">
          <span class="text-xs md:text-base xl:text-xs 2xl:text-base xxl:text-lg font-poppins font-bold text-black leading-tight">Hours Watched</span>
        </div>
        <div class="w-full mb-1 md:mb-6 flex justify-start items-center">
          <span class="text-lg md:text-2xl lg:text-4xl xl:text-xl 2xl:text-2xl xxl:text-3xl font-poppins font-bold text-black leading-tight">{{ hoursWatchedFormatted }}</span>
        </div>
        <div class="flex items-center gap-1 md:gap-2 2xl:gap-3 xxl:gap-4 mt-auto">
          <img :src="hoursWatchedDelta >= 0 ? '/Send-Letter.svg' : '/Send-Letter1.svg'" alt="Arrow Icon" class="w-5 h-5 md:w-8 md:h-8 xl:w-5 xl:h-5 2xl:w-8 2xl:h-8 xxl:w-10 xxl:h-10" />
          <span class="text-xs md:text-sm lg:text-base xl:text-xs 2xl:text-base xxl:text-base font-poppins font-bold">
            <span :class="hoursWatchedDelta >= 0 ? 'text-green-500' : 'text-red-500'">{{ hoursWatchedDeltaStr }}</span>
            <span class="text-black"> ({{ hoursWatchedDeltaPercent }}%)</span>
          </span>
        </div>
      </div>
      <!-- Average Viewers Card -->
      <div class="flex-1 basis-0 bg-[#F5F7FB] rounded-xl p-1 md:p-4 xl:p-2 2xl:p-3 xxl:p-6 flex flex-col min-w-0 min-h-0 gap-3 md:gap-12 xl:gap-2 2xl:gap-3 xxl:gap-6">
        <div class="w-full mb-1 md:mb-4 flex justify-start">
          <span class="text-xs md:text-base xl:text-xs 2xl:text-base xxl:text-lg font-poppins font-bold text-black leading-tight">Average Viewers</span>
        </div>
        <div class="w-full mb-1 md:mb-6 flex justify-start items-center">
          <span class="text-lg md:text-2xl lg:text-4xl xl:text-xl 2xl:text-2xl xxl:text-3xl font-poppins font-bold text-black leading-tight">{{ averageViewersFormatted }}</span>
        </div>
        <div class="flex items-center gap-1 md:gap-2 2xl:gap-3 xxl:gap-4 mt-auto">
          <img :src="averageViewersDelta >= 0 ? '/Send-Letter.svg' : '/Send-Letter1.svg'" alt="Arrow Icon" class="w-5 h-5 md:w-8 md:h-8 xl:w-5 xl:h-5 2xl:w-8 2xl:h-8 xxl:w-10 xxl:h-10" />
          <span class="text-xs md:text-sm lg:text-base xl:text-xs 2xl:text-base xxl:text-base font-poppins font-bold">
            <span :class="averageViewersDelta >= 0 ? 'text-green-500' : 'text-red-500'">{{ averageViewersDeltaStr }}</span>
            <span class="text-black"> ({{ averageViewersDeltaPercent }}%)</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { getStreamData } from '@/services/api/streamApi'

const gameId = '578080' // mock id
const streamData = ref<any>(null)

const formatNumber = (num: number): string => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
  return num.toString()
}

onMounted(async () => {
  streamData.value = await getStreamData(gameId)
})

const hoursWatchedFormatted = computed(() => streamData.value ? formatNumber(streamData.value.hoursWatched.value) : '0')
const hoursWatchedDelta = computed(() => streamData.value ? streamData.value.hoursWatched.delta : 0)
const hoursWatchedDeltaStr = computed(() => hoursWatchedDelta.value >= 0 ? `+${formatNumber(hoursWatchedDelta.value)}` : `-${formatNumber(Math.abs(hoursWatchedDelta.value))}`)
const hoursWatchedDeltaPercent = computed(() => streamData.value ? streamData.value.hoursWatched.deltaPercentage : 0)

const averageViewersFormatted = computed(() => streamData.value ? formatNumber(streamData.value.averageViewers.value) : '0')
const averageViewersDelta = computed(() => streamData.value ? streamData.value.averageViewers.delta : 0)
const averageViewersDeltaStr = computed(() => averageViewersDelta.value >= 0 ? `+${formatNumber(averageViewersDelta.value)}` : `-${formatNumber(Math.abs(averageViewersDelta.value))}`)
const averageViewersDeltaPercent = computed(() => streamData.value ? streamData.value.averageViewers.deltaPercentage : 0)
</script> 