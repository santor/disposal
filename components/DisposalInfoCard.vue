<template>
  <div class="bg-neutral-100 p-6 rounded-lg shadow-lg mb-6 flex flex-row">
    <font-awesome-icon
      class="bg-indigo-400 p-6 rounded-full mr-5 text-4xl text-white"
      :icon="icon"
    />
    <div class="info-wrapper">
      <h2 class="text-2xl font-bold mb-2 text-gray-600">{{ title }}</h2>
      <p class="text-gray-700">{{ name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';
  import { WasteType } from '@/pages/index.vue';

  const props = defineProps({
    wasteType: {
      type: String as PropType<WasteType>,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  });

  const icon = computed(() => {
    switch (props.wasteType) {
      case WasteType.BulkyGoods:
        return 'fa-people-carry-box';
      case WasteType.Textile:
        return 'fa-rug';
      case WasteType.Special:
        return 'fa-sack-xmark';
      case WasteType.Paper:
        return 'fa-newspaper';
      case WasteType.Organic:
        return 'fa-leaf';
      case WasteType.Metal:
        return 'fa-cubes-stacked';
      case WasteType.Etram:
        return 'fa-train-tram';
      case WasteType.CargoTram:
        return 'fa-train';
      case WasteType.Cardboard:
        return 'fa-box-open';
      case WasteType.ChippingService:
        return 'fa-tree';
      case WasteType.Incombustibles:
        return 'fa-battery-quarter';
      default:
        return 'fa-trash-alt';
    }
  });

  const name = computed(() => {
    switch (props.wasteType) {
      case WasteType.BulkyGoods:
        return 'Bulky goods';
      case WasteType.Textile:
        return 'Textile';
      case WasteType.Special:
        return 'Special';
      case WasteType.Paper:
        return 'Paper';
      case WasteType.Organic:
        return 'Organic';
      case WasteType.Metal:
        return 'Metal';
      case WasteType.Etram:
        return 'Etram';
      case WasteType.CargoTram:
        return 'CargoTram';
      case WasteType.Cardboard:
        return 'Cardboard';
      case WasteType.ChippingService:
        return 'Chipping Service';
      case WasteType.Incombustibles:
        return 'Incombustibles';
      default:
        return 'Waste';
    }
  });

  //just because I like this date format more
  const title = props.date.toLocaleDateString('de-DE');
</script>
