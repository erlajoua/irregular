<script setup lang="ts">
import Locks from '@/components/Locks.vue';
import TopScore from '@/components/TopScore.vue';
import ChangeLanguage from '@/components/ChangeLanguage.vue';
import type { PropType } from 'vue';


defineProps({
  inputs: {
    type: Array as PropType<boolean[]>,
    required: true,
  },
  showGame: {
    type: Boolean as PropType<boolean>,
    required: true
  }
})

const emit = defineEmits(['update:inputs', 'update:showGame'])

const play = (inputsEvent: []) => {
  emit('update:inputs', inputsEvent);
  emit('update:showGame', true);
}
</script>

<template>
  <div class="flex justify-between w-full">
    <TopScore />
    <ChangeLanguage />
  </div>
  <Locks @play="play($event)" />
</template>