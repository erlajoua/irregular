<script setup lang="ts">
	import CustomInput from './CustomInput.vue';
	import Words from './Words.vue';
	import { ref } from 'vue';
	import verbs_fr from '../assets/verbs_fr.json'

	interface Input {
		selected: boolean,
		disabled: boolean,
		value: string | undefined
	}

	interface Combinaison {
	[base: string]: {
		translate: string;
		past_simple: string;
		past_participle: string;
	}
}

	let currentVerb = ref<string>('');

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
		currentVerb.value = simulateEvent();
	}

	const simulateEvent = () => {
		const verbs = Object.keys(verbs_fr);
		let verb = verbs[Math.floor(Math.random() * verbs.length)]
		while (verb === currentVerb.value)
			verb = verbs[Math.floor(Math.random() * verbs.length)]
		return verb;
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
		:verb="currentVerb"
	/>
	<button @click="simulateEvent">simulate event</button>
</template>