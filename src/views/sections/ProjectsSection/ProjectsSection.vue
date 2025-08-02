<template>
  <section class="projects-section">
    <h2 class="projects-section__title">Projects</h2>
    <p class="projects-section__subtitle">
      A showcase of my recent work and contributions to the tech community.
    </p>
    <div class="projects-section__list">
      <ProjectCard 
        v-for="project in projects" 
        :key="project.title" 
        :project="project" 
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/views/sections/ProjectsSection/components/ProjectCard.vue';
import type { Project } from '@/types';

const projects: Project[] = [
  {
    title: 'E-Commerce Dashboard',
    year: '2024',
    description: 'Developed an full stack content management system with user authentication, API endpoint integration and protection, and a responsive frontend interface.',
    tags: ['MySQL', 'Flask', 'JavaScript', 'HTML', 'CSS'],
    codeUrl: 'https://github.com/aangsync/ecommerce-demo/tree/master'
  },
  {
    title: 'Game Pigeon Word Hunt Solver',
    year: '2023',
    description: 'Developed a solver for Game Pigeon\'s Word Hunt game, utilizing DFS and Trie nodes to optimize word search and improve user experience.',
    tags: ['Python'],
    codeUrl: 'https://github.com/aangsync/Word-Hunt-Solver'
  }
];
</script>

<style scoped lang="scss">
.projects-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 4rem 0;

  &__title {
    font-size: 2.4rem;
    font-weight: 700;
    color: rgb(var(--foreground));
    text-align: center;
    margin-bottom: 0.5rem;
  }
  &__subtitle {
    font-size: 1.1rem;
    color: rgb(var(--foreground));
    opacity: 0.7;
    text-align: center;
    margin-bottom: 2.5rem;
    max-width: 600px;
  }
  &__list {
    width: 100%;
    max-width: 1200px;
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
  }
}

@media (max-width: 1100px) {
  .projects-section__list {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
}
@media (max-width: 700px) {
  .projects-section__list {
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
  }
}
</style>
