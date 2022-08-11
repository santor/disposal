<template>
  <div class="bg-neutral-100 p-6 rounded-lg shadow-lg mb-6 flex flex-row">
    <div
      class="bg-indigo-400 rounded-full w-16 h-16 mr-5 flex justify-center items-center"
    >
      <font-awesome-icon class="text-2xl text-white w-8 h-8" :icon="icon" />
    </div>
    <div class="info-wrapper">
      <h2 class="text-2xl font-bold mt-1 text-gray-600">
        {{ title }}
      </h2>
      <p class="text-gray-700">{{ type }}</p>
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
        return prependFa('people-carry-box');
      case WasteType.Textile:
        return prependFa('rug');
      case WasteType.Special:
        return prependFa('sack-xmark');
      case WasteType.Paper:
        return prependFa('newspaper');
      case WasteType.Organic:
        return prependFa('leaf');
      case WasteType.Metal:
        return prependFa('cubes-stacked');
      case WasteType.Etram:
        return prependFa('train-tram');
      case WasteType.CargoTram:
        return prependFa('train');
      case WasteType.Cardboard:
        return prependFa('box-open');
      case WasteType.ChippingService:
        return prependFa('tree');
      case WasteType.Incombustibles:
        return prependFa('battery-quarter');
      default:
        return prependFa('trash-alt');
    }
  });

  function prependFa(text: string) {
    return `fa-${text}`;
  }

  const type = computed(() => {
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
