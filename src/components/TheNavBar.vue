<script setup lang="ts">
import type { IRoute } from '@/utils/tsinterfaces/IRoute'
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
    <ul class="main-menu" :class="{ 'main-menu-expanded': isMainMenuExpanded }">
      <li
        class="main-menu-item"
        v-for="route in props.routes"
        :key="route.id"
        :data-testid="route.id"
      >
        <a href="#">{{ route.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '../assets/styles/mixin';

.navbar {
  background-color: var(--color-background);
  display: flex;
  justify-content: end;
  padding-block: 2.4rem;
  padding-inline: 2.4rem;
  min-height: 6rem;
  box-shadow: 0 8px 8px -8px rgba(1, 1, 1, 0.5);

  .hamburger-menu {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 3rem;
    height: 2.2rem;
    padding-inline-start: 0;
    list-style: none;

    .hamburger-menu-line {
      height: 0.4rem;
      background-color: #2c3e50;
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
      list-style: none;
      padding-block: 1.6rem;
      padding-inline: 1.6rem;

      a {
        white-space: nowrap;
        text-decoration: none;
        user-select: none;

        &:visited {
          color: var(--color-text);
        }
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
      box-shadow: 0 10px 10px -10px rgba(1, 1, 1, 0.5);

      .main-menu-item:hover,
      .main-menu-item:active {
        background-color: var(--color-background-soft);
      }
    }

    /*TODO: DESKTOP VERSION*/
    /*.menu-item {
      list-style: none;
      min-width: 7rem;
      text-align: center;

      a {
        white-space: nowrap;
        text-decoration: none;

        &:visited {
          color: var(--color-text);
        }

        &:hover {
          font-weight: bold;
        }
      }
    }*/
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

        a {
          &:hover {
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
