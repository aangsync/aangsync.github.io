<template>
  <section class="experience-section">
    <h2 class="experience-section__title">Experience</h2>
    <p class="experience-section__subtitle">
      My professional journey in software development and engineering.
    </p>
    <div class="experience-section__list">
      <ExperienceCard 
        v-for="experience in experiences" 
        :key="`${experience.company}-${experience.role}`" 
        :experience="experience" 
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ExperienceCard from './components/ExperienceCard.vue';
import type { Experience } from '@/types';

const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Dirt Legal',
    period: '2024 – Present',
    description: 'Developed and maintained reusable Vue 3 UI components for a product-level e-commerce platform. Independently led development of custom Shopify features and proactively communicated with stakeholders to gather details, clarify requirements, and ensure cross-functional alignment.',
    tags: ['C#', 'Vue.js', 'TypeScript', 'Bootstrap', 'CSS', 'Liquid']
  }
  // Uncomment and modify these as needed:
  // {
  //   role: 'Full Stack Developer',
  //   company: 'Dolor Sit Ltd',
  //   period: '2020 – 2022',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur.',
  //   tags: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'GCP']
  // },
  // {
  //   role: 'Frontend Developer',
  //   company: 'Amet Startup',
  //   period: '2019 – 2020',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.',
  //   tags: ['JavaScript', 'React', 'CSS3', 'HTML5', 'Firebase']
  // }
];
</script>

<style scoped lang="scss">
.experience-section {
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
    max-width: 900px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto;
  }
}

@media (max-width: 700px) {
  .experience-section__list {
    padding: 0 0.5rem;
  }
}
</style>
