<script setup lang="ts">
import type { IExperience } from '@/utils/typeScriptDefinitions/IExperience'

defineProps<{ experience: IExperience }>()
</script>

<template>
  <article class="experience-wrap">
    <section>
      <h3>{{ experience.title }}</h3>
      <span class="company">{{ experience.company }}</span>
      <span class="">{{ `${experience.startDate} - ${experience.endDate}` }}</span>
    </section>
  </article>
</template>

<style scoped lang="scss">
@import '../assets/sass/abstracts/mixin';
section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@include for-size(tablet-portrait-up) {
  section {
    flex-direction: row;
  }
}
</style>
