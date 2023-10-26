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
@import '../assets/sass/abstracts/mixin';

.filter-section {
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  padding-block: 1.6rem;
  padding-inline: 1.6rem;
  border: 2px solid var(--color-border-gray-light);
  border-radius: 16px;

  span {
    display: inline-block;
    padding-block: 0.6rem;
    padding-inline: 0.8rem;
    border-radius: 16px;
    background-color: #e6e6e6;

    color: var(--color-text-black-60);
    font-size: 1.8rem;
    font-weight: 400;

    &:hover {
      cursor: pointer;
      background-color: #bbbbbb;
    }

    &.active {
      background-color: #000000;
      color: #ffffff;
    }
  }

  @include for-size(tablet-landscape-up) {
    span {
      font-size: 2.4rem;
    }
  }
}
</style>
