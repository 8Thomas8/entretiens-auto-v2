<template>
  <div>
    <button type="button"
            class="flex rounded-full bg-white text-sm border overflow-hidden focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            id="user-menu-button" aria-expanded="false" aria-haspopup="true">
      <span class="sr-only">Ouvrir le menu utilisateur</span>
      <span class="w-8 h-8 bg-indigo-600/20 flex justify-center items-center transition-colors hover:bg-indigo-600/30">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
              </svg>
      </span>
    </button>
  </div>
</template>