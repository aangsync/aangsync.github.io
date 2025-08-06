<template>
  <header class="header" :class="{ 'header--sticky': isSticky }">
    <div class="header-section">
      <Logo @click="scrollTo('hero')" :pointer="true" class="header-section__logo" />
      
      <!-- Desktop Navigation -->
      <nav class="header-section__nav header-section__nav--desktop">
        <a @click.prevent="scrollTo('about')">About</a>
        <a @click.prevent="scrollTo('experience')">Experience</a>
        <a @click.prevent="scrollTo('projects')">Projects</a>
        <a @click.prevent="scrollTo('contact')">Contact</a>
      </nav>
      
      <!-- Desktop Toggle Icons -->
      <div class="header-section__toggle-icons header-section__toggle-icons--desktop">
        <CloudToggle :enabled="cloudsEnabled" @toggle="toggleClouds" />
        <ThemeToggle />
      </div>
      
      <!-- Mobile Hamburger Menu -->
      <button 
        class="header-section__hamburger" 
        @click="mobileMenuOpen = !mobileMenuOpen"
        :class="{ 'header-section__hamburger--open': mobileMenuOpen }"
      >
        <PhList :size="32" weight="regular" />
      </button>
    </div>
  </header>
  
  <!-- Mobile Menu Overlay -->
  <div 
    class="mobile-menu-overlay" 
    :class="{ 'mobile-menu-overlay--open': mobileMenuOpen }"
    @click="mobileMenuOpen = false"
  ></div>
  
  <!-- Mobile Menu Drawer -->
  <div class="mobile-menu-drawer" :class="{ 'mobile-menu-drawer--open': mobileMenuOpen }">
    <div class="mobile-menu-drawer__toggles">
      <CloudToggle :enabled="cloudsEnabled" @toggle="toggleClouds" />
      <ThemeToggle />
    </div>
    <nav class="mobile-menu-drawer__nav">
      <a @click.prevent="scrollTo('about'); mobileMenuOpen = false">About</a>
      <a @click.prevent="scrollTo('experience'); mobileMenuOpen = false">Experience</a>
      <a @click.prevent="scrollTo('projects'); mobileMenuOpen = false">Projects</a>
      <a @click.prevent="scrollTo('contact'); mobileMenuOpen = false">Contact</a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { PhList } from '@phosphor-icons/vue'
import Logo from './Logo.vue'
import CloudToggle from '../ui/CloudToggle.vue'
import ThemeToggle from '../ui/ThemeToggle.vue'
import { useClouds } from '@/composables/useClouds'

const { cloudsEnabled, toggleClouds } = useClouds()
const mobileMenuOpen = ref(false)
const isSticky = ref(false)

function scrollTo(section: string) {
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
}

function checkStickyPosition() {
  const heroSection = document.getElementById('hero')
  if (heroSection) {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
    const scrollPosition = window.scrollY + 76
    isSticky.value = scrollPosition >= heroBottom
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkStickyPosition)
  checkStickyPosition()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkStickyPosition)
})
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  z-index: 100;
  background: rgb(var(--background) / 0.8);
  border-bottom: 1px solid rgb(var(--foreground) / 0.25);
  width: 100%;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease-in-out;

  &--sticky {
    position: fixed;
    top: 0;
    background: rgb(var(--background) / 0.95);
    backdrop-filter: blur(12px);
    box-shadow: 0 2px 16px rgb(var(--primary) / 0.1);
  }

  @media (min-width: 768px) {
    padding: 0.5rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0.5rem 4rem;
  }

  .header-section {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1280px;

    &__logo {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex: 1;
    }

    &__nav {
      &--desktop {
        display: none;
        
        @media (min-width: 768px) {
          display: flex;
          justify-content: center;
          width: 50%;
        }
      }
    }

    &__toggle-icons {
      &--desktop {
        display: none;
        
        @media (min-width: 768px) {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex: 1;
        }
      }
    }

    &__hamburger {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      margin-left: auto;
      z-index: 1001;
      border-radius: 10px;
      color: rgb(var(--foreground));
      transition: all 0.3s ease;
      
      @media (min-width: 768px) {
        display: none;
      }

      &:hover {
        background: rgb(var(--foreground) / 0.1);
      }

      &--open {
        background: rgb(var(--foreground) / 0.1);
      }
    }
  }
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  
  @media (min-width: 768px) {
    display: none;
  }

  &--open {
    opacity: 1;
    visibility: visible;
  }
}

.mobile-menu-drawer {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background: rgb(var(--background));
  backdrop-filter: blur(8px);
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 76px 2rem 2rem 2rem;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    display: none;
  }

  &--open {
    right: 0;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 2rem;
    flex: 1;
    
    a {
      padding: 1.25rem 0;
      color: rgb(var(--foreground));
      text-decoration: none;
      font-weight: 500;
      cursor: pointer;
      border-bottom: 1px solid rgb(var(--foreground) / 0.1);
      font-size: 1.1rem;
      transition: color 0.2s ease;
      
      &:hover {
        color: rgb(var(--foreground) / 0.7);
      }
      
      &:last-child {
        border-bottom: none;
      }
    }
  }

  &__toggles {
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgb(var(--foreground) / 0.1);
  }
}

nav a {
  margin: 0 1rem;
  color: rgb(var(--foreground));
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
}
</style>
