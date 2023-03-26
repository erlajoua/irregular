<script setup lang="ts">
  import Inputs from '@/components/Inputs.vue';
</script>

<template>
  <div class="w-screen h-screen bg-blue-500 gap-2">
    <h1 class="bg-red-500">{{ $t('shared.inputs.base') }}</h1>
    <div class="flex items-center justify-center flex-col">
      <Inputs />
    </div>

  </div>
</template>
