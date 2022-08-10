<template>
  <!-- wrap the elements, because the transition needs a single child -->
  <div class="w-full flex flex-wrap flex-col md:flex-row items-start">
    <!-- TODO move cols to the layout -->
    <!--Left Col-->
    <div
      class="flex flex-col w-full xl:w-2/5 justify-start lg:items-start overflow-y-hidden"
    >
      <h1
        class="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left"
      >
        Waste Collection Zürich
      </h1>
      <p
        class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left"
      >
        Get the waste disposal schedule for your area.
      </p>

      <p class="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left">
        Choose your ZIP code
      </p>
      <div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0">
        <ZipSelect
          @zipChange="onZipSelectionChange"
          :selectOptions="zipOptions"
        />
      </div>
    </div>

    <!--Right Col-->
    <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
      <div v-if="disposalItems.length" class="w-full">
        <DisposalInfoCard
          v-for="waste in disposalItems"
          :waste-type="waste.type"
          :date="waste.date"
        />
      </div>
      <!-- TODO spinner  when loading -->
      <div v-else-if="loading">Loading...</div>
    </div>
  </div>
</template>

<script lang="ts">
  export enum WasteType {
    Waste = 'waste',
    Textile = 'textile',
    Special = 'special',
    Paper = 'paper',
    Organic = 'organic',
    Metal = 'metal',
    Etram = 'etram',
    CargoTram = 'cargotram',
    Cardboard = 'cardboard',
    BulkyGoods = 'bulky_goods',
    ChippingService = 'chipping_service',
    Incombustibles = 'incombustibles',
  }
</script>

<script setup lang="ts">
  interface WasteResponseItem {
    date: string;
    zip: number;
    area: string;
    region: string;
    type: WasteType;
  }

  interface ApiResponse {
    _metadata: {
      total_Count: number;
    };
    result: WasteResponseItem[];
  }

  const currentZip = ref(0);
  const disposalItems = ref<{ date: Date; type: WasteType }[]>([]);
  const loading = ref(false);

  const zipOptions = [
    0, 8001, 8002, 8003, 8004, 8005, 8006, 8008, 8032, 8037, 8038, 8041, 8044,
    8045, 8046, 8047, 8048, 8049, 8050, 8051, 8052, 8053, 8055, 8057, 8064,
  ];

  function onZipSelectionChange(zip: number) {
    if (zip && currentZip.value !== zip) {
      currentZip.value = zip;
    }
  }

  watch(currentZip, () => {
    fetchSchedule();
  });

  function fetchSchedule() {
    loading.value = true;

    const dateString = useDateToQueryDate();
    console.log('fetching with ziip', currentZip.value);
    const query = `https://openerz.metaodi.ch/api/calendar.json?zip=${currentZip.value}&start=${dateString}&sort=date&offset=0&limit=10`;
    // hack to overcome CORS problems
    // send request through corsproxy.io, to be able to use the OpenERZ API
    const fetch = useFetch<ApiResponse>(`https://corsproxy.io/?${query}`);

    fetch
      .then((response) => {
        const result = response.data.value.result;
        if (result) {
          disposalItems.value = result.map((item) => {
            return {
              date: new Date(item.date),
              type: item.type,
            };
          });
        }
      })
      .catch((rejected) => {
        console.log(rejected);
      })
      .finally(() => {
        loading.value = false;
      });
  }
</script>
