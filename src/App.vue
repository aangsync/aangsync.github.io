<script setup lang="ts">
import Header from './views/layout/Header.vue'
import CloudBackground from './views/layout/CloudBackground.vue'
import HeroSection from './views/sections/HeroSection/HeroSection.vue'
import AboutSection from './views/sections/AboutSection/AboutSection.vue'
import ExperienceSection from './views/sections/ExperienceSection/ExperienceSection.vue'
import ProjectsSection from './views/sections/ProjectsSection/ProjectsSection.vue'
import ContactSection from './views/sections/ContactSection/ContactSection.vue'
import { useClouds } from './composables/useClouds'
const { cloudsEnabled } = useClouds()
</script>

<template>
  <CloudBackground :enabled="cloudsEnabled" />
  <div class="app">
    <Header />
    <main class="app__main">
      <section id="hero" class="app__section app__section--hero"><HeroSection /></section>
      <section id="about" class="app__section app__section--about"><AboutSection /></section>
      <section id="experience" class="app__section app__section--experience">
        <ExperienceSection />
      </section>
      <section id="projects" class="app__section app__section--projects">
        <ProjectsSection />
      </section>
      <section id="contact" class="app__section app__section--contact"><ContactSection /></section>
    </main>
  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    flex: 1 0 auto;
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &__section {
    width: 100%;
  }
}

nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .app__header {
    padding-right: calc(var(--section-gap, 2rem) / 2);
  }
}
</style>
