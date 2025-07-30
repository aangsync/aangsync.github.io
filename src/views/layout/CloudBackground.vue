<template>
  <div v-if="enabled" class="cloud-bg">
    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ enabled: boolean }>()
</script>

<style lang="scss" scoped>
@import '@/styles/animations.scss';
.cloud-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
.cloud {
  position: absolute;
  background: hsl(var(--primary) / 0.1);
  border-radius: 100px;
  animation: float 20s ease-in-out infinite;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: hsl(var(--primary) / 0.1);
    border-radius: 100px;
  }
}
.cloud-1 {
  width: 100px;
  height: 40px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}
.cloud-2 {
  width: 80px;
  height: 30px;
  top: 50%;
  right: 20%;
  animation-delay: 7s;
}
.cloud-3 {
  width: 120px;
  height: 50px;
  bottom: 30%;
  left: 60%;
  animation-delay: 14s;
}
</style>
