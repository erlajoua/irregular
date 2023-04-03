<script setup lang="ts">
import { useStore } from '../shared/store'
import TopScore from '../icons/TopScore.vue'

const store = useStore()
</script>

<template>
	<div class="flex items-center">
		<TopScore />
		<span class="ml-2 text-bold text-white text-lg"> {{ store.topScore }}</span>
	</div>
</template>
