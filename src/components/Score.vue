<script setup lang="ts">
	const props = defineProps({
		score: {
			type: Number
		}
	}) 
</script>

<template>
	<span class="text-bold text-white text-xl"> {{ $t('common.score') }} : {{ props.score }}</span>
</template>