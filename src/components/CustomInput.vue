<script setup lang="ts">

defineEmits(['click']);

defineProps({
	width: {
		type: String,
		default: '200'
	},
	height: {
		type: String,
		default: '80'
	},
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
	<div type="text" class="bg-white w-[200px] h-[40px] rounded-lg border-solid border-purple-600 outline-none p-2 text-center"
		:class="[  selected && !disabled ? 'border-2' : 'border-0',  disabled ? 'opacity-50' : '']"
		@click="$emit('click')"
	>
		<span v-if="value !== ''">{{ value }}</span>
	</div>
</template>
