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

  <div class="project-container">
    <template v-if="filteredProjects.length">
      <VCard v-for="project in filteredProjects" :card="project" :key="project.id"></VCard>
    </template>
    <template v-else>
      <p>No projects were found.</p>
    </template>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/sass/abstracts/mixin';

.project-container {
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  padding-block: 1.6rem;
  padding-inline: 1.6rem;
  background: color-mix(in srgb, var(--vt-c-complement) 40%, transparent);
  border-radius: 16px;

  :deep(article) {
    h3 {
      color: var(--color-text-accent);
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 2.4rem;
    }

    p {
      font-style: normal;
      font-weight: 400;
      opacity: 0.7;
    }
    .tag-container,
    .link-icon-container {
      span {
        display: inline-block;
        padding-block: 0.1rem;
        padding-inline: 0.8rem;
        border-radius: 16px;
        background-color: color-mix(in srgb, var(--vt-c-complement) 40%, transparent);
        color: var(--color-text);
        font-size: 1.6rem;
        font-weight: 400;

        &:hover {
          color: var(--color-text-accent);
        }

        a {
          color: var(--color-text);
          cursor: default;
        }
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
