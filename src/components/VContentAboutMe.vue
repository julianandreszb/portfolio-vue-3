<script setup lang="ts">
import { reactive } from 'vue'

const ABOUT_ME_DESCRIPTION = import.meta.env.VITE_SECTION_ABOUT_ME_DESCRIPTION

const aboutMe = reactive({
  description: ABOUT_ME_DESCRIPTION
})
</script>

<template>
  <p>{{ aboutMe.description }}</p>
</template>

<style scoped></style>
