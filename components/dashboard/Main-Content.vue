<template>
  <div class="flex flex-col gap-4 sm:gap-6 lg:gap-8 min-w-0 min-h-0 h-full lg:overflow-auto">
    <!-- PUBG Title -->
    <h1 class="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-2 mt-2 md:mt-6">PUBG: BATTLEGROUNDS</h1>
    <!-- Stats Cards -->
    <StatsCards :game-id="gameId" />
    <!-- Performance Chart -->
    <div class="w-full max-w-full">
      <PerformanceChart :game-id="gameId" />
    </div>
  </div>
</template>

<script setup>
import StatsCards from '~/components/dashboard/Stats-Cards.vue'
import PerformanceChart from '~/components/dashboard/Performance-Chart.vue'

const props = defineProps({
  gameId: {
    type: [String, Number],
    required: true
  }
})
const gameId = props.gameId
</script> 