<script setup lang="ts">
	import { ref } from 'vue';

	const getTopScore = () => {
		const topScore = localStorage.getItem('topScore');
		return topScore ? parseInt(topScore) : -1;
	}

	const topScore = ref(getTopScore());


</script>

<template>
	<div v-if="topScore !== -1">
		<span class="text-bold text-white text-lg"> {{$t('common.topScore')}} : {{ topScore }}</span>
	</div>
</template>