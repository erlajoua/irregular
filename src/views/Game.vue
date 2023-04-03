<script setup lang="ts">
import type { PropType } from 'vue';
import { ref } from 'vue';
import Inputs from '../components/Inputs.vue'

const lives = ref(3)

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

const checkLoseLife = () => {
	lives.value--;
	if (lives.value === 0) {
		alert('You lost');
		back();
	}
}

</script>

<template>
	<Inputs :inputs="inputs" :lives="lives" @loselife="checkLoseLife()" />
	<div class="bg-tertiary shadow rounded-2xl mt-auto mb-4 py-2 px-8 cursor-pointer hover:opacity-80" @click="back()"><span
			class="font-bold text-md">{{ $t('common.back') }}</span>
	</div>
</template>