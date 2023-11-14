<script setup lang="ts">
import appConfig from '../../../app.config'
const { aboutMe } = appConfig.sections
</script>

<template>
  <p>{{ aboutMe.description.text }}</p>
</template>

<style scoped></style>
