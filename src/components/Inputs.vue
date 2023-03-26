<script setup lang="ts">
	import CustomInput from './CustomInput.vue';
	import Words from './Words.vue';
	import { ref, computed } from 'vue';

	interface Input {
		selected: boolean,
		disabled: boolean,
		value: string | undefined
	}

	const inputs = ref<Input[]>(Array.from({ length: 4 }, () => ({
		selected: false,
		disabled: false,
		value: undefined
	})));

	const setValues = () => {
		const fakeFetch = ['Manger', 'eat', 'ate', 'eaten'];
		inputs.value.forEach((input, index) => {
			if (input.disabled)
				input.value = fakeFetch[index];
		})
	}

	const setSelected = () => {
		let input = inputs.value.find(input => input.disabled === false);
		if (input)
			input.selected = true;
	}

	const init = () => {
		inputs.value[0].disabled = true;
		setValues();
		setSelected();
	}

	init();
</script>

<template>
	<CustomInput v-for="({selected, disabled, value}, index) in inputs" :key="index"
		:selected="selected"
		:disabled="disabled"
		:value="value"
	/>
	<Words
		mode="base"
		verb="be"
	/>
</template>