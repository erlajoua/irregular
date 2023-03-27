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
  <div class="w-screen h-screen bg-[#0095C3]">
    <h1 class="bg-red-500">{{ $t('shared.inputs.base') }}</h1>
    <div class="flex items-center justify-center flex-col  gap-2">
      
      <Locks
        v-if="!showGame"
        @play="play($event)"
      />
      <template v-else>
        <Inputs
          :inputs="inputs"
        />
        <button @click="showGame = false">Retour</button>
      </template>
    </div>

  </div>
</template>
