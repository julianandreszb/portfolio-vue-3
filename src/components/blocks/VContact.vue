<script setup lang="ts">
import type { IContact } from '@/utils/typeScriptDefinitions/IContact'
import appConfig from '../../../app.config'
const { contact }: { contact: IContact } = appConfig.sections
const currentDate = new Date()
</script>

<template>
  <footer>
    <h3>{{ contact.title }}</h3>
    <address>
      <span>
        <i class="bi-envelope-heart-fill"></i>
        <a :href="`mailto:${contact.email}`">&nbsp;{{ contact.email }}</a>
      </span>
      <div class="contact-social-media">
        <span v-for="mediaLink of contact.socialMedia" :key="mediaLink.id">
          <i v-if="mediaLink.icon" :class="mediaLink.icon.class"></i>
          <a target="_blank" :href="mediaLink.url">&nbsp;{{ mediaLink.label }}</a>
        </span>
      </div>
    </address>
    <h4>© {{ currentDate.getFullYear() }} {{ contact.copyright }}</h4>
  </footer>
</template>

<style scoped lang="scss">
footer {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  a {
    text-decoration: none;
    user-select: none;
    color: var(--color-text);
  }

  span {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  h4 {
    padding-block: 4rem;
    color: var(--color-text);
  }

  address {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .contact-social-media {
    display: flex;
    gap: 1.6rem;
  }
}
</style>
