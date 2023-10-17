<script setup lang="ts">
import type { ITag } from '@/utils/typeScriptDefinitions/ITag'

const props = defineProps<ITag>()
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
span {
  display: inline-block;
  padding-block: 0.6rem;
  padding-inline: 0.8rem;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  background-color: #e6e6e6;
}
</style>
