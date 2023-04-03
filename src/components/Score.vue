<script setup lang="ts">
	import Score from '@/icons/Score.vue'

	const props = defineProps({
		score: {
			type: Number
		}
	}) 
</script>

<template>
	<div>
		<Score />
		<span class="text-bold text-white text-xl">{{ props.score }}</span>
	</div>
</template>