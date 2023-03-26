<script setup lang="ts">
	import CustomInput from './CustomInput.vue';
	import { ref } from 'vue';

	const inputs = ref([
		false, true, true, true
	]);

	const test = (index: number) => {
		inputs.value[index] = !inputs.value[index];
	}
</script>

<template>
	<CustomInput v-for="(input, index) in inputs" :key="index"
		:disabled="input"
		@click="test(index)"
		:value="input ? $t('shared.common.lock') : $t('shared.common.unlock')"
	/>
</template>