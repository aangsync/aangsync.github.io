<template>
  <div class="about-feature">
    <div class="about-feature__icon" :class="`about-feature__icon--${feature.iconColor}`">
      <component :is="feature.icon" :size="32" weight="duotone" />
    </div>
    <div class="about-feature__title">{{ feature.title }}</div>
    <div class="about-feature__desc">
      {{ feature.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AboutFeature } from '@/types';

defineProps<{
  feature: AboutFeature;
}>();
</script>

<style scoped lang="scss">
.about-feature {
  background: rgb(var(--background) / 0.6);
  border: 2px solid rgb(var(--primary) / 0.7);
  border-radius: 12px;
  padding: 2rem 1.5rem 1.5rem 1.5rem;

  flex: 1 1 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 16px rgb(var(--primary) / 0.04);
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
  pointer-events: none;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-bottom: 1.2rem;
    font-size: 2rem;
    background: rgb(var(--primary) / 0.08);

    &--blue {
      background: #22334d;
      color: #4fc3f7;
    }
    &--cyan {
      background: #1e2e3e;
      color: #00bcd4;
    }
    &--teal {
      background: #1e3a34;
      color: #26ffe6;
    }
  }
  &__title {
    font-size: 1.15rem;
    font-weight: 600;
    color: rgb(var(--foreground));
    margin-bottom: 0.5rem;
    text-align: center;
  }
  &__desc {
    font-size: 1rem;
    color: rgb(var(--foreground));
    opacity: 0.7;
    text-align: center;
    line-height: 1.5;
  }
}
</style>
