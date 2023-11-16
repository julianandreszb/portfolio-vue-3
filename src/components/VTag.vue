<script setup lang="ts">
import type { ITag } from '@/utils/typeScriptDefinitions/ITag'

defineProps<{ tag: ITag }>()
</script>

<template>
  <span :data-testid="tag.id" :class="{ active: tag.isActive }" :style="tag.style">
    <i v-if="tag?.icon?.class" :class="tag.icon.class" :style="tag.icon.style"></i>
    <a href="#" @click.prevent="">{{ tag.label }}</a>
  </span>
</template>

<style scoped lang="scss">
span {
  user-select: none;
  a {
    text-decoration: none;
  }
}
</style>
