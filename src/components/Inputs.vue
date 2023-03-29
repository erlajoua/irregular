<script setup lang="ts">
	import CustomInput from './CustomInput.vue';
	import Score from './Score.vue'
	import Words from './Words.vue';
	import { ref } from 'vue';
	import verbs_fr from '../assets/verbs_fr.json'
	import { modes } from '../shared/const'
	import { useI18n } from 'vue-i18n';
	import { getTopScore, updateTopScore } from '../shared/utils'

	import type { Combinaison, SubCombinaison, mode } from '../shared/interfaces'

	interface Input {
		selected: boolean,
		disabled: boolean,
		value: string | undefined
	}

	enum Modes {
		Translate,
		Base,
		PastSimple,
		PastParticple
	}

	const props = defineProps<{inputs: boolean[]}>()

	const { t } = useI18n();

	const currentVerb = ref<string>('');
	const score = ref(0);
	const mode = ref<mode>('base');

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
			if (index === 0)
				input.value = currentVerb.value;
			else
				input.value = combinaison[Object.keys(combinaison)[index - 1] as keyof SubCombinaison];
		})
		let tmp;
		tmp = inputs.value[0].value;
		inputs.value[0].value = inputs.value[1].value;
		inputs.value[1].value = tmp;

		inputs.value.forEach(input => {
			if (!input.disabled)
				input.value = '';
		})
	}

	const setSelected = () => {
		let input = inputs.value.find(input => input.disabled === false && input.value === '');
		if (input)
			input.selected = true;
	}

	const getVerbCombinaison = (verb: string) => {
		return (verbs_fr as Combinaison)[verb];
	}

	const getMode = () => {
		const index = inputs.value.findIndex(input => input.selected === true && input.value === '');

		if (index === Modes.Base)
			mode.value = 'base';
		else if (index === Modes.Translate)
			mode.value = 'translate';
		else if (index === Modes.PastSimple)
			mode.value = 'past_simple';
		else	
			mode.value = 'past_participle'
	}

	const init = () => {
		setDisabled();
		currentVerb.value = getNewVerb();
		setValues();
		setSelected();
		getMode();
	}

	const getNewVerb = () => {
		const verbs = Object.keys(verbs_fr);
		let verb = verbs[Math.floor(Math.random() * verbs.length)]
		while (verb === currentVerb.value)
			verb = verbs[Math.floor(Math.random() * verbs.length)]
		return verb;
	}

	

	const choice = (word: string) => {
		if ((mode.value === 'base' && currentVerb.value === word) || getVerbCombinaison(currentVerb.value)[mode.value as keyof SubCombinaison] === word) {
			let input = inputs.value.find(input => input.selected === true && input.value === '');
			if (input) {
				input.value = word;
				setSelected();
				getMode();
			}
		}
		if (inputs.value.every(input => input.value !== '')) {
			inputs.value.forEach(input => {
				input.selected = false;
			})
			currentVerb.value = getNewVerb();
			setValues();
			setSelected();
			getMode();
			score.value++;
			if (score.value > getTopScore()) {
				updateTopScore(score.value);
			}
		}
	}

	init();
</script>

<template>
	<Score :score="score" />
	<CustomInput v-for="(input, index) in inputs" :key="index"
		:selected="input.selected"
		:disabled="input.disabled"
		:value="input.value"
		:label="$t(`modes.${modes[index]}`)"
	/>
	<Words
		:mode="mode"
		:verb="currentVerb"
		@choice="choice($event)"
	/>
</template>