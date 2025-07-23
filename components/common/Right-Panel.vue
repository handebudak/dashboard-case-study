<template>
  <aside class="bg-white rounded-2xl min-h-0 h-full lg:overflow-auto shadow-lg flex flex-col gap-1 sm:gap-2 lg:gap-2 xl:gap-4 p-2 sm:p-4 lg:p-6 xl:p-8">
    <RightPanelDescription />
    <RightPanelStreamPerformance />
    <RightPanelStreamStats />
  </aside>
</template>

<script setup>
import RightPanelDescription from './Right-Panel/Right-Panel-Description.vue'
import RightPanelStreamPerformance from './Right-Panel/Right-Panel-Stream-Performance.vue'
import RightPanelStreamStats from './Right-Panel/Right-Panel-Stream-Stats.vue'
</script> 