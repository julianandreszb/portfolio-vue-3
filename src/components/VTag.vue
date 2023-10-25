<script setup lang="ts">
import type { ITag } from '@/utils/typeScriptDefinitions/ITag'

defineProps<{ tag: ITag }>()
</script>

<template>
  <span :data-testid="tag.id" :class="{ active: tag.isActive }">
    <i v-if="tag?.icon?.class" :class="tag.icon.class" :style="tag.icon.style"></i>
    {{ tag.label }}</span
  >
</template>

<style scoped lang="scss">
@import '../assets/sass/abstracts/mixin';
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
</style>
