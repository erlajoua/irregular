<script setup lang="ts">
  import Inputs from '@/components/Inputs.vue';
  import Locks from '@/components/Locks.vue';
  import ChangeLanguage from '@/components/ChangeLanguage.vue';
  import TopScore from '@/components/TopScore.vue';
  import { ref } from 'vue';
import type TopScoreVue from '@/components/TopScore.vue';
  
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
    <TopScore />
    <div class="flex items-center justify-center flex-col gap-4">
      <Locks
        v-if="!showGame"
        @play="play($event)"
      />
      <template v-else>
        <Inputs
          :inputs="inputs"
        />
        <div
		      class="bg-tertiary shadow rounded-2xl py-2 px-8 cursor-pointer hover:opacity-80"
          @click="showGame = false"><span class="font-bold text-md">{{ $t('common.back') }}</span>
        </div>
      </template>
    </div>

  </div>
</template>

<style scoped>
	.shadow {
		-webkit-box-shadow: 0px 3px 0px 0px #E1A447; 
		box-shadow: 0px 3px 0px 0px #E1A447;
	}
</style>
