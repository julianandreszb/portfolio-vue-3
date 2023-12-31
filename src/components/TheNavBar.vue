<script setup lang="ts">
import type { IRoute } from '@/utils/typeScriptDefinitions/IRoute'
import { ref } from 'vue'

interface Props {
  routes?: Array<IRoute>
}

const props = withDefaults(defineProps<Props>(), {
  routes: () => []
})

const isHamburgerMenuExpanded = ref(false)
const isMainMenuExpanded = ref(false)

const toggleMainMenu = function () {
  isHamburgerMenuExpanded.value = !isHamburgerMenuExpanded.value
  isMainMenuExpanded.value = !isMainMenuExpanded.value
}

const defaultMenu = props.routes.length ? props.routes[0].id : ''
const selectedMenu = ref(defaultMenu)
const setActiveMenu = function (routeId: string) {
  selectedMenu.value = routeId
}

function onMenuSelected(routeId: string) {
  setActiveMenu(routeId)

  if (isHamburgerMenuExpanded.value) {
    toggleMainMenu()
  }
}
</script>

<template>
  <nav class="navbar">
    <ul
      class="hamburger-menu"
      :class="{ 'hamburger-expanded': isHamburgerMenuExpanded }"
      @click="toggleMainMenu"
    >
      <li class="hamburger-menu-line"></li>
      <li class="hamburger-menu-line"></li>
      <li class="hamburger-menu-line"></li>
    </ul>
    <div class="main-menu" :class="{ 'main-menu-expanded': isMainMenuExpanded }">
      <router-link
        class="main-menu-item"
        v-for="route in props.routes"
        :key="route.id"
        :class="{ active: selectedMenu === route.id }"
        :to="{ name: 'home', hash: route.hash }"
        @click="onMenuSelected(route.id)"
      >
        {{ route.label }}
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '../assets/sass/abstracts/mixin';

.navbar {
  position: sticky;
  top: 0;
  background-color: var(--color-background);
  display: flex;
  justify-content: end;
  padding-block: 2.4rem;
  padding-inline: 2.4rem;
  min-height: 6rem;
  z-index: 100;

  .hamburger-menu {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 3rem;
    height: 2.2rem;
    padding-inline-start: 0;
    list-style: none;
    cursor: pointer;

    &:hover > .hamburger-menu-line {
      background-color: var(--color-text);
    }

    .hamburger-menu-line {
      height: 0.4rem;
      background-color: var(--color-text-complement);
      border-radius: 4px;
    }

    &.hamburger-expanded {
      .hamburger-menu-line {
        width: 2rem;
      }

      .hamburger-menu-line:first-child {
        display: none;
      }

      .hamburger-menu-line:nth-child(2) {
        transform: rotate(45deg) translateX(8px) translateY(6px);
      }

      .hamburger-menu-line:last-child {
        transform: rotate(-45deg) translateY(1px);
      }
    }
  }

  .main-menu {
    display: none;
    padding-inline: 0;

    .main-menu-item {
      padding-block: 1.6rem;
      padding-inline: 1.6rem;
      white-space: nowrap;
      text-decoration: none;
      user-select: none;
      color: var(--color-text-complement);

      &:visited {
        color: var(--color-text-complement);
      }
    }

    &.main-menu-expanded {
      background-color: var(--color-background);
      display: flex;
      flex-direction: column;
      max-width: 1240px;
      position: absolute;
      right: 0;
      top: 7rem;
      width: 100%;
      border-bottom: 2px solid var(--color-text-complement);
      padding-block-end: 1.6rem;

      .main-menu-item:hover {
        color: var(--color-text);
      }
      .main-menu-item:active {
        color: var(--color-text);
      }
    }
  }

  @include for-size(tablet-portrait-up) {
    .hamburger-menu {
      display: none;
    }

    .main-menu {
      display: flex;
      gap: 3.6rem;
      text-align: center;

      .main-menu-item {
        padding-block: 0;
        padding-inline: 0;
        min-width: 7rem;

        &:hover {
          font-weight: bold;
        }

        &.active {
          color: var(--color-text);
          font-weight: bold;
          border-bottom: solid 4px var(--color-text-accent);
        }
      }
    }
  }
}
</style>
