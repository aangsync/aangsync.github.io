<template>
  <button
    class="toggle-box"
    @click="$emit('toggle')"
    :aria-label="enabled ? 'Disable clouds' : 'Enable clouds'"
  >
    <PhCloud v-if="enabled" :size="28" weight="duotone" />
    <PhCloudSun v-else :size="28" weight="duotone" />
  </button>
</template>

<script setup lang="ts">
import { PhCloud, PhCloudSun } from '@phosphor-icons/vue'
const props = defineProps<{ enabled: boolean }>()
</script>

<style scoped lang="scss">
.toggle-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1.5px solid rgba(var(--foreground), 0.2);
  background: transparent;
  color: rgb(var(--foreground));
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
  border-color: rgb(var(--foreground));
  background: rgb(var(--foreground) / 0.1);
}
</style>
