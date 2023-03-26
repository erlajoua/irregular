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
		[base: string]: SubCombinaison
	}

	interface SubCombinaison {
		translate: string;
		past_simple: string;
		past_participle: string;
	}

	const props = defineProps<{inputs: boolean[]}>()

	let currentVerb = ref<string>('');

	const inputs = ref<Input[]>(Array.from({ length: 4 }, () => ({
		selected: false,
		disabled: false,
		value: undefined
	})));

	const setDisabled = () => {
		inputs.value.forEach((input: Input, index: number) => {
			input.disabled = props.inputs[index];
		})
	}
	
	const setValues = () => {
		const combinaison = getVerbCombinaison(currentVerb.value);
		inputs.value.forEach((input, index) => {
			if (input.disabled) {
				if (index === 0)
					input.value = currentVerb.value;
				else
					input.value = combinaison[Object.keys(combinaison)[index - 1] as keyof SubCombinaison];
			}
		})
		let tmp;
		tmp = inputs.value[0].value;
		inputs.value[0].value = inputs.value[1].value;
		inputs.value[1].value = tmp;
	}

	const setSelected = () => {
		let input = inputs.value.find(input => input.disabled === false);
		if (input)
			input.selected = true;
	}

	const getVerbCombinaison = (verb: string) => {
		return (verbs_fr as Combinaison)[verb];
	}

	const getMode = () => {
		const index = inputs.value.findIndex(input => input.disabled === false);

		if (index === 0)
			return 'base';
		if (index === 1)
			return 'translate';
		if (index === 2)
			return 'past_simple';			
		return 'past_participle'
	}

	const init = () => {
		inputs.value[0].disabled = true;
		setDisabled();
		setSelected();
		currentVerb.value = getNewVerb();
		setValues();
	}

	const getNewVerb = () => {
		const verbs = Object.keys(verbs_fr);
		let verb = verbs[Math.floor(Math.random() * verbs.length)]
		while (verb === currentVerb.value)
			verb = verbs[Math.floor(Math.random() * verbs.length)]
		return verb;
	}

	const simulateEvent = () => {
		currentVerb.value = getNewVerb();
		setSelected();
		setValues();
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
		:mode="getMode()"
		:verb="currentVerb"
	/>
	<button @click="simulateEvent">simulate event win condition</button>
</template>