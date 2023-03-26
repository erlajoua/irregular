<script setup lang="ts">
  import CustomInput from '../components/CustomInput.vue'
</script>

<template>
  <div class="w-screen h-screen bg-blue-500">
    <h1 class="bg-red-500">{{ $t('shared.inputs.base') }}</h1>
    <div class="flex items-center justify-center flex-col">
      <span>Disabled</span>
      <CustomInput
        :isDisabled="true"
      />
      <span>Selected</span>
      <CustomInput
        :isSelected="true"
      />
      <span>Waiting</span>
      <CustomInput
      />
    </div>

  </div>
</template>
