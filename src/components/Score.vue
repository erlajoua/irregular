<script setup lang="ts">
	import Score from '@/icons/Score.vue'

	const props = defineProps({
		score: {
			type: Number
		}
	}) 
</script>

<template>
	<div class="mt-2 ml-4 flex items-center">
		<Score />
		<span class="text-bold text-white text-xl ml-2">{{ props.score }}</span>
	</div>
</template>