<script setup lang="ts">
  import Inputs from '@/components/Inputs.vue';
  import Locks from '@/components/Locks.vue';
  import ChangeLanguage from '@/components/ChangeLanguage.vue';
  import { ref } from 'vue';
  
  const showGame = ref(false);
  const inputs= ref<boolean[]>([]);

  const play = (inputsEvent: []) => {
    inputs.value = inputsEvent;
    showGame.value = true;
  }
</script>

<template>
  <div class="w-screen h-screen bg-primary">
    <ChangeLanguage />
    <div class="flex items-center justify-center flex-col gap-4">
      <Locks
        v-if="!showGame"
        @play="play($event)"
      />
      <template v-else>
        <Inputs
          :inputs="inputs"
        />
        <button @click="showGame = false">{{ $t('shared.common.back') }}</button>
      </template>
    </div>

  </div>
</template>
