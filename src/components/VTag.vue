<script setup lang="ts">
import type { ITag } from '@/utils/typeScriptDefinitions/ITag'

defineProps<{ tag: ITag }>()
</script>

<template>
  <span :data-testid="tag.id" :class="{ active: tag.isActive }">
    <i v-if="tag?.icon?.class" :class="tag.icon.class" :style="tag.icon.style"></i>
    {{ tag.label }}
  </span>
</template>

<style scoped lang="scss">
span {
  user-select: none;
}
</style>
