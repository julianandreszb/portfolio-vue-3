<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheNavBar from '@/components/TheNavBar.vue'
import { routes } from '@/utils/routes'
</script>

<template>
  <header v-if="false">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />

  <TheNavBar :routes="routes"></TheNavBar>
</template>

<style scoped></style>
