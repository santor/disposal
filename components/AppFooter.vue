<template>
  <footer class="w-full pt-16 pb-6 text-sm text-center md:text-left">
    <a class="text-gray-500 no-underline hover:no-underline" href="#">
      {{ text ?? '' }} &copy; {{ new Date().getFullYear() }}
    </a>
  </footer>
</template>

<script setup>
  const props = defineProps({
    text: String,
  });
</script>
