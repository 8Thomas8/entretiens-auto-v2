<template>
  <div class="min-h-screen flex flex-col">
    <LpHeader/>
    <main class="grow">
      <div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <slot/>
      </div>
    </main>
    <LpFooter/>
  </div>
</template>