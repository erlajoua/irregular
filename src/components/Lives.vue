<script setup lang="ts">
	import FilledHeart from '../icons/FilledHeart.vue'
	import EmptyHeart from '../icons/EmptyHeart.vue'

	defineProps({
		lives: {
			type: Number,
			required: true
		}
	})

	const MAX_LIVES = 3;
</script>

<template>
	<div class="text-secondary flex gap-1 items-center">
		<FilledHeart v-for="(_, index) in lives" :key="index" />
		<EmptyHeart v-for="index in MAX_LIVES - lives" :key="index" />
	</div>
</template>