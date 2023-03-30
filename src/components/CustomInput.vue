<script setup lang="ts">

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
		<span class="text-white font-bold text-xs mb-1">{{ label }}</span>
		<div
			class="bg-white w-[200px] h-[40px] rounded-lg border-solid outline-none p-6 text-center flex items-center justify-center"
			:class="[selected && value === '' && !disabled ? 'border-2 border-secondary' : 'border-0', disabled ? 'disabled' : '', selected && value !== '' && !error ? 'border-2 border-valid' : '', props.locks ? 'cursor-pointer hover:opacity-80': '', value !== '' && error ? 'border-2 border-error' : '']"
			@click="$emit('click')"
		>
			<span v-if="value !== ''" class="font-bold"
				:class="selected && value !== '' && !error ? 'text-valid' : error === true && value !== '' ? 'text-error': ''"
			>{{ value }}</span>
			<span v-else-if="selected && value === ''" class="text-secondary">Select the answer</span>
		</div>
	</div>
</template>

<style scoped>
	.disabled {
		background-color: #ffffff;
		opacity: 1;
		background: repeating-linear-gradient( -45deg, #eaeaea, #eaeaea 3.5px, #ffffff 3.5px, #ffffff 17.5px );
	}
</style>
