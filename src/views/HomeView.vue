<script setup lang="ts">
  import Inputs from '@/components/Inputs.vue';
  import Locks from '@/components/Locks.vue';
  import { ref } from 'vue';
  
  const showGame = ref(false);
  const inputs= ref<boolean[]>([]);

  const play = (inputsEvent: []) => {
    inputs.value = inputsEvent;
    showGame.value = true;
  }
</script>

<template>
  <div class="w-screen h-screen bg-blue-500">
    <h1 class="bg-red-500">{{ $t('shared.inputs.base') }}</h1>
    <div class="flex items-center justify-center flex-col  gap-2">
      
      <Locks
        v-if="!showGame"
        @play="play($event)"
      />
      <Inputs
        v-else
        :inputs="inputs"
      />
    </div>

  </div>
</template>
