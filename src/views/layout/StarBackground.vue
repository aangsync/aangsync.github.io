<template>
  <div v-if="isDarkMode" class="star-bg">
    <div v-for="(star, i) in stars" :key="i" class="star" :style="starStyle(star)">
      <div class="star-dot" :style="{ animationDelay: `${star.delay}s`, animationDuration: `${star.twinkleSpeed}s` }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { theme } = useTheme()
const isDarkMode = computed(() => theme.value === 'dark')

// Randomly generate stars positioned in the outer areas of the radial gradient circle
const stars = ref<Array<{
  x: number
  y: number
  size: number
  brightness: number
  delay: number
  twinkleSpeed: number
}>>([])

function generateStars() {
  const starCount = 30
  const newStars = []
  
  for (let i = 0; i < starCount; i++) {
    let x, y
    let attempts = 0
    
    do {
      x = Math.random()
      y = Math.random()
      attempts++
    } while (isInCenterCircle(x, y) && attempts < 50)
    
    newStars.push({
      x,
      y,
      size: Math.random() * 4 + 3,
      brightness: Math.random() * 0.5 + 0.5,
      delay: Math.random() * 4,
      twinkleSpeed: Math.random() * 2 + 3
    })
  }
  
  stars.value = newStars
}

// Check if a point is within the center circle area (where clouds are concentrated)
function isInCenterCircle(x: number, y: number): boolean {
  const centerX = 0.5
  const centerY = 0.5
  const radius = 0.35
  const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)
  return distance < radius
}

onMounted(() => {
  generateStars()
})

function starStyle(star: { x: number; y: number; size: number; brightness: number }) {
  return {
    left: `${star.x * 100}%`,
    top: `${star.y * 100}%`,
    width: `${star.size}px`,
    height: `${star.size}px`,
    opacity: star.brightness,
  }
}
</script>

<style lang="scss" scoped>
.star-bg {
  position: fixed;
  inset: 0;
  z-index: 1; // Behind clouds (which have z-index 0) but in front of background
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;
}

.star {
  position: absolute;
  pointer-events: none;
}

.star-dot {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: twinkle infinite ease-in-out alternate;
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
}

@keyframes twinkle {
  0% {
    opacity: 0.4;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1.1);
  }
}
</style>
