<script setup lang="ts">
import { ref } from 'vue';
import verbs_fr from '../assets/verbs_fr.json';

type mode = 'base' | 'translate' | 'past_simple' | 'past_participle';
const COUNT = 20;

interface Combinaison {
	[base: string]: {
		translate: string;
		past_simple: string;
		past_participle: string;
	}
}

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
		words.value = randomVerbs.map(verb => (verbs_fr as Combinaison)[verb][mode]);
})

getWords(props.mode, props.verb);
</script>

<template>
	<div class="flex flex flex-wrap gap-2 w-2/5">
		<span>Verb = {{ props.verb }}</span>
		<div v-for="(word, index) in words" :key="index" class="bg-white p-2 cursor-pointer hover:opacity-50">
			<span>{{ word }}</span>
		</div>
	</div>
	<button @click="getWords(props.mode, props.verb)">refresh</button>
</template>