<script setup lang="ts">
import { useStore } from '../shared/store'

const store = useStore()
</script>

<template>
	<div v-if="store.topScore !== -1">
	  <span class="text-bold text-white text-lg"> {{$t('common.topScore')}} : {{ store.topScore }}</span>
	</div>
  </template>
