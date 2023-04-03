<script setup lang="ts">
	import { ref } from 'vue';
	import { useI18n } from 'vue-i18n';

	const languages = ref<string[]>(['fr', 'en']);
	const { locale } = useI18n();
  const show = ref(false)

	const changeLanguage = (language: string) => {
		locale.value = language;
    show.value = false
	}
</script>

<template>
  <div class="fixed w-screen h-screen z-[50]" v-if="show" @click="show = false">
  </div>
	<div class="flex gap-2 mr-4 mt-2 relative z-[51]">
   <div @click="show = !show" class="flex cursor-pointer gap-2 bg-secondary rounded-xl px-2 py-1 flex items-center">
     <span class="uppercase font-medium">{{locale}}</span>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" :class="{'rotate-180': show}">
       <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
     </svg>
   </div>
    <div class="absolute top-full bg-black_input w-full p-1 overflow-hidden  flex flex-col gap-2 text-secondary mt-1 rounded-xl" v-show="show">
      <div class="cursor-pointer hover:bg-black hover:bg-opacity-20 inline-flex items-center justify-center rounded-xl px-1 py-1" v-for="(language, index) in languages" :key="index"  @click="changeLanguage(language)">
        <span>{{ language }}</span>
      </div>
    </div>


	</div>
</template>