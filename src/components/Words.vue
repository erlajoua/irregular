<script setup lang="ts">
import { ref, watch } from 'vue';
import verbs_fr from '../assets/verbs_fr.json';
import type { Combinaison, mode } from '../shared/interfaces'

const COUNT = 20;

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

watch(() => [props.verb, props.mode], () => {
	getWords(props.mode, props.verb)
}, { immediate: true })

</script>

<template>
	<div class="flex flex flex-wrap gap-2 w-2/5">
		<div v-for="(word, index) in words" :key="index" class="bg-white p-2 cursor-pointer hover:opacity-50"
			@click="$emit('choice', word)"
		>
			<span>{{ word }}</span>
		</div>
	</div>
</template>