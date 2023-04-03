<script setup lang="ts">
import CustomInput from './CustomInput.vue';
import { ref } from 'vue';
import { modes } from '../shared/const'

const inputs = ref([
	false, true, true, true
]);

const test = (index: number) => {
	const locks = inputs.value.filter(input => input === true);
	if ((locks.length > 1 && inputs.value[index] === true)
		|| (locks.length < 3 && inputs.value[index] === false))
		inputs.value[index] = !inputs.value[index];
	else
		alert("dumb!");
}
</script>

<template>
	<div class="grid grid-cols-3 grid-rows-2 gap-4">
	<CustomInput v-for="(input, index) in inputs" :key="index" :disabled="input" @click="test(index)"
		:value="input ? $t('common.lock') : $t('common.unlock')" :label="$t(`modes.${modes[index]}`)"
		:locks="true"
		:class="[index === 0 ? 'row-start-1' : 'row-start-2', index !== 0 ? `col-start-${index}` : 'col-start-2']"
		/>
	</div>
	<div
		class="bg-tertiary shadow rounded-2xl py-2 px-8 cursor-pointer hover:opacity-80"
		@click="$emit('play', inputs)"
	><span class="font-bold text-md">{{ $t('common.play') }}</span></div>
</template>

<style scoped>
	.shadow {
		-webkit-box-shadow: 0px 3px 0px 0px #E1A447; 
		box-shadow: 0px 3px 0px 0px #E1A447;
	}
</style>