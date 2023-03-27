<script setup lang="ts">

defineEmits(['click']);

defineProps({
	selected: {
		type: Boolean
	},
	disabled: {
		type: Boolean
	},
	value: {
		type: String
	}
})
</script>

<template>
	<div
		type="text"
		class="bg-white w-[200px] h-[40px] rounded-lg border-solid outline-none p-2 text-center"
		:class="[selected && value === '' && !disabled ? 'border-2 border-purple-600' : 'border-0', disabled ? 'opacity-50' : '', selected && value !== '' ? 'border-2 border-amber-500' : '']"
		@click="$emit('click')"
	>
		<span v-if="value !== ''">{{ value }}</span>
	</div>
</template>
