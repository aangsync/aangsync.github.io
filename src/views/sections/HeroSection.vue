<template>
  <section class="hero-section">
    <h2 class="hero-section__title">Albert Ang</h2>

    <h2 class="hero-section__subtitle">Full Stack Developer &amp; Software Engineer</h2>
    <p class="hero-section__description">
      I build accessible and mobile-friendly web applications that cater to diverse audiences.
    </p>
    <div class="hero-section__actions">
      <a href="#projects" class="btn btn-primary">View My Work</a>
      <a href="#contact" class="btn btn-outline">Get In Touch</a>
    </div>
    <div class="hero-section__socials">
      <a href="https://github.com/aangsync" target="_blank" aria-label="GitHub" rel="noopener"
        ><svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
          />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/albert-ang/"
        target="_blank"
        aria-label="LinkedIn"
        rel="noopener"
        ><svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
      <a href="mailto:albertang99@gmail.com" aria-label="Email"
        ><svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 6-10 7L2 6" />
        </svg>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 76px);
  text-align: center;
  margin-top: 0;
  padding-bottom: 76px;

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

  &__socials {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 0.5rem;

    svg {
      stroke: #fff;
      opacity: 0.85;
      transition:
        stroke 0.2s,
        opacity 0.2s;
    }
    a:hover svg {
      stroke: rgb(var(--primary));
      opacity: 1;
    }
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
import Logo from '../layout/Logo.vue'
</script>
