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
	}
})
</script>

<template>
	<div class="flex flex-col justify-center">
		<span class="text-white font-bold text-xs mb-1">{{ label }}</span>
		<div
			type="text"
			class="bg-white w-[200px] h-[40px] rounded-lg border-solid outline-none p-6 text-center flex items-center justify-center"
			:class="[selected && value === '' && !disabled ? 'border-2 border-secondary' : 'border-0', disabled ? 'disabled' : '', selected && value !== '' ? 'border-2 border-valid' : '', props.locks ? 'cursor-pointer hover:opacity-80': '']"
			@click="$emit('click')"
		>
			<span v-if="value !== ''" class="font-bold"
				:class="selected && value !== '' ? 'text-valid' : ''"
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
