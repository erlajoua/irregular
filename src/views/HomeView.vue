<script setup lang="ts">
  import ChangeLanguage from '@/components/ChangeLanguage.vue';
  import Menu from './Menu.vue'
  import Game from './Game.vue'
  import { ref } from 'vue';
  
  const showGame = ref(false);
  let inputs= ref<boolean[]>([]);


</script>

<template>
  <div class="w-screen h-screen bg-primary">
    <ChangeLanguage />
    <div class="flex items-center justify-center flex-col gap-4">
      <Menu v-if="!showGame"
        v-model:inputs="inputs"
        v-model:showGame="showGame"
      />
      <Game
        v-else
        :inputs="inputs"
        v-model:showGame="showGame"
      />
    </div>

  </div>
</template>

<style scoped>
	.shadow {
		-webkit-box-shadow: 0px 3px 0px 0px #E1A447; 
		box-shadow: 0px 3px 0px 0px #E1A447;
	}
</style>
