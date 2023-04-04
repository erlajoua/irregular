<script setup lang="ts">
import { ref, watch } from 'vue';
import verbs_fr from '../assets/verbs_fr.json';
import type { Combinaison, mode } from '../shared/interfaces'

const COUNT = 15;

const props = defineProps<{ mode: mode, verb: string }>();
const words = ref<string[]>([]);

const getWords = ((mode: mode, verb: string) => {
	const verbs = Object.keys(verbs_fr);

	const targetIndex = Math.floor(Math.random() * COUNT); // random index for the target string
	let randomVerbs: string[] = [];
	randomVerbs[targetIndex] = verb;

	for (let i = 0; i < COUNT; i++) {
		if (i === targetIndex) continue;
		let randomVerb;
		do {
			randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
		} while (randomVerbs.includes(randomVerb));
		randomVerbs[i] = randomVerb;
	}
	if (mode === 'base')
		words.value = randomVerbs;
	else
		words.value = randomVerbs.map(verb => (verbs_fr as any)[verb][mode]);
})

watch(() => [props.verb, props.mode], () => {
	getWords(props.mode, props.verb)
}, { immediate: true })

</script>

<template>
	<div class="flex flex flex-wrap gap-2 md:gap-3 w-full justify-center px-4 mt-4">
		<div v-if="mode !== ''" v-for="(word, index) in words" :key="index" class="bg-white py-1 px-2 md:py-2 md:px-4 cursor-pointer hover:opacity-80 rounded-md shadow"
			@click="$emit('choice', word)"
		>
			<span class="font-bold">{{ word }}</span>
		</div>
	</div>
</template>

<style scoped>
	.shadow {
		-webkit-box-shadow: 0px 3px 0px 0px #CBCBCB; 
		box-shadow: 0px 3px 0px 0px #CBCBCB;
	}
</style>