<template>
  <aside class="hidden md:flex w-44 lg:w-60 min-h-0 h-full bg-white rounded-2xl flex-col justify-between shadow-md">
    <!-- Top Section: Logo and Navigation -->
    <div class="flex flex-col items-start px-2 pt-4 lg:px-4 lg:pt-8">
      <!-- Logo -->
      <img
        src="/dash-logo.png"
        alt="Dash Logo"
        class="w-20 h-6 lg:w-24 lg:h-7 object-contain mb-4 lg:mb-8 self-center"
        draggable="false"
      />
      <!-- Overview Section -->
      <span class="block mb-1 lg:mb-2 ml-2 lg:ml-4 text-xs text-gray-400 tracking-wide w-full">
        OVERVIEW
      </span>
      <!-- Navigation Menu -->
      <nav class="w-full flex flex-col gap-1 lg:gap-2">
        <!-- Dashboard Item -->
        <button class="w-full flex items-center gap-2 lg:gap-3 px-2 lg:px-3 py-2 rounded-lg bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition">
          <img src="/material-symbols_dashboard-rounded.svg" alt="Dashboard Icon" class="w-5 h-5" />
          <span class="text-sm">Dashboard</span>
        </button>
        <!-- Inbox Item -->
        <button class="w-full flex items-center gap-2 lg:gap-3 px-2 lg:px-3 py-2 rounded-lg text-gray-500 font-medium hover:bg-gray-100 transition">
          <img src="/solar_inbox-bold.svg" alt="Inbox Icon" class="w-5 h-5" />
          <span class="text-sm">Inbox</span>
        </button>
      </nav>
    </div>
    <!-- Bottom Section: Settings and Logout -->
    <div class="flex flex-col items-start px-2 pb-4 gap-1 lg:px-4 lg:pb-6 lg:gap-2">
      <span class="block mb-1 ml-2 lg:ml-4 text-xs text-gray-400 tracking-wide">
        SETTINGS
      </span>
      <nav class="w-full flex flex-col gap-1 lg:gap-2">
        <!-- Settings Item -->
        <button class="w-full flex items-center gap-2 lg:gap-3 px-2 lg:px-3 py-2 rounded-lg text-gray-500 font-medium hover:bg-gray-100 transition">
          <img src="/material-symbols_dashboard-rounded-1.svg" alt="Settings Icon" class="w-5 h-5" />
          <span class="text-sm">Settings</span>
        </button>
        <!-- Logout Item -->
        <button class="w-full flex items-center gap-2 lg:gap-3 px-2 lg:px-3 py-2 rounded-lg text-red-500 font-medium hover:bg-red-50 transition">
          <img src="/solar_logout-2-bold.svg" alt="Logout Icon" class="w-5 h-5" />
          <span class="text-sm">Logout</span>
        </button>
      </nav>
    </div>
  </aside>
</template>

