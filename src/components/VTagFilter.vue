<script setup lang="ts">
import type { ITag, TagFilterOperation } from '@/utils/typeScriptDefinitions/ITag'
import VTag from '@/components/VTag.vue'

const props = defineProps<{ tags: Array<ITag> }>()

const emit = defineEmits<{ (e: 'emitTagSelected', tag: TagFilterOperation): void }>() // OPTION #1
//const emit = defineEmits<{ emitTagSelected: [tag: { id: string; action: string }] }>() // OPTION #2
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
