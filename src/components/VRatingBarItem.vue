<script setup lang="ts">
import type { IRatingBarItem } from '@/utils/typeScriptDefinitions/IRatingBar'

interface Props {
  item: IRatingBarItem
}

const props = defineProps<Props>()

function getActiveClass(index: number, currentRating: number): string {
  return index <= currentRating ? 'active' : ''
}

function getItemBackground(index: number, currentRating: number, maxRating: number) {
  const opacity = index <= currentRating ? ((100 / maxRating) * index) / 100 : 0

  return {
    'background-color': `rgba(0, 0, 0, ${opacity})`
  }
}
</script>

<template>
  <div class="rating-bar-line">
    <span class="item-label">{{ props.item.label }}</span>
    <ul :data-testid="props.item.id">
      <li
        v-for="index in props.item.maxRating"
        :class="getActiveClass(index, props.item.currentRating)"
        :key="index"
        class="rating-bar-item"
        :style="getItemBackground(index, props.item.currentRating, props.item.maxRating)"
      ></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/sass/abstracts/mixin';

.rating-bar-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed var(--color-border-dark);
  padding-block-end: 1rem;

  .item-label {
    font-size: 1.8rem;
    font-weight: 600;
  }

  ul {
    display: flex;
    gap: 1rem;
    list-style: none;

    li {
      width: 4rem;
      height: 2rem;
      border-radius: 6px;
      border: 1px solid var(--color-border-dark);
    }
  }
}

@include for-size(tablet-landscape-up) {
  .rating-bar-line {
    ul {
      li {
        width: 6rem;
        height: 3rem;
      }
    }
  }
}
</style>
