<template>
  <div class="bg-neutral-100 p-6 rounded-lg shadow-lg mb-6">
    <h2 class="text-2xl font-bold mb-2 text-gray-800">{{ title }}</h2>
    <p class="text-gray-700">{{ type }}</p>
    <font-awesome-icon icon="fa-solid fa-user-secret" />
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
