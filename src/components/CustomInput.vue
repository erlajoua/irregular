<script setup lang="ts">

import { ref} from "vue";

defineEmits(['click']);

const props = defineProps({
	width: {
		type: String,
		default: '200'
	},
	height: {
		type: String,
		default: '80'
	},
	selected: {
		type: Boolean,
		default: false
	},
	disabled: {
		type: Boolean,
		default: false
	},
	value: {
		type: String
	}
})

const selected = ref(props.selected);
</script>

<template>
	<div type="text" class="bg-white w-[200px] h-[40px] rounded-lg border-solid border-purple-600 outline-none p-2 text-center"
		:class="[  selected && !disabled ? 'border-2' : 'border-0',  disabled ? 'opacity-50' : '']"
		@click="$emit('click')"
	>
		<span v-if="value && disabled">{{ value }}</span>
	</div>
</template>
