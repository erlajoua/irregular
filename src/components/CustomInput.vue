<script setup lang="ts">
import { ref } from "vue"

const props = defineProps({
	width: {
		type: String,
		default: '200'
	},
	height: {
		type: String,
		default: '80'
	},
	isSelected: {
		type: Boolean,
		default: false
	},
	isDisabled: {
		type: Boolean,
		default: false
	},
	value: {
		type: String,
		default: ''
	}
})

const isSelected = ref(props.isSelected);
</script>

<template>
	<input type="text" class="w-[200px] h-[40px] rounded-lg border-solid border-purple-600 outline-none p-2 text-center"
		:class="isSelected && !isDisabled ? 'border-2' : 'border-0'"
		@click="isSelected = (!isDisabled ? !isSelected : isSelected)" :disabled="isDisabled"
		:value="value ? value : 'Test'" />
</template>
