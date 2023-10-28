<script setup lang="ts">
import type { ICard } from '@/utils/typeScriptDefinitions/ICard'
import VTag from '@/components/VTag.vue'

defineProps<{ card: ICard }>()
</script>

<template>
  <article>
    <div class="link-icon-container" v-if="card.linkIcons">
      <VTag v-for="linkIcon in card.linkIcons" :tag="linkIcon" :key="linkIcon.id" />
    </div>
    <h3>{{ card.title }}</h3>
    <p>{{ card.description }}</p>
    <div class="tag-container" v-if="card.tags">
      <VTag v-for="tag in card.tags" :tag="tag" :key="tag.id" />
    </div>
  </article>
</template>

<style scoped lang="scss">
article {
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  padding-block: 1.6rem;
  padding-inline: 1.6rem;
  border-radius: 16px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
  gap: 1.6rem;

  p::first-letter {
    text-transform: capitalize;
  }

  .tag-container,
  .link-icon-container {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
  }

  .link-icon-container {
    justify-content: right;
  }
}
</style>
