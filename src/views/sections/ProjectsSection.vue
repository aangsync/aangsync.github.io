<template>
  <section class="projects-section">
    <h2 class="projects-section__title">Projects</h2>
    <p class="projects-section__subtitle">
      A showcase of my recent work and contributions to the tech community.
    </p>
    <div class="projects-section__list">
      <div class="project-card">
        <div class="project-card__header">
          <span class="project-card__title">E-Commerce Dashboard</span>
          <span class="project-card__badge">2024</span>
        </div>
        <div class="project-card__desc">
          Developed an full stack content management system with user
          authentication, API endpoint integration and protection, and
          a responsive frontend interface.
        </div>
        <div class="project-card__tags">
          <span class="tag">MySQL</span>
          <span class="tag">Flask</span>
          <span class="tag">JavaScript</span>
          <span class="tag">HTML</span>
          <span class="tag">CSS</span>
        </div>
        <div class="project-card__actions">
          <a class="project-btn" href="https://github.com/aangsync/ecommerce-demo/tree/master" target="_blank" rel="noopener noreferrer">
            <span class="project-btn__icon">💻</span> Code
          </a>
        </div>
      </div>
      <div class="project-card">
        <div class="project-card__header">
          <span class="project-card__title">Game Pigeon Word Hunt Solver</span>
          <span class="project-card__badge">2023</span>
        </div>
        <div class="project-card__desc">
          Developed a solver for Game Pigeon's Word Hunt game, utilizing 
          DFS and Trie nodes to optimize word search and improve 
          user experience.
        </div>
        <div class="project-card__tags">
          <span class="tag">Python</span>
        </div>
        <div class="project-card__actions">
          <a class="project-btn" href="https://github.com/aangsync/Word-Hunt-Solver" target="_blank" rel="noopener noreferrer">
            <span class="project-btn__icon">💻</span> Code
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No logic needed
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

.project-card {
  background: rgb(var(--background) / 0.6);
  border: 1px solid rgb(var(--primary) / 0.5);
  border-radius: 12px;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  
  min-width: 320px;
  max-width: 370px;
  flex: 1 1 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 2px 16px rgb(var(--primary) / 0.04);
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
  pointer-events: none;

  &__header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.7rem;
    width: 100%;
  }
  &__title {
    font-size: 1.18rem;
    font-weight: 600;
    color: rgb(var(--foreground));
    flex: 1 1 auto;
  }
  &__badge {
    background: #22334d;
    color: #4fc3f7;
    font-size: 0.95rem;
    font-weight: 500;
    border-radius: 8px;
    padding: 0.2rem 0.9rem;
    margin-left: 0.5rem;
    user-select: none;
  }
  &__desc {
    color: rgb(var(--foreground));
    opacity: 0.85;
    font-size: 1.05rem;
    margin-bottom: 1.1rem;
    min-height: 56px;
  }
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.2rem;
  }
  &__actions {
    display: flex;
    gap: 0.7rem;
    margin-top: auto;
    position: relative;
    z-index: 20;
  }
}

.tag {
  display: inline-block;
  background: rgb(var(--primary) / 0.13);
  color: rgb(var(--primary));
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 6px;
  padding: 0.25rem 0.85rem;
  letter-spacing: 0.01em;
  user-select: none;
}

.project-btn {
  display: flex;
  align-items: center;
  gap: 0.4em;
  background: rgb(var(--primary) / 0.07);
  color: rgb(var(--foreground));
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  padding: 0.45rem 1.1rem;
  text-decoration: none;
  cursor: pointer;
  transition:
    background 0.18s,
    color 0.18s,
    transform 0.1s;
  pointer-events: auto;
  position: relative;
  z-index: 10;

  &:hover {
    background: rgb(var(--primary) / 0.15);
    color: rgb(var(--primary));
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &__icon {
    font-size: 1.15em;
    margin-right: 0.2em;
  }
}
.project-btn--live {
  background: #4fc3f7;
  color: #22334d;

  &:hover {
    background: #35b6f2;
    color: #fff;
    transform: translateY(-1px);
  }
}

@media (max-width: 1100px) {
  .projects-section__list {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  .project-card {
    min-width: 280px;
    max-width: 100%;
    flex: 1 1 320px;
  }
}
@media (max-width: 700px) {
  .projects-section__list {
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
  }
  .project-card {
    width: 100%;
    min-width: 0;
    max-width: 100%;
  }
}
</style>
