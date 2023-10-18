<script setup lang="ts">
import type { ITag } from '@/utils/typeScriptDefinitions/ITag'

const props = defineProps<{ tag: ITag }>()
</script>

<template>
  <span>
    <i
      v-if="props.tag?.icon?.class"
      :class="props.tag.icon.class"
      :style="props.tag.icon.style"
    ></i>
    {{ props.tag.label }}</span
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
}

@include for-size(tablet-landscape-up) {
  span {
    font-size: 2.4rem;
  }
}
</style>
