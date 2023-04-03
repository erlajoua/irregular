<script setup lang="ts">

import Lock from '../icons/Lock.vue'

defineEmits(['click']);

const props = defineProps({
	selected: {
		type: Boolean
	},
	disabled: {
		type: Boolean
	},
	value: {
		type: String
	},
	label: {
		type: String
	},
	locks: {
		type: Boolean
	},
	error: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<div class="flex flex-col justify-center">
		<div class="flex gap-1 justify-center items-center">
			<span class="text-white font-bold text-xs mb-1">{{ label }}</span>
			<Lock v-if="props.locks && value === $t('common.lock')" class="mb-1" />
		</div>
		<div
			class="text-white bg-black_input w-[200px] font-bold h-[40px] rounded-lg border-solid outline-none p-6 text-center flex items-center justify-center"
			:class="[selected && value === '' && !disabled ? 'border-2 border-secondary' : 'border-0', disabled ? 'disabled' : '', selected && value !== '' && !error ? 'border-2 border-valid' : '', props.locks ? 'cursor-pointer hover:opacity-80': '', value !== '' && error ? 'border-2 border-error' : '', props.locks ? value === $t('common.unlock') ? 'font-normal border-2 border-secondary' : '' : '']"
			@click="$emit('click')"
		>
			<span v-if="value !== ''"
				:class="selected && value !== '' && !error ? 'text-valid' : error === true && value !== '' ? 'text-error': ''"
			>{{ value }}</span>
			<span v-else-if="selected && value === ''" class="text-secondary font-medium">Select the answer</span>
		</div>
	</div>
</template>

<style scoped>
	.disabled {
		background-color: #03375A;
opacity: 1;
background: repeating-linear-gradient( -45deg, #073656, #073656 3.5px, #03375A 3.5px, #03375A 17.5px );
	}
</style>
