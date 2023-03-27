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
	<CustomInput v-for="(input, index) in inputs" :key="index" :disabled="input" @click="test(index)"
		:value="input ? $t('shared.common.lock') : $t('shared.common.unlock')" :label="$t(`shared.modes.${modes[index]}`)" />
	<button @click="$emit('play', inputs)">{{ $t('shared.common.play') }}</button>
</template>