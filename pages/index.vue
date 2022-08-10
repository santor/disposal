<template>
  <!-- TODO move cols to the layout -->
  <!--Left Col-->
  <div
    class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden"
  >
    <h1
      class="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1"
    >
      Waste Collection Zürich
    </h1>
    <p
      class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle"
    >
      Get the waste disposal schedule for your area.
    </p>

    <p
      class="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in"
    >
      Choose your ZIP code
    </p>
    <div
      class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in"
    >
      <ZipSelect />
    </div>
  </div>

  <!--Right Col-->
  <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
    hello card collection list
  </div>
</template>

<script setup>
  const counter = ref(0);
</script>
