<template>
  <section class="contact-section">
    <div class="contact-section__heading">
      <h2>Get In Touch</h2>
    </div>
    <div class="contact-section__content">
      <div class="contact-socials">
        <a href="https://github.com/aangsync" target="_blank" aria-label="GitHub" rel="noopener">
          <svg
          width="32"
          height="32"
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
      >
      <svg
      width="32"
            height="32"
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
    </div>
    <p class="contact-methods">If you like my work at all or just want to say hi, feel free to reach out through any of these platforms, or send me an email directly at 
      <a href="mailto:albertang99@gmail.com" class="email-link">albertang99@gmail.com</a>
    </p>
  </div>
  </section>
</template>

<style scoped lang="scss">
.contact-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1.5rem;

  &__heading {
    text-align: center;
    margin-bottom: 1rem;

    h2 {
      font-size: 2.4rem;
      font-weight: 700;
      color: rgb(var(--foreground));
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1.1rem;
      color: rgb(var(--foreground));
      opacity: 0.7;
      margin: 0 auto;
      max-width: 600px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    align-items: center;
  }
}

.contact-socials {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(var(--background) / 0.6);

    transition: all 0.3s ease;
    text-decoration: none;

    svg {
      stroke: rgb(var(--foreground));
      opacity: 0.8;
      transition: all 0.3s ease;
    }

    &:hover {
      background: rgb(var(--primary) / 0.1);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgb(var(--primary) / 0.15);

      svg {
        stroke: rgb(var(--primary));
        opacity: 1;
      }
    }
  }
}

.contact-methods {
  text-align: center;
  font-size: 1.1rem;
  color: rgb(var(--foreground));
  opacity: 0.8;
  line-height: 1.6;
  max-width: 500px;

  .email-link {
    color: rgb(var(--primary));
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }
}

@media (max-width: 700px) {
  .contact-section {
    padding: 3rem 1.5rem;

    &__heading {
      margin-bottom: 2rem;

      h2 {
        font-size: 2rem;
      }
    }
  }
  
  .contact-socials {
    gap: 1.5rem;

    a {
      width: 40px;
      height: 40px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .contact-methods {
    font-size: 1rem;
  }
}

@media (max-width: 500px) {
  .contact-socials {
    gap: 1rem;

    a {
      width: 48px;
      height: 48px;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
