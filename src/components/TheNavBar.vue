<script setup lang="ts">
import type { IRoute } from '@/utils/tsinterfaces/IRoute'

interface Props {
  routes?: Array<IRoute>
}

const props = withDefaults(defineProps<Props>(), {
  routes: () => []
})
</script>

<template>
  <nav class="menu">
    <ul>
      <li v-for="route in props.routes" :key="route.id" :data-testid="route.id">
        <a href="#">{{ route.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
