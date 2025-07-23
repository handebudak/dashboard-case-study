<template>
  <!-- Mobile/Tablet Header (below 1024px) -->
  <div class="w-full flex items-center justify-between px-2 pt-[env(safe-area-inset-top)] pb-2 bg-white/80 backdrop-blur-md lg:hidden sticky top-0 z-30">
    <!-- Hamburger Menu (left) -->
    <button @click="showSidebar = true" class="p-2 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
    </button>
    <!-- Right icons -->
    <div class="flex items-center gap-2 pr-1">
      <button @click="showSearch = true" class="bg-white rounded-xl flex items-center justify-center w-9 h-9 shadow">
        <img src="/ri_search-line.svg" alt="Search Icon" class="w-5 h-5" />
      </button>
      <button class="bg-white rounded-xl flex items-center justify-center w-9 h-9 shadow">
        <img src="/iconoir_bell-notification-solid.svg" alt="Bell Icon" class="w-5 h-5" />
      </button>
      <img src="/Rectangle-1959.svg" alt="Profile" class="w-9 h-9 rounded-xl object-cover" />
    </div>
  </div>

  <!-- Mobile Fullscreen Sidebar (Drawer) -->
  <transition name="sidebar-fade">
    <div v-if="showSidebar" class="fixed inset-0 z-50 flex flex-col lg:hidden bg-black/40 backdrop-blur-md">
      <!-- Close Button (top right) -->
      <button @click="showSidebar = false" class="absolute top-4 right-4 z-60 bg-white rounded-full p-2 shadow">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <!-- Menu Content -->
      <div class="flex-1 flex flex-col items-center justify-center gap-8 px-6">
        <!-- Profile -->
        <div class="flex flex-col items-center gap-3">
          <img src="/Rectangle-1959.svg" alt="Profile" class="w-20 h-20 rounded-2xl object-cover shadow" />
        </div>
        <!-- Menu -->
        <nav class="flex flex-col gap-4 w-full max-w-xs mt-6">
          <button class="flex items-center gap-4 px-5 py-4 rounded-xl bg-white/80 hover:bg-gray-100 transition text-lg font-medium shadow">
            <img src="/solar_inbox-bold.svg" alt="Inbox" class="w-6 h-6" />
            <span>Inbox</span>
          </button>
          <button class="flex items-center gap-4 px-5 py-4 rounded-xl bg-white/80 hover:bg-gray-100 transition text-lg font-medium shadow">
            <img src="/material-symbols_dashboard-rounded-1.svg" alt="Settings" class="w-6 h-6" />
            <span>Settings</span>
          </button>
          <button class="flex items-center gap-4 px-5 py-4 rounded-xl bg-white/80 hover:bg-red-50 transition text-lg font-medium shadow">
            <img src="/solar_logout-2-bold.svg" alt="Logout" class="w-6 h-6" />
            <span class="text-red-500">Logout</span>
          </button>
        </nav>
      </div>
      <!-- Close when clicking background -->
      <div class="absolute inset-0 -z-10" @click="showSidebar = false"></div>
    </div>
  </transition>

  <!-- Mobile Search Bar Open -->
  <transition name="fade">
    <div v-if="showSearch" class="fixed inset-0 z-40 bg-black/30 flex flex-col lg:hidden">
      <div class="w-full flex items-center px-3 pt-[calc(env(safe-area-inset-top)+0.5rem)] pb-2 bg-white/95 backdrop-blur-md">
        <input type="text" placeholder="Search..." class="flex-1 h-8 bg-transparent outline-none border-none text-sm text-gray-700 placeholder-gray-400 px-2" autofocus />
        <button @click="showSearch = false" class="ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <div class="flex-1" @click="showSearch = false"></div>
    </div>
  </transition>

  <!-- Desktop Header (only lg and above) -->
  <header class="w-full flex-col gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-4 xl:gap-2 xxl:gap-4 mb-4 lg:mb-6 xl:mb-4 xxl:mb-6 hidden lg:flex">
    <!-- Search Bar -->
    <div class="flex-1 max-w-full lg:max-w-xl bg-white rounded-xl flex items-center px-2 lg:px-4 xl:px-2 xxl:px-4 h-12 lg:h-14 xl:h-10 xxl:h-12 shadow mb-2 lg:mb-0">
      <img src="/ri_search-line.svg" alt="Search Icon" class="w-5 h-5 mr-1 lg:mr-2 xl:mr-1 xxl:mr-2" />
      <input
        type="text"
        placeholder="Search..."
        class="w-full h-full bg-transparent outline-none border-none text-sm lg:text-base xl:text-sm xxl:text-base text-gray-400 placeholder-gray-400 font-normal"
      />
    </div>
    <!-- User Actions -->
    <div class="flex items-center gap-2 lg:gap-4 xl:gap-2 xxl:gap-4 pr-2 lg:pr-4 xl:pr-2 xxl:pr-4">
      <!-- Mail Button -->
      <button class="bg-white rounded-xl flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 xl:w-10 xl:h-10 xxl:w-12 xxl:h-12 shadow">
        <img src="/iconoir_mail-solid.svg" alt="Mail Icon" class="w-5 h-5 xxl:w-6 xxl:h-6" />
      </button>
      <!-- Notification Button -->
      <button class="bg-white rounded-xl flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 xl:w-10 xl:h-10 xxl:w-12 xxl:h-12 shadow">
        <img src="/iconoir_bell-notification-solid.svg" alt="Bell Icon" class="w-5 h-5 xxl:w-6 xxl:h-6" />
      </button>
      <!-- Divider -->
      <div class="hidden lg:block w-px h-9 xxl:h-10 bg-gray-300 mx-2 xxl:mx-2 rounded opacity-50"></div>
      <!-- Profile Section -->
      <img src="/Rectangle-1959.svg" alt="Profile Container" class="w-10 h-10 lg:w-12 lg:h-12 xl:w-10 xl:h-10 xxl:w-12 xxl:h-12 rounded-xl" />
      <span class="hidden lg:inline text-lg xl:text-base xxl:text-xl font-medium text-gray-900 ml-2 xxl:ml-2">Russell</span>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const showSearch = ref(false)
const showSidebar = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.sidebar-fade-enter-active, .sidebar-fade-leave-active {
  transition: opacity 0.2s;
}
.sidebar-fade-enter-from, .sidebar-fade-leave-to {
  opacity: 0;
}
</style>

