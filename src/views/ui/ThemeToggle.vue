<template>
  <button
    class="toggle-box"
    @click="toggleTheme"
    :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
  >
    <PhMoon v-if="theme === 'dark'" :size="28" weight="duotone" />
    <PhSun v-else :size="28" weight="duotone" />
  </button>
</template>

<script setup lang="ts">
import { PhSun, PhMoon } from '@phosphor-icons/vue'
import { useTheme } from '@/composables/useTheme'
const { theme, toggleTheme } = useTheme()
</script>

<style scoped lang="scss">
.toggle-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1.5px solid hsl(var(--primary), 0.5);
  background: transparent;
  color: hsl(var(--primary));
  font-size: 1.5rem;
  cursor: pointer;
  transition:
    border-color 0.2s,
    background 0.2s;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  outline: none;
  box-sizing: border-box;
}
.toggle-box:focus,
.toggle-box:hover {
  border-color: hsl(var(--primary));
  background: hsl(var(--primary) / 0.07);
}
</style>
