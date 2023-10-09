<script setup lang="ts">
// import { reactive } from 'vue'

// const SUMMARY_PHOTO_URL_X1 = import.meta.env.VITE_SECTION_SUMMARY_PHOTO_URL_SIZE_X1
// const SUMMARY_PHOTO_URL_X2 = import.meta.env.VITE_SECTION_SUMMARY_PHOTO_URL_SIZE_X2
// const SUMMARY_PHOTO_URL_X3 = import.meta.env.VITE_SECTION_SUMMARY_PHOTO_URL_SIZE_X3
const SUMMARY_GREETING = import.meta.env.VITE_SECTION_SUMMARY_GREETING
const SUMMARY_GREETING_NAME = import.meta.env.VITE_SECTION_SUMMARY_GREETING_NAME
const SUMMARY_OCCUPATION = import.meta.env.VITE_SECTION_SUMMARY_OCCUPATION
const SUMMARY_DESCRIPTION = import.meta.env.VITE_SECTION_SUMMARY_DESCRIPTION

/*const summary = reactive({
  greeting: SUMMARY_GREETING,
  greeting_name: SUMMARY_GREETING_NAME,
  occupation: SUMMARY_OCCUPATION,
  description: SUMMARY_DESCRIPTION
})*/
</script>

<template>
  <div class="summary">
    <div class="profile-photo-container">
      <img class="profile-photo" src="/profile-picture.png" alt="A developer profile picture" />
    </div>
    <div class="description-container">
      <h1 class="greeting">
        {{ SUMMARY_GREETING }} <span class="name">{{ SUMMARY_GREETING_NAME }}</span>
      </h1>
      <h2 class="occupation">
        {{ SUMMARY_OCCUPATION }}
      </h2>
      <p>{{ SUMMARY_DESCRIPTION }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/abstracts/mixin';

.summary {
  display: flex;
  flex-direction: column;

  .profile-photo-container {
    display: flex;
    justify-content: center;

    .profile-photo {
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
    }
  }

  .description-container {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .greeting {
      font-size: 4rem;
      font-weight: 500;

      text-align: center;

      .name {
        font-weight: 700;
      }
    }

    .occupation {
      text-align: center;
      font-size: 4rem;
      font-weight: 700;
    }
  }
}

@include for-size(tablet-portrait-up) {
  .summary {
    flex-direction: row-reverse;

    .profile-photo-container {
      margin-inline-start: 3.2rem;
      align-items: center;
    }

    .description-container {
      .greeting {
        text-align: left;
      }

      .occupation {
        text-align: left;
      }
    }
  }
}
</style>
