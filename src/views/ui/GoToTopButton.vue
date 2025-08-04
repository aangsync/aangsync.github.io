<template>
  <Transition name="fade">
    <button
      v-if="isVisible"
      class="go-to-top"
      @click="scrollToTop"
      aria-label="Go to top"
    >
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

function checkScrollPosition() {
  const aboutSection = document.getElementById('about')
  if (aboutSection) {
    const aboutTop = aboutSection.offsetTop
    const scrollPosition = window.scrollY
    isVisible.value = scrollPosition > aboutTop
  }
}

function scrollToTop() {
  const heroSection = document.getElementById('hero')
  if (heroSection) {
    heroSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition)
  checkScrollPosition() // Check initial position
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollPosition)
})
</script>

<style scoped lang="scss">
.go-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgb(var(--primary));
  color: rgb(var(--primary-foreground));
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgb(var(--primary) / 0.25);
  z-index: 200;
  transition:
    background 0.2s,
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    background: rgb(var(--primary) / 0.9);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgb(var(--primary) / 0.35);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: translateY(-1px);
  }
}

// Transition animations
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}

@media (max-width: 768px) {
  .go-to-top {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 44px;
    height: 44px;
  }
}
</style>
