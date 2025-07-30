<template>
  <span
    class="hero-section__logo"
    :style="{
      fontSize: '2.5rem',
      cursor: pointer ? 'pointer' : 'default',
    }"
  >
    <span class="hero-section__logo-tag">&lt;</span>
    <span class="hero-section__logo-name">aangsync</span>
    <span class="hero-section__logo-tag"> /&gt;</span>
  </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{ pointer?: boolean }>()

const pointer = props.pointer ?? false
</script>

<style lang="scss" scoped>
.hero-section__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-family: 'Fira Mono', 'Menlo', 'Monaco', monospace;
  margin-bottom: 0;

  &-tag {
    color: hsl(var(--foreground));
    text-shadow: 0 0 20px hsl(var(--primary) / 0.2);
  }
  &-name {
    color: hsl(var(--primary));
    font-weight: bold;
    margin: 0 0.25rem;
    text-shadow: 0 0 32px hsl(var(--primary) / 0.7);
    background: hsl(var(--primary) / 0.15);
    border-radius: 6px;
    padding: 0 0.5rem;
    box-shadow: 0 0 32px hsl(var(--primary) / 0.3);
  }
}

@media (max-width: 600px) {
  .hero-section__logo {
    font-size: 1.5rem;
  }
}
</style>
