<template>
  <div class="bg-neutral-100 p-6 rounded-lg shadow-lg mb-6 flex flex-row">
    <font-awesome-icon
      class="bg-indigo-400 p-6 rounded-full mr-5 text-4xl text-white"
      icon="fa-user-secret"
    />
    <div class="info-wrapper">
      <h2 class="text-2xl font-bold mb-2 text-gray-600">{{ title }}</h2>
      <p class="text-gray-700">{{ type }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';
  import { WasteType } from '@/pages/index.vue';

  const props = defineProps({
    type: {
      type: String as PropType<WasteType>,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  });

  //just because I like this date format more
  const title = props.date.toLocaleDateString('de-DE');
</script>
