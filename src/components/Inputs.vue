<script setup lang="ts">
	import CustomInput from './CustomInput.vue';
	import { ref, computed } from 'vue';

	interface Input {
		isSelected: boolean,
		isDisabled: boolean,
		value: string | null
	}

	const inputs = ref<Input[]>(Array.from({ length: 4 }, () => ({
		isSelected: false,
		isDisabled: false,
		value: null
	})));

	const setValues = () => {
		const fakeFetch = ['Manger', 'eat', 'ate', 'eaten'];
		inputs.value.forEach((input, index) => {
			if (input.isDisabled) {
				input.value = fakeFetch[index];
			}
		})
	}

	const init = () => {
		inputs.value[0].isDisabled = true;
		setValues();
	}

	init();
</script>

<template>
	<CustomInput v-for="({isSelected, isDisabled, value}, index) in inputs" :key="index"
		:isSelected="isSelected"
		:isDisabled="isDisabled"
		:value="value"
	/>
</template>