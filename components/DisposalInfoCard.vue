<template>
  <div class="bg-neutral-100 p-6 rounded-lg shadow-lg mb-6 flex flex-row">
    <div class="bg-indigo-400 aspect-square p-6 rounded-full mr-5">
      <font-awesome-icon class="text-3xl text-white" :icon="icon" />
    </div>
    <div class="info-wrapper">
      <h2 class="text-2xl font-bold mb-2 text-gray-600">{{ title }}</h2>
      <p class="text-gray-700">{{ name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';
  import { DisposalSchedule, WasteType } from '@/domain/DisposalSchedule';

  const props = defineProps({
    disposalSchedule: {
      type: Object as PropType<DisposalSchedule>,
      required: true,
    },
  });

  const wasteType = props.disposalSchedule.type;

  const icon = computed(() => {
    switch (wasteType) {
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
    switch (wasteType) {
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
  const title = props.disposalSchedule.date.toLocaleDateString('de-DE');
</script>
