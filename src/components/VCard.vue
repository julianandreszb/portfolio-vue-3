<script setup lang="ts">
import type { ICard } from '@/utils/typeScriptDefinitions/ICard'
import VTag from '@/components/VTag.vue'

defineProps<{ card: ICard }>()
</script>

<template>
  <article>
    <h3>{{ card.title }}</h3>
    <p>{{ card.description }}</p>
    <div class="tag-container" v-if="card.tags">
      <VTag v-for="tag in card.tags" :tag="tag" :key="tag.id" />
    </div>
    <div>
      <span>Git</span>
      <span>Demo</span>
    </div>
  </article>
</template>

<style scoped lang="scss">
article {
  background-color: var(--color-background);
  padding-block: 1.6rem;
  padding-inline: 1.6rem;
  border-radius: 16px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);

  .tag-container {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
  }
}
</style>
