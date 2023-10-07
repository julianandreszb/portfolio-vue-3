<script setup lang="ts">
import TheNavBar from '@/components/TheNavBar.vue'
import { routes } from '@/utils/routes'
import VSection from '@/components/VSection.vue'
import { EnumHeaders } from '@/utils/typeScriptDefinitions/enumHeaders'
import VContentSummary from '@/components/VContentSummary.vue'
import VContentAboutMe from '@/components/VContentAboutMe.vue'
</script>

<template>
  <TheNavBar :routes="routes"></TheNavBar>
  <main>
    <v-section class="section-summary" section-id="summary">
      <v-content-summary></v-content-summary>
    </v-section>
    <v-section
      section-id="about-me"
      :header-tag="{ tagContent: 'about_me', tagName: EnumHeaders.h2 }"
    >
      <v-content-about-me></v-content-about-me>
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
