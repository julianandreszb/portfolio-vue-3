<script setup lang="ts">
import appConfig from '../../../app.config'
const { summary } = appConfig.sections
</script>

<template>
  <div class="summary">
    <div class="profile-photo-container">
      <img class="profile-photo" src="/profile-picture.png" alt="A developer profile picture" />
    </div>
    <div class="description-container">
      <h1 class="greeting">
        {{ summary.greeting.text }} <span class="name">{{ summary.greeting.name }}</span>
      </h1>
      <h2 class="occupation">
        {{ summary.occupation.text }}
      </h2>
      <p>{{ summary.description.text }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/sass/abstracts/mixin';

.summary {
  display: flex;
  flex-direction: column;

  .profile-photo-container {
    display: flex;
    justify-content: center;

    .profile-photo {
      width: 20rem;
      height: 20rem;
      border-radius: 100%;

      padding: 12px;
      background: linear-gradient(45deg, #f48ace 0%, #493a97 100%);
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
        color: var(--color-text-primary);
      }
    }

    .occupation {
      text-align: center;
      font-size: 4rem;
      font-weight: 700;
      color: var(--color-text-primary);
    }
  }
}

@include for-size(tablet-landscape-up) {
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
