<script setup lang="ts">
import VTagFilter from '@/components/VTagFilter.vue'
import appConfig from '../../../app.config.json'
import { reactive } from 'vue'
import type { ITag, TagFilterOperation } from '@/utils/typeScriptDefinitions/ITag'
import VCard from '@/components/VCard.vue'
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
  <section class="project-container">
    <VCard
      :card="{
        title: 'Test',
        description: 'description description description',
        tags: [
          {
            id: 'javascript',
            label: 'JavaScript',
            isActive: false
          },
          {
            id: 'html',
            label: 'HTML',
            isActive: false
          }
        ],
        linkIcons: [
          {
            id: 'git',
            label: '',
            style: {
              'background-color': 'transparent'
            },
            icon: {
              class: 'bi-github'
            },
            isActive: false
          },
          {
            id: 'demo',
            label: '',
            style: {
              'background-color': 'transparent'
            },
            icon: {
              class: 'bi-box-arrow-up-right'
            },
            isActive: false
          }
        ]
      }"
    />
  </section>
</template>

<style scoped lang="scss">
@import '../../assets/sass/abstracts/mixin';

.project-container {
  display: flex;
  //align-items: flex-start;
  //align-content: flex-start;
  gap: 1.6rem;
  //flex-shrink: 0;
  //align-self: stretch;
  flex-wrap: wrap;
  border: 2px solid rgba(230, 230, 230, 0.6);
  background-color: var(--color-background-soft);
  padding-block: 1.6rem;
  padding-inline: 1.6rem;

  :deep(article) {
    h3 {
      color: var(--color-text);
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 1.6rem;
    }

    p {
      color: var(--color-text-black-60);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.6rem;
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
