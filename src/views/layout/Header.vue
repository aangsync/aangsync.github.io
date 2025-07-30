<template>
  <header class="header">
    <div class="header-section">
      <Logo @click="scrollTo('hero')" :pointer="true" />
      <nav>
        <a @click.prevent="scrollTo('about')">About</a>
        <a @click.prevent="scrollTo('experience')">Experience</a>
        <a @click.prevent="scrollTo('projects')">Projects</a>
        <a @click.prevent="scrollTo('contact')">Contact</a>
      </nav>
      <div class="header-section__toggle-icons">
        <CloudToggle :enabled="cloudsEnabled" @toggle="toggleClouds" />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from './Logo.vue'
import CloudToggle from '../ui/CloudToggle.vue'
import ThemeToggle from '../ui/ThemeToggle.vue'
import { useClouds } from '@/composables/useClouds'

const { cloudsEnabled, toggleClouds } = useClouds()

function scrollTo(section: string) {
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  z-index: 100;
  padding: 0.5rem 10rem;
  background: hsl(var(--background) / 0.8);
  border-bottom: 1px solid rgb(38, 47, 64);

  .header-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &__toggle-icons {
      display: flex;
      align-items: center;
    }
  }
}
nav a {
  margin: 0 1rem;
  color: hsl(var(--foreground));
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
}
</style>
