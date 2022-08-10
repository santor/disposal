<template>
  <div class="mb-3 xl:w-96">
    <select
      class="form-select form-select-lg mb-3 appearance-none block w-28 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      aria-label=".form-select-lg zip-code"
      @change="onSelectChange"
    >
      <option
        v-for="(option, index) in zipOptions"
        :key="index"
        :selected="selected === option"
        :disabled="option === 0"
        :hidden="option === 0"
      >
        {{ option ? option : '80xx' }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits<{
    (event: 'zipChange', option: number): void;
  }>();
  const zipOptions = [
    0, 8001, 8002, 8003, 8004, 8005, 8006, 8008, 8032, 8037, 8038, 8042, 8044,
    8045, 8046, 8047, 8048, 8049, 8050, 8051, 8052, 8053, 8055, 8057, 8064,
  ];
  const selected = ref(0);

  function onSelectChange(event: Event) {
    const target = event.target as HTMLOptionElement;
    if (target && 'value' in target) {
      const selectedOption = parseInt(target.value);
      selected.value = selectedOption;
      emit('zipChange', selectedOption);
      console.log(selectedOption);
    }
  }
</script>
