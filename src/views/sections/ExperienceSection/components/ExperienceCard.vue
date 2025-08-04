<template>
  <div class="experience-card">
    <div class="experience-card__header">
      <div>
        <div class="experience-card__role">{{ experience.role }}</div>
        <div class="experience-card__company">{{ experience.company }}</div>
      </div>
      <div class="experience-card__period">{{ experience.period }}</div>
    </div>
    <div class="experience-card__desc">
      {{ experience.description }}
    </div>
    <div class="experience-card__tags">
      <span v-for="tag in experience.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '@/types';

defineProps<{
  experience: Experience;
}>();
</script>

<style scoped lang="scss">
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
    background: #30496e;
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
  background: rgb(var(--primary) / 0.13);
  color: rgb(var(--primary));
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 6px;
  padding: 0.25rem 0.85rem;
  letter-spacing: 0.01em;
  user-select: none;
}

@media (max-width: 700px) {
  .experience-card {
    padding: 1.2rem 1rem 1rem 1rem;
  }
}
</style>
