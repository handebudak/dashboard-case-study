<template>
  <section class="w-full h-auto bg-white rounded-2xl shadow flex flex-col p-3 sm:p-6 lg:p-16 xl:p-8 2xl:p-16 gap-2 sm:gap-4 lg:gap-6 xl:gap-3 2xl:gap-6">
    <!-- Header Section -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 sm:gap-4 xl:gap-2 2xl:gap-4">
      <span class="text-base sm:text-lg md:text-xl xl:text-lg 2xl:text-2xl font-semibold text-gray-900">Performance</span>
      <!-- Date Range Selector -->
      <div class="flex items-center gap-1 sm:gap-2 xl:gap-1 2xl:gap-2 bg-gray-100 rounded px-2 sm:px-3 xl:px-2 2xl:px-4 py-1">
        <span class="text-xs xl:text-xs 2xl:text-sm text-gray-500">01 - 15 Jun</span>
        <img src="/Group-475.svg" alt="Arrow Icon" class="w-4 h-4 sm:w-5 sm:h-5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" />
      </div>
    </div>
    <!-- Chart Section -->
    <div class="flex justify-center w-full max-w-full xl:max-w-[600px] xl:mx-auto overflow-x-auto h-[120px] sm:h-[180px] md:h-[245px] xl:h-[180px] 2xl:h-[260px] 2xl:max-w-[750px] mt-4 sm:mt-8 xl:mt-4 2xl:mt-8">
      <canvas ref="chartRef" class="w-full h-full" width="400" height="120"></canvas>
    </div>
    <!-- Description Section -->
    <div class="mt-8 sm:mt-12 lg:mt-20 xl:mt-8 2xl:mt-20 w-full max-w-full px-2 break-words">
      <span class="block text-sm sm:text-base md:text-lg xl:text-base 2xl:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 xl:mb-1 2xl:mb-2">Description</span>
      <div class="bg-gray-100 rounded-xl p-3 sm:p-6 xl:p-4 2xl:p-8 text-gray-600 text-xs sm:text-sm md:text-base xl:text-sm 2xl:text-base break-words mt-4 sm:mt-8 xl:mt-4 2xl:mt-8 w-full max-w-full">
        PUBG: BATTLEGROUNDS, the high-stakes winner-take-all shooter that started the Battle Royale craze, is free-to-play! Drop into diverse maps, loot unique weapons and supplies, and survive in an ever-shrinking zone where every turn could be your last. PUBG: BATTLEGROUNDS, the high-stakes winner-take-all shooter that started the Battle Royale craze, is free-to-play! Drop i diverse maps, loot unique weapons and supplies, and survive in an ever-shrinking zone where every turn could be your
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto'
import { getPerformanceData } from '@/services/api/performanceApi'

const props = defineProps({
  gameId: {
    type: [String, Number],
    required: true
  }
})

const chartRef = ref(null)
const chartInstance = ref(null)
const performanceData = ref(null)

const renderChart = () => {
  if (!chartRef.value || !performanceData.value) return
  if (chartInstance.value) chartInstance.value.destroy()
  const ctx = chartRef.value.getContext('2d')
  chartInstance.value = new Chart(ctx, {
    type: 'line',
    data: {
      labels: performanceData.value.dates,
      datasets: [
        {
          label: 'Watch Time',
          data: performanceData.value.watchTime,
          borderColor: '#F68D41',
          backgroundColor: 'rgba(246, 141, 65, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 0,
        },
        {
          label: 'Engagement',
          data: performanceData.value.engagement,
          borderColor: '#008DE4',
          backgroundColor: 'rgba(0, 141, 228, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#999', font: { family: 'Poppins', size: 12 } },
        },
        y: {
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { color: '#999', font: { family: 'Poppins', size: 12 } },
          min: 0,
        },
      },
    },
  })
}

const fetchPerformance = async () => {
  performanceData.value = await getPerformanceData(props.gameId)
  renderChart()
}

onMounted(fetchPerformance)
watch(() => props.gameId, fetchPerformance)
</script> 