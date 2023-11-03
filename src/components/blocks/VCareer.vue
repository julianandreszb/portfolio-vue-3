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
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  :deep(.experience-wrap) {
    section {
      //border-bottom: 1px dashed var(--color-border-dark);
      padding-bottom: 1rem;
      border-width: 3px;

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

    .border-gradient {
      height: 0.4rem;
      width: 100%;
      border-bottom: 3px solid transparent;

      background: linear-gradient(
        to right,
        transparent 0%,
        rgba(0, 0, 0, 0.5) 50%,
        transparent 100%
      );
    }
  }
}
</style>
