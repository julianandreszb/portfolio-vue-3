<script setup lang="ts">
import type { IExperience } from '@/utils/typeScriptDefinitions/IExperience'

defineProps<{ experience: IExperience }>()
</script>

<template>
  <article class="experience-wrap">
    <section>
      <div class="heading-summary">
        <h3 data-testid="job-title">{{ experience.title }}</h3>
        <span data-testid="company-name" class="start-point">{{ experience.company }}</span>
        <span data-testid="time-in-company" class="start-point">{{
          `${experience.startDate} - ${experience.endDate}`
        }}</span>
      </div>
      <p data-testid="job-description">{{ experience.description }}</p>
      <div class="tag-wrap">
        <span>Skills:</span>
        <ul class="skill-list">
          <li v-for="(tag, index) in experience.tags" :key="tag">{{ index ? `· ${tag}` : tag }}</li>
        </ul>
      </div>
    </section>
  </article>
</template>

<style scoped lang="scss">
@import '../assets/sass/abstracts/mixin';
.experience-wrap {
  padding-block: 2rem;
  border-bottom: 1px dashed var(--color-border-dark);

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .heading-summary {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .start-point::before {
        content: '';
      }
    }

    .tag-wrap {
      display: flex;
      gap: 1rem;
      span {
        font-weight: bold;
      }

      ul {
        display: flex;
        list-style: none;
        gap: 1rem;
        padding-inline: 0;
      }
    }

    @include for-size(tablet-landscape-up) {
      .heading-summary {
        flex-direction: row;

        .start-point::before {
          content: ' · ';
        }
      }
    }
  }
}
</style>
