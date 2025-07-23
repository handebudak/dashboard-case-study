<script setup lang="ts">
import Sidebar from '@/components/common/Sidebar.vue'
import Header from '@/components/common/Header.vue'
import MainContent from '~/components/dashboard/Main-Content.vue'
import RightPanel from '~/components/common/Right-Panel.vue'
import '@/assets/css/ipad-pro.css'
</script>

<template>
  <div class="min-h-screen lg:h-screen bg-[#B9BFC6] flex flex-col lg:flex-row lg:justify-center lg:items-center px-2 py-2 sm:px-4 sm:py-4 lg:px-6 lg:py-6">
    <div class="w-full min-h-0 lg:h-full bg-[#F5F7FB] rounded-2xl shadow-lg grid grid-cols-1 lg:grid-cols-[auto_1fr] p-1 sm:p-2 md:p-4 lg:p-4 gap-2 sm:gap-4 lg:gap-8">
      <div class="hidden lg:flex min-h-0 lg:h-full">
        <Sidebar />
      </div>
      <div class="flex flex-col min-w-0 min-h-0 lg:h-full">
        <Header />
        <div class="grid grid-cols-1 xl:grid-cols-[4fr_2fr] gap-4 lg:gap-8 min-h-0 lg:h-0 lg:flex-1 lg:overflow-auto ipad-pro-vertical-grid">
          <MainContent :game-id="578080" class="ipad-pro-no-scroll" />
          <RightPanel :game-id="578080" class="ipad-pro-no-scroll" />
        </div>
      </div>
    </div>
  </div>
</template>



