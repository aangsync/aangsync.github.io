<template>
  <div class="project-card">
    <div class="project-card__header">
      <span class="project-card__title">{{ project.title }}</span>
      <span class="project-card__badge">{{ project.year }}</span>
    </div>
    <div class="project-card__desc">
      {{ project.description }}
    </div>
    <div class="project-card__tags">
      <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <div class="project-card__actions">
      <a 
        class="project-btn" 
        :href="project.codeUrl" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span class="project-btn__icon">💻</span> Code
      </a>
      <a 
        v-if="project.liveUrl"
        class="project-btn project-btn--live" 
        :href="project.liveUrl" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span class="project-btn__icon">🚀</span> Live
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/types';

defineProps<{
  project: Project;
}>();
</script>

<style scoped lang="scss">
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
</style>
