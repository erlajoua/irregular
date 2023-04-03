<script setup lang="ts">
import type { PropType } from 'vue';
import Inputs from '../components/Inputs.vue'

defineProps({
	inputs: {
		type: Array<boolean>,
		required: true,
	},
	showGame: {
		type: Boolean as PropType<boolean>,
		required: true
	}
})

const emit = defineEmits(['update:inputs', 'update:showGame'])

const back = () => {
	emit('update:showGame', false)
}

</script>

<template>
	<Inputs :inputs="inputs" />
	<div class="bg-tertiary shadow rounded-2xl mt-auto py-2 px-8 cursor-pointer hover:opacity-80 absolute bottom-8" @click="back()"><span
			class="font-bold text-md">{{ $t('common.back') }}</span>
	</div>
</template>