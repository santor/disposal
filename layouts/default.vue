<template>
  <div
    class="h-screen bg-right bg-cover flex flex-col"
    style="background-image: url('/public/img/bg.svg')"
  >
    <header class="w-full container mx-auto p-6">
      <a
        class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
        href="#"
      >
        <AppLogo :title="appName" />
      </a>

      <div class="flex w-1/2 justify-end content-center"></div>
    </header>

    <!--Main-->
    <main
      class="container pt-12 pb-24 px-6 mx-auto flex-grow flex flex-wrap flex-col md:flex-row items-center"
    >
      <slot />
    </main>
    <AppFooter class="container px-6 mx-auto" :text="appName" />
  </div>
</template>

<script setup>
  //TODO get it from .env or the package.json
  const appName = 'Waste Collection';
</script>

<style></style>
