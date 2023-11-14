<script setup lang="ts">
import VTagFilter from '@/components/VTagFilter.vue'
import appConfig from '../../../app.config'
import { computed, reactive } from 'vue'
import type { ITag, TagFilterOperation } from '@/utils/typeScriptDefinitions/ITag'
import VCard from '@/components/VCard.vue'
import type { ICard } from '@/utils/typeScriptDefinitions/ICard'
const { portfolio } = appConfig.sections

const filteredTags = reactive(portfolio.tags)

function handleTagSelected(tagOperation: TagFilterOperation) {
  filteredTags.map((tag: ITag) => {
    if (tag.id === tagOperation.id) {
      tag.isActive = tagOperation.action === 'setActive'
    }
  })
}

let filteredProjects = computed(() => {
  if (!filteredTags.some((tag) => tag.isActive)) {
    return portfolio.projects
  }

  return portfolio.projects.filter((project: ICard) => {
    if (!project.tags.length) {
      return false
    }

    return filteredTags.some((tag) => {
      return tag.isActive && project.tags.some((projectTag) => tag.id === projectTag.id)
    })
  })
})
</script>

<template>
  <VTagFilter :tags="filteredTags" @emitTagSelected="handleTagSelected" />
  <section class="project-container">
    <VCard v-for="project in filteredProjects" :card="project" :key="project.id"></VCard>
  </section>
</template>

<style scoped lang="scss">
@import '../../assets/sass/abstracts/mixin';

.project-container {
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  padding-block: 1.6rem;
  padding-inline: 1.6rem;
  border: 2px solid rgba(230, 230, 230, 0.6);
  background-color: var(--color-background-soft);

  :deep(article) {
    h3 {
      color: var(--color-text);
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 2.4rem;
    }

    p {
      color: var(--color-text-black-60);

      font-style: normal;
      font-weight: 400;
      //line-height: 1.6rem;
    }
    .tag-container,
    .link-icon-container {
      span {
        display: inline-block;
        padding-block: 0.1rem;
        padding-inline: 0.8rem;
        border-radius: 16px;
        background-color: #e6e6e6;

        color: var(--color-text-black-60);
        font-size: 1.6rem;
        font-weight: 400;
      }
    }

    .link-icon-container {
      span {
        color: var(--color-text);
        font-size: 2.4rem;
        cursor: pointer;
      }
    }
  }
}
</style>
