<template>
  <section class="experience-section">
    <h2 class="experience-section__title">Experience</h2>
    <p class="experience-section__subtitle">
      My professional journey in software development and engineering.
    </p>
    <div class="experience-section__list">
      <div class="experience-card">
        <div class="experience-card__header">
          <div>
            <div class="experience-card__role">Software Engineer</div>
            <div class="experience-card__company">Dirt Legal</div>
          </div>
          <div class="experience-card__period">2024 – Present</div>
        </div>
        <div class="experience-card__desc">
          Developed and maintained reusable Vue 3 UI components for a product-level 
          e-commerce platform. Independently led development of custom Shopify features 
          and proactively communicated with stakeholders to gather details, clarify 
          requirements, and ensure cross-functional alignment.
        </div>
        <div class="experience-card__tags">
          <span class="tag">C#</span>
          <span class="tag">Vue.js</span>
          <span class="tag">TypeScript</span>
          <span class="tag">Bootstrap</span>
          <span class="tag">CSS</span>
          <span class="tag">Liquid</span>
        </div>
      </div>
      <!-- <div class="experience-card">
        <div class="experience-card__header">
          <div>
            <div class="experience-card__role">Full Stack Developer</div>
            <div class="experience-card__company">Dolor Sit Ltd</div>
          </div>
          <div class="experience-card__period">2020 – 2022</div>
        </div>
        <div class="experience-card__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt
          consectetur.
        </div>
        <div class="experience-card__tags">
          <span class="tag">Vue.js</span>
          <span class="tag">Python</span>
          <span class="tag">PostgreSQL</span>
          <span class="tag">Redis</span>
          <span class="tag">GCP</span>
        </div>
      </div>
      <div class="experience-card">
        <div class="experience-card__header">
          <div>
            <div class="experience-card__role">Frontend Developer</div>
            <div class="experience-card__company">Amet Startup</div>
          </div>
          <div class="experience-card__period">2019 – 2020</div>
        </div>
        <div class="experience-card__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi
          tristique senectus et netus.
        </div>
        <div class="experience-card__tags">
          <span class="tag">JavaScript</span>
          <span class="tag">React</span>
          <span class="tag">CSS3</span>
          <span class="tag">HTML5</span>
          <span class="tag">Firebase</span>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
// No logic needed
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

.experience-card {
  background: rgb(var(--background) / 0.6);
  border: 1px solid rgb(var(--primary) / 0.5);
  border-radius: 12px;
  
  padding: 2rem 2rem 1.5rem 2rem;
  box-shadow: 0 2px 16px rgb(var(--primary) / 0.04);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:hover {
    border-color: rgb(var(--primary) / 0.18);
    box-shadow: 0 4px 32px rgb(var(--primary) / 0.08);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }
  &__role {
    font-size: 1.15rem;
    font-weight: 600;
    color: rgb(var(--foreground));
    margin-bottom: 0.2rem;
  }
  &__company {
    font-size: 1.05rem;
    color: rgb(var(--foreground) / 0.5);
    font-weight: 500;
    margin-bottom: 0.1rem;
  }
  &__period {
    font-size: 0.98rem;
    color: #4fc3f7;
    background: rgb(var(--primary) / 0.07);
    border-radius: 8px;
    padding: 0.3rem 1.1rem;
    font-weight: 500;
    align-self: flex-start;
    white-space: nowrap;
  }
  &__desc {
    color: rgb(var(--foreground));
    opacity: 0.85;
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
  }
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
}

.tag {
  display: inline-block;
  background: rgb(var(--primary) / 0.45);
  color: rgb(var(--primary-foreground));
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 6px;
  padding: 0.25rem 0.85rem;
  letter-spacing: 0.01em;
  user-select: none;
}

@media (max-width: 700px) {
  .experience-section__list {
    padding: 0 0.5rem;
  }
  .experience-card {
    padding: 1.2rem 1rem 1rem 1rem;
  }
}
</style>
