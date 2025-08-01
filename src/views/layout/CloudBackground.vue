<template>
  <div v-if="enabled" class="cloud-bg" @mousemove="onMouseMove">
    <div v-for="(cloud, i) in clouds" :key="i" class="cloud" :style="cloudStyle(i)">
      <svg viewBox="0 0 200 90" class="cloud-svg">
        <path :d="cloudPath(cloud.type)" :fill="'var(--cloud-color)'" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ enabled: boolean }>()

const clouds = [
  { base: { x: 0.08, y: 0.18, size: 280 }, type: 'full' },
  { base: { x: 0.25, y: 0.32, size: 180 }, type: 'wispy' },
  { base: { x: 0.45, y: 0.22, size: 260 }, type: 'regular' },
  { base: { x: 0.7, y: 0.15, size: 220 }, type: 'wispy' },
  { base: { x: 0.82, y: 0.5, size: 320 }, type: 'full' },
  { base: { x: 0.6, y: 0.7, size: 170 }, type: 'wispy' },
  { base: { x: 0.3, y: 0.7, size: 210 }, type: 'regular' },
  { base: { x: 0.15, y: 0.55, size: 140 }, type: 'wispy' },
  { base: { x: 0.5, y: 0.92, size: 320 }, type: 'full' },
  { base: { x: 0.85, y: 0.88, size: 180 }, type: 'regular' },
  { base: { x: 0.08, y: 0.88, size: 180 }, type: 'wispy' },
]

function cloudPath(type: string) {
  if (type === 'wispy') {
    return 'M30 70 Q50 60 80 65 Q90 45 130 55 Q160 60 170 70 Q180 80 120 80 Q80 85 30 70 Z'
  } else if (type === 'full') {
    return 'M30 75 Q20 45 70 45 Q75 20 110 35 Q120 10 150 25 Q180 25 180 55 Q200 60 170 80 Q130 95 90 80 Q60 90 30 75 Z'
  }
  return 'M40 70 Q30 50 60 50 Q65 30 100 40 Q110 20 140 35 Q170 35 170 60 Q190 65 160 80 Q120 90 80 80 Q50 80 40 70 Z'
}

const mouse = ref({ x: 0.5, y: 0.5 })

function onMouseMove(e: MouseEvent) {
  const bg = e.currentTarget as HTMLElement
  const rect = bg.getBoundingClientRect()
  mouse.value.x = (e.clientX - rect.left) / rect.width
  mouse.value.y = (e.clientY - rect.top) / rect.height
}

function cloudStyle(i: number) {
  // variability in strength of how clouds follow the cursor
  const strength = 0.08 + (i / clouds.length) * 0.18
  const c = clouds[i]
  const x = c.base.x + (mouse.value.x - 0.5) * strength
  const y = c.base.y + (mouse.value.y - 0.5) * strength
  const size = c.base.size
  return {
    left: `calc(${x * 100}% - ${size / 2}px)`,
    top: `calc(${y * 100}% - ${size / 2}px)`,
    width: `${size}px`,
    height: `${size * 0.45}px`,
    zIndex: 0,
  }
}
</script>

<style lang="scss" scoped>
@use '@/styles/animations.scss';
.cloud-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: auto;
}
.cloud {
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;
  animation: float 20s ease-in-out infinite;
}
.cloud-svg {
  width: 100%;
  height: 100%;
  display: block;
}
.cloud-bg {
  --cloud-color: hsl(210, 50%, 85%, 0.4);
}
</style>
