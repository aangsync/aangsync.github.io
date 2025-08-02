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
      <div class="about-feature">
        <div class="about-feature__icon about-feature__icon--blue">
          <PhCode :size="32" weight="duotone" />
        </div>
        <div class="about-feature__title">Full Stack Development</div>
        <div class="about-feature__desc">
          I have experience in building full stack applications using a variety of technologies, including C#, Vue.js, and TypeScript.
        </div>
      </div>
      <div class="about-feature">
        <div class="about-feature__icon about-feature__icon--cyan">
          <PhDevices :size="32" weight="duotone" />
        </div>
        <div class="about-feature__title">Mobile-Friendly Design</div>
        <div class="about-feature__desc">
          I have experience in designing and implementing mobile-friendly applications using responsive design principles and modern CSS frameworks.
        </div>
      </div>
      <div class="about-feature">
        <div class="about-feature__icon about-feature__icon--teal">
          <PhLightning :size="32" weight="duotone" />
        </div>
        <div class="about-feature__title">Async Programming</div>
        <div class="about-feature__desc">
          I have experience in building asynchronous applications using modern JavaScript frameworks and libraries.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhCode, PhDevices, PhLightning } from '@phosphor-icons/vue'
</script>

<style scoped lang="scss">
.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 4rem 0;

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

.about-feature {
  background: rgb(var(--background) / 0.6);
  border: 1px solid rgb(var(--primary) / 0.5);
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

@media (max-width: 900px) {
  .about-section__features {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
  .about-feature {
    max-width: 100%;
    width: 100%;
  }
}
</style>
