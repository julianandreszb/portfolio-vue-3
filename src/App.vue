<script setup lang="ts">
import TheNavBar from '@/components/TheNavBar.vue'
import { routes } from '@/utils/routes'
import VSection from '@/components/VSection.vue'
import { EnumHeaders } from '@/utils/typeScriptDefinitions/EnumHeaders'
import VContentSummary from '@/components/blocks/VContentSummary.vue'
import VContentAboutMe from '@/components/blocks/VContentAboutMe.vue'
import appConfig from '../app.config.json'
import VRatingBar from '@/components/blocks/VRatingBar.vue'
import VPortfolio from '@/components/blocks/VPortfolio.vue'
import VCareer from '@/components/blocks/VCareer.vue'

const skillItems = appConfig.sections.skills.items
</script>

<template>
  <TheNavBar :routes="routes"></TheNavBar>
  <main>
    <v-section section-id="summary">
      <v-content-summary></v-content-summary>
    </v-section>
    <v-section
      section-id="about-me"
      :header-tag="{ tagContent: 'about_me', tagName: EnumHeaders.h2 }"
    >
      <v-content-about-me></v-content-about-me>
    </v-section>
    <v-section
      section-id="skills"
      :header-tag="{ tagContent: 'my_skills', tagName: EnumHeaders.h2 }"
    >
      <VRatingBar :items="skillItems"></VRatingBar>
    </v-section>
    <v-section
      section-id="portfolio"
      :header-tag="{ tagContent: 'portfolio', tagName: EnumHeaders.h2 }"
    >
      <v-portfolio></v-portfolio>
    </v-section>
    <v-section section-id="career" :header-tag="{ tagContent: 'career', tagName: EnumHeaders.h2 }">
      <v-career></v-career>
    </v-section>
  </main>
</template>

<style lang="scss" scoped>
@import 'src/assets/sass/abstracts/mixin';

main {
  background-color: var(--color-background);
  padding-inline: 1.6rem;
}

@include for-size(tablet-portrait-up) {
  main {
    padding-inline: 10rem;
  }
}
</style>
