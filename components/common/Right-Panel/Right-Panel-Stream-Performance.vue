<template>
  <section class="flex flex-col">
    <div class="flex items-center mb-2 sm:mb-4">
      <div class="w-[2px] h-5 bg-black/10 rounded"></div>
      <h3 class="text-xs sm:text-base md:text-[20px] font-poppins font-bold text-[#111] leading-[1] ml-1">Stream Performance</h3>
    </div>
    <div class="w-full max-w-full xl:max-w-[900px] 2xl:max-w-[1100px] bg-[#F5F7FB] rounded-[16px] p-1 sm:p-4 md:p-6 mb-3 sm:mb-6">
      <canvas ref="chartRef" class="w-full" style="height:180px; max-height:200px;" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'
import { getStreamData } from '@/services/api/streamApi'

const chartRef = ref<HTMLCanvasElement | null>(null)
const chartInstance = ref<any>(null)

const gameId = '578080' // mock id

const fetchAndRender = async () => {
  const data = await getStreamData(gameId)
  if (chartInstance.value) chartInstance.value.destroy()
  const ctx = chartRef.value!.getContext('2d')!
  chartInstance.value = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      datasets: [
        {
          label: 'Performance',
          data: [
            data.dailyStreamCounts.Monday,
            data.dailyStreamCounts.Tuesday,
            data.dailyStreamCounts.Wednesday,
            data.dailyStreamCounts.Thursday,
            data.dailyStreamCounts.Friday
          ],
          backgroundColor: '#008DE4',
          borderRadius: 4,
          borderSkipped: false,
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
          ticks: { color: '#777', font: { family: 'Poppins', size: 12 } },
        },
        y: {
          grid: { color: 'rgba(0,0,0,0.1)' },
          ticks: { color: '#777', font: { family: 'Poppins', size: 12 }, stepSize: 2 },
          min: 0,
        },
      },
    },
  })
}

onMounted(fetchAndRender)
</script> 