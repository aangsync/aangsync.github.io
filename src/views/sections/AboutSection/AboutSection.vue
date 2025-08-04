<template>
  <section class="about-section">
    <div class="about-section__content">
      <h2 class="about-section__title">About Me</h2>
      <p class="about-section__desc">
        Currently, I'm a software engineer at Dirt Legal specializing in building beautiful solutions 
        for a smooth customer experience. I've contributed to the creation and maintenance of various
        aspects of the pre- and post-checkout experience while working cross-functionally, ensuring a
        seamless and intuitive workflow.
        </p>
        <br />
        <p class="about-section__desc">
          When I'm not coding, I'm probably leveling up my calisthenics skills or cooking.

        </p>
      
    </div>
    <div class="about-section__features">
      <AboutFeatureCard 
        v-for="feature in features" 
        :key="feature.title" 
        :feature="feature" 
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhCode, PhDevices, PhLightning } from '@phosphor-icons/vue';
import AboutFeatureCard from './components/AboutFeatureCard.vue';
import type { AboutFeature } from '@/types';

const features: AboutFeature[] = [
  {
    icon: PhCode,
    iconColor: 'blue',
    title: 'Full Stack Development',
    description: 'I have experience in building full stack applications using a variety of technologies, including C#, Vue.js, and TypeScript.'
  },
  {
    icon: PhDevices,
    iconColor: 'cyan',
    title: 'Mobile-Friendly Design',
    description: 'I have experience in designing and implementing mobile-friendly applications using responsive design principles and modern CSS frameworks.'
  },
  {
    icon: PhLightning,
    iconColor: 'teal',
    title: 'Async Programming',
    description: 'I have experience in building asynchronous applications using modern JavaScript frameworks and libraries.'
  }
];
</script>

<style scoped lang="scss">
.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1.5rem;

  @media (min-width: 768px) {
    padding: 4rem;
  }

  &__content {
    margin: 0 auto 2.5rem auto;
    text-align: center;
  }
  &__title {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: rgb(var(--foreground));
  }
  &__desc {
    font-size: 1.15rem;
    color: rgb(var(--foreground));
    opacity: 0.8;
    margin: 0 auto;
    line-height: 1.7;
  }
  &__features {
    display: flex;
    gap: 2rem;
    justify-content: center;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  }
}

@media (max-width: 900px) {
  .about-section__features {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
}
</style>
