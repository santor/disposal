<template>
  <div class="mb-3 xl:w-96">
    <select
      class="form-select form-select-lg mb-3 appearance-none block w-28 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      aria-label=".form-select-lg zip-code"
      @change="onSelectChange"
    >
      <option
        v-for="(option, index) in selectOptions"
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
  const props = defineProps({
    selectOptions: {type:Array<number>, required: true, default:[]}
  })

    const emit = defineEmits<{
      (event: 'zipChange', option: number): void;
    }>();

    const selected = ref(0);

    function onSelectChange(event: Event) {
      const target = event.target as HTMLOptionElement;
      if (target && 'value' in target) {
        const selectedOption = parseInt(target.value);
        selected.value = selectedOption;
        emit('zipChange', selectedOption);
      }
    }
</script>
