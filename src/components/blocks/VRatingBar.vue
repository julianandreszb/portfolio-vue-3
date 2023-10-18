<script setup lang="ts">
import type { IRatingBarItem } from '@/utils/typeScriptDefinitions/IRatingBar'
import VRatingBarItem from '@/components/VRatingBarItem.vue'

interface Props {
  items: Array<IRatingBarItem>
}
const props = defineProps<Props>()
</script>

<template>
  <VRatingBarItem v-for="item in props.items" :item="item" :key="item.id" />
</template>

<style scoped lang="scss"></style>
