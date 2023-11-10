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
    headerTag = `<${tagName} >${tagText}</${tagName}>`
  }
  return headerTag
}
</script>

<template>
  <section :id="props.sectionId" class="v-section">
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
  </section>
</template>

<style lang="scss" scoped>
@mixin heading-tag {
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.v-section {
  display: flex;
  flex-direction: column;
  padding-block: 4rem 2.8rem;
  padding-inline: 1.6rem;
  background-color: var(--color-background);
  border-top: solid 1px var(--color-border-gray-light);
  gap: 1rem; /* 3rem > phone */

  //https://vuejs.org/api/sfc-css-features.html#scoped-css

  :deep(.opening-tag) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      @include heading-tag;
    }
  }
  :deep(.closing-tag) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      @include heading-tag;
      color: var(--vt-c-gray);
      text-align: right;
    }
  }
}
</style>
