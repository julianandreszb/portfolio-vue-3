<script setup lang="ts">
import type { ITag, TagFilterOperation } from '@/utils/typeScriptDefinitions/ITag'
import VTag from '@/components/VTag.vue'

const props = defineProps<{ tags: Array<ITag> }>()

const emit = defineEmits<{ (e: 'emitTagSelected', tag: TagFilterOperation): void }>()
function handleTagClick(tag: ITag) {
  if (tag.isActive) {
    emit('emitTagSelected', { id: tag.id, action: 'setInactive' })
  } else {
    emit('emitTagSelected', { id: tag.id, action: 'setActive' })
  }
}
</script>

<template>
  <nav class="filter-section">
    <VTag v-for="tag in props.tags" :tag="tag" :key="tag.id" @click="handleTagClick(tag)"></VTag>
  </nav>
</template>

<style scoped lang="scss">
@import '../assets/sass/abstracts/mixin';

.filter-section {
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  padding-block: 1.6rem;
  padding-inline: 1.6rem;
  border: 2px solid var(--color-text-complement);
  border-radius: 16px;

  span {
    display: inline-block;
    padding-block: 0.6rem;
    padding-inline: 0.8rem;
    border-radius: 16px;
    background-color: color-mix(in srgb, var(--vt-c-complement) 40%, transparent);

    color: var(--color-text);
    font-size: 1.6rem;
    font-weight: 400;

    &:hover,
    &.active {
      cursor: pointer;
      background-color: var(--vt-c-accent);
    }

    :deep(a) {
      color: white;

      &:link,
      &:visited {
        color: white;
      }
    }
  }
}
</style>
