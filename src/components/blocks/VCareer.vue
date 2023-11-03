<script setup lang="ts">
import VExperience from '@/components/VExperience.vue'
import appConfig from '../../../app.config.json'
const { career } = appConfig.sections
</script>

<template>
  <div class="career-container">
    <VExperience v-for="experience in career" :experience="experience" :key="experience.id" />
  </div>
</template>

<style scoped lang="scss">
.career-container {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  :deep(.experience-wrap) {
    .heading-summary {
      padding-bottom: 1rem;
      border-width: 3px;

      h3 {
        font-size: 2rem;
        font-style: normal;
        font-weight: 600;
        line-height: 2rem;
      }

      span {
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2rem;
      }
    }
  }
}
</style>
