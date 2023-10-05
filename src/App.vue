<script setup lang="ts">
import TheNavBar from '@/components/TheNavBar.vue'
import { routes } from '@/utils/routes'
import VSection from '@/components/VSection.vue'
import { EnumHeaders } from '@/utils/typeScriptDefinitions/enumHeaders'
import { reactive } from 'vue'
const SUMMARY_GREETING = import.meta.env.VITE_SECTION_SUMMARY_GREETING
const SUMMARY_GREETING_NAME = import.meta.env.VITE_SECTION_SUMMARY_GREETING_NAME
const SUMMARY_OCCUPATION = import.meta.env.VITE_SECTION_SUMMARY_OCCUPATION
const SUMMARY_DESCRIPTION = import.meta.env.VITE_SECTION_SUMMARY_DESCRIPTION

const ABOUT_ME_DESCRIPTION = import.meta.env.VITE_SECTION_ABOUT_ME_DESCRIPTION

const summary = reactive({
  greeting: SUMMARY_GREETING,
  greeting_name: SUMMARY_GREETING_NAME,
  occupation: SUMMARY_OCCUPATION,
  description: SUMMARY_DESCRIPTION
})
const aboutMe = reactive({
  description: ABOUT_ME_DESCRIPTION
})
</script>

<template>
  <TheNavBar :routes="routes"></TheNavBar>
  <main>
    <v-section class="section-summary" section-id="summary">
      <h1 class="heading-40">
        {{ summary.greeting }} <span class="fw-700">{{ summary.greeting_name }}</span>
      </h1>
      <h2 class="heading-40 fw-700">
        {{ summary.occupation }}
      </h2>
      <p>{{ summary.description }}</p>
    </v-section>
    <v-section
      section-id="about-me"
      :header-tag="{ tagContent: 'about_me', tagName: EnumHeaders.h2 }"
    >
      <p>{{ aboutMe.description }}</p>
    </v-section>
  </main>
</template>

<style scoped>
main {
  background-color: var(--color-background);
  padding-inline: 1.6rem;
}

.heading-40 {
  font-size: 4rem;
  font-weight: 500;
}

p {
  font-size: 2.4rem;
  color: var(--color-text-black-60);
}

.fw-700 {
  font-weight: 700;
}
</style>
