<template>
  <section class="contact-section">
    <div class="contact-section__heading">
      <h2>Get In Touch</h2>
      <p>If you like my work at all or just want to say hi, feel free to send me a message!</p>
    </div>
    <div class="contact-section__content">
      <form class="contact-form" autocomplete="off">
        <div class="contact-form__row">
          <div class="contact-form__field">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Your name" />
          </div>
          <div class="contact-form__field">
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="your.email@example.com" />
          </div>
        </div>
        <div class="contact-form__field">
          <label for="subject">Subject</label>
          <input id="subject" type="text" placeholder="What's this about?" />
        </div>
        <div class="contact-form__field">
          <label for="message">Message</label>
          <textarea id="message" rows="5" placeholder="Tell me about your project..."></textarea>
        </div>
        <button class="contact-form__submit" type="submit">Send Message</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
// No logic needed for static layout
</script>

<style scoped lang="scss">
.contact-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 4rem 0;

  &__heading {
    text-align: center;
    margin-bottom: 2.5rem;

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
    max-width: 1400px;
    align-items: center;
    padding: 0 2vw;
  }
}

.contact-form {
  flex: 1 1 520px;
  min-width: 320px;
  max-width: 750px;
  background: rgb(var(--background) / 0.6);
  border-radius: 12px;
  padding: 2.2rem 2rem 2rem 2rem;
  box-shadow: 0 2px 16px rgb(var(--primary) / 0.04);
  border: 1px solid rgb(var(--primary) / 0.5);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;

  &__row {
    display: flex;
    gap: 1.2rem;
    margin-bottom: 0.5rem;
  }
  &__field {
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    margin-bottom: 0.5rem;

    label {
      font-size: 1.01rem;
      color: rgb(var(--foreground));
      font-weight: 500;
      margin-bottom: 0.35rem;
    }
    input,
    textarea {
      background: rgb(var(--background) / 0.35);
      border: 1.5px solid rgb(var(--primary) / 0.13);
      border-radius: 7px;
      padding: 0.7rem 1rem;
      color: rgb(var(--foreground));
      font-size: 1rem;
      font-family: inherit;
      transition:
        border-color 0.18s,
        background 0.18s;
      outline: none;
      resize: none;
    }
    input:focus,
    textarea:focus {
      border-color: #4fc3f7;
      background: rgb(var(--primary) / 0.07);
    }
    textarea {
      min-height: 120px;
      max-height: 260px;
    }
  }
  &__submit {
    margin-top: 1.2rem;
    background: #4fc3f7;
    color: #22334d;
    font-size: 1.08rem;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    padding: 0.85rem 0;
    width: 100%;
    cursor: pointer;
    transition:
      background 0.18s,
      color 0.18s;
    box-shadow: 0 2px 12px rgb(var(--primary) / 0.08);
  }
  &__submit:hover {
    background: #35b6f2;
    color: #fff;
  }
}

@media (max-width: 1100px) {
  .contact-section__content {
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    padding: 0 1vw;
  }
  .contact-form {
    max-width: 100%;
    width: 100%;
  }
}
@media (max-width: 700px) {
  .contact-section {
    padding: 2.5rem 0 2.5rem 0;
  }
  .contact-section__heading h2 {
    font-size: 2rem;
  }
  .contact-section__content {
    gap: 1.5rem;
    padding: 0 0.5vw;
  }
  .contact-form {
    padding: 1.2rem 1rem 1rem 1rem;
  }
}
</style>
