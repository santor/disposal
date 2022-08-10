<template>
  <!-- wrap the elements, because the transition needs a single child -->
  <div class="w-full flex flex-wrap flex-col md:flex-row items-center">
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
        <ZipSelect
          @zipChange="onZipSelectionChange"
          :selectOptions="zipOptions"
        />
      </div>
    </div>

    <!--Right Col-->
    <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
      <div v-if="disposalItems.length" class="w-full">not empty</div>
      empty
    </div>
  </div>
</template>

<script setup lang="ts">
  const currentZip = ref(0);
  const disposalItems = ref([]);
  const zipOptions = [
    0, 8001, 8002, 8003, 8004, 8005, 8006, 8008, 8032, 8037, 8038, 8042, 8044,
    8045, 8046, 8047, 8048, 8049, 8050, 8051, 8052, 8053, 8055, 8057, 8064,
  ];

  function onZipSelectionChange(zip: number) {
    if (zip && currentZip.value !== zip) {
      currentZip.value = zip;
    }
  }

  watch(currentZip, () => {
    // get todays date
    const dateString = useDateToQueryDate();
    const query = `https://openerz.metaodi.ch/api/calendar.json?zip=${currentZip.value}&start=${dateString}&sort=date&offset=0&limit=0`;
    //CORS hack
    const items = useFetch(`https://cors-anywhere.herokuapp.com/${query}`);
  });

  onMounted(() => {
    // hack to overcome CORS problems
    // enable CORS anywhere, to be able to use the OpenERZ API
    // taken from https://github.com/Rob--W/cors-anywhere/#client
    (function () {
      var cors_api_host = 'cors-anywhere.herokuapp.com';
      var cors_api_url = 'https://' + cors_api_host + '/';
      var slice = [].slice;
      var origin = location.protocol + '//' + location.host;
      var open = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function () {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (
          targetOrigin &&
          targetOrigin[0].toLowerCase() !== origin &&
          targetOrigin[1] !== cors_api_host
        ) {
          //@ts-ignore
          args[1] = cors_api_url + args[1];
        }
        //@ts-ignore
        return open.apply(this, args);
      };
    })();
  });
</script>
