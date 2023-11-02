<script setup lang="ts">
import VExperience from '@/components/VExperience.vue'
</script>

<template>
  <div class="career-container">
    <VExperience
      :experience="{
        id: 'lifefile',
        title: 'Software Engineer',
        company: '@LIFE-FILE',
        startDate: '2013',
        endDate: 'Present'
      }"
    />
  </div>
</template>

<style scoped lang="scss">
.career-container {
  :deep(.experience-wrap) {
    section {
      h3 {
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
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
