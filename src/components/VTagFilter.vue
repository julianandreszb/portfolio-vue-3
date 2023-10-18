<script setup lang="ts">
import type { ITag } from '@/utils/typeScriptDefinitions/ITag'
import VTag from '@/components/VTag.vue'

const props = defineProps<{ tags: Array<ITag> }>()
</script>

<template>
  <nav class="filter-section">
    <VTag v-for="tag in props.tags" :tag="tag" :key="tag.id"></VTag>
  </nav>
</template>

<style scoped lang="scss">
.filter-section {
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  padding-block: 1.6rem;
  padding-inline: 1.6rem;
  border: 2px solid var(--color-border-gray-light);
  border-radius: 16px;
}
</style>
