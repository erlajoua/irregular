<script setup lang="ts">
	import { ref } from 'vue';
	import { useI18n } from 'vue-i18n';

	const languages = ref<string[]>(['fr', 'en']);
	const { locale } = useI18n();

	const changeLanguage = (language: string) => {
		locale.value = language;
	}

</script>

<template>
	<div class="flex gap-2 mr-4 mt-2">
		<div class="bg-secondary w-20 cursor-pointer hover:bg-slate-200" v-for="(language, index) in languages" :key="index"  @click="changeLanguage(language)">
			<span>{{ language }}</span>
		</div>
	</div>
</template>