<script setup lang="ts">
import VTagFilter from '@/components/VTagFilter.vue'
import appConfig from '../../../app.config.json'
import { reactive } from 'vue'
import type { ITag, TagFilterOperation } from '@/utils/typeScriptDefinitions/ITag'
const { portfolio } = appConfig.sections

const filteredTags = reactive(portfolio.tags)

function handleTagSelected(tagOperation: TagFilterOperation) {
  if (tagOperation.action === 'setActive') {
    filteredTags.map((tag: ITag) => {
      if (tag.id === tagOperation.id) {
        tag.isActive = true
      }
    })
  }
  if (tagOperation.action === 'setInactive') {
    filteredTags.map((tag: ITag) => {
      if (tag.id === tagOperation.id) {
        tag.isActive = false
      }
    })
  }
}
</script>

<template>
  <VTagFilter :tags="filteredTags" @emitTagSelected="handleTagSelected" />
  {{ filteredTags }}
</template>

<style scoped lang="scss"></style>
