<script setup lang="ts">
import { EnumHeaders } from '@/utils/typeScriptDefinitions/EnumHeaders'

type typeHeaderTag = {
  tagContent: string
  tagName: EnumHeaders
}

const props = defineProps<{
  sectionId: string
  headerTag?: typeHeaderTag
}>()

function getHeaderTag(tagName: string, tagContent: string, isClosingTag = false) {
  let headerTag = ''
  if (tagContent) {
    const tagText = isClosingTag ? `&lt;/${tagContent}&gt;` : `&lt;${tagContent}&gt;`
    headerTag = `${tagText}`
  }
  return headerTag
}
</script>

<template>
  <div :id="props.sectionId" class="v-section">
    <span
      class="opening-tag"
      v-if="props.headerTag?.tagName && props.headerTag?.tagContent"
      v-html="getHeaderTag(props.headerTag.tagName, props.headerTag.tagContent)"
    ></span>
    <slot></slot>
    <span
      class="closing-tag"
      v-if="props.headerTag?.tagName && props.headerTag?.tagContent"
      v-html="getHeaderTag(props.headerTag.tagName, props.headerTag.tagContent, true)"
    ></span>
  </div>
</template>

<style lang="scss" scoped>
@mixin heading-tag {
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: var(--vt-c-complement);
}

.v-section {
  display: flex;
  flex-direction: column;
  padding-block: 4rem 2.8rem;
  padding-inline: 1.6rem;
  background-color: var(--color-background);
  gap: 1rem;

  :deep(span) {
    &.opening-tag {
      @include heading-tag;
    }
    &.closing-tag {
      @include heading-tag;
      opacity: 0.4;
      text-align: right;
    }
  }
}
</style>
