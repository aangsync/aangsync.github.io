<template>
  <section class="hero-section">
    <h2 class="hero-section__title">Albert Ang</h2>

    <h2 class="hero-section__subtitle">Full Stack Developer &amp; Software Engineer</h2>
    <p class="hero-section__description">
      Location: Miami-Fort Lauderdale Area📍
    </p>
    <div class="hero-section__actions">
      <a href="#projects" class="btn btn-primary">View My Work</a>
      <a @click="scrollToContact" class="btn btn-outline">Get In Touch</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  margin-top: 0;
  padding-top: 76px;
  padding-bottom: 2rem;

  &__title {
    font-size: 2.8rem;
    font-weight: 700;
    color: rgb(var(--foreground));
    margin-bottom: 0.5rem;
  }

  &__subtitle {
    font-size: 1.25rem;
    color: rgb(var(--foreground));
    opacity: 0.85;
    margin-bottom: 0.5rem;
  }

  &__description {
    color: rgb(var(--foreground));
    opacity: 0.7;
    margin-bottom: 2rem;
    font-size: 1.05rem;
  }

  &__actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.btn {
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid rgb(var(--primary));
  background: none;
  color: rgb(var(--primary));
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
  text-decoration: none;
  display: inline-block;
}
.btn-primary {
  background: rgb(var(--primary));
  color: rgb(var(--primary-foreground));
  box-shadow: 0 2px 16px rgb(var(--primary) / 0.15);
}
.btn-primary:hover {
  background: rgb(var(--primary) / 0.85);
}
.btn-outline {
  background: none;
  color: rgb(var(--primary));
  border: 1px solid rgb(var(--primary));
}
.btn-outline:hover {
  background: rgb(var(--primary) / 0.1);
}

@media (max-width: 600px) {
  .hero-section__subtitle {
    font-size: 1rem;
  }
  .hero-section__description {
    font-size: 0.95rem;
  }
  .btn {
    font-size: 0.95rem;
    padding: 0.5rem 1.1rem;
  }
}
</style>

<script setup lang="ts">
const scrollToContact = () => {
  const contactSection = document.querySelector('.contact-section')
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>
