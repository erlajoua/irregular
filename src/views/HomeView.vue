<script setup lang="ts">
  import Menu from './Menu.vue'
  import Game from './Game.vue'
  import { ref } from 'vue';

  import Icon from '../icons/Icon.vue'
  
  const showGame = ref(false);
  let inputs= ref<boolean[]>([]);


</script>

<template>
  <div class="w-screen h-screen bg-primary flex pb-12 md:pb-0 md:items-center justify-center">
    <div class="w-full mt-12 md:mt-0 mx-6 md:mx-0  md:w-8/12 md:h-[80vh] xl:h-2/3 rounded-2xl bg-primary_2 relative">
      <!-- <ChangeLanguage /> -->
      <Icon class="absolute icon" />
      <span class="absolute titleapp font-bold text-white">IRREGULAR</span>
      <div class="flex items-center h-full flex-col gap-4">
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
  </div>
</template>

<style scoped>
	.shadow {
		-webkit-box-shadow: 0px 3px 0px 0px #E1A447; 
		box-shadow: 0px 3px 0px 0px #E1A447;
	}

  .icon {
    --size: 2em;
    left: 50%;
    top: 0%;
    width: var(--size);
    height: var(--size);
    transform: translate(-50%, calc(-50% + (50% - var(--size) / 2)));
  }

  .titleapp {
    left: 50%;
    top: 0%;
    transform: translate(-50%, calc(-50% + (50% + 1.2em)));
  }
</style>
