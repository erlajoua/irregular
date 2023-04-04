<script setup lang="ts">
import type { PropType } from 'vue';
import { ref } from 'vue';
import Inputs from '../components/Inputs.vue'

const lives = ref(3)
const isPlaying = ref(true);

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
		isPlaying.value = false;
	}
}

const reset = () => {
	lives.value = 3;
	isPlaying.value = true;
}

</script>

<template>
	<template v-if="isPlaying">
		<Inputs :inputs="inputs" :lives="lives" @loselife="checkLoseLife()" />
		<div class="bg-tertiary shadow rounded-2xl mt-auto mb-4 py-2 px-8 cursor-pointer hover:opacity-80" @click="back()"><span
				class="font-bold text-md">{{ $t('common.back') }}</span>
		</div>
	</template>
	<div v-else class="flex flex-col h-full items-center justify-center gap-2">
		<span class="text-white font-bold">You lost</span>
		<div class="flex gap-2">
			<div class="bg-tertiary shadow rounded-2xl mt-auto mb-4 py-2 px-4 cursor-pointer hover:opacity-80" @click="reset()"><span
					class="font-bold text-md">{{ $t('common.tryagain') }}</span>
			</div>
			<div class="bg-tertiary shadow rounded-2xl mt-auto mb-4 py-2 px-8 cursor-pointer hover:opacity-80" @click="back()"><span
					class="font-bold text-md">{{ $t('common.back') }}</span>
			</div>
		</div>
	</div>
</template>