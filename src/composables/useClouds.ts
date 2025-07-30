import { ref, watchEffect } from 'vue'

const cloudsEnabled = ref(localStorage.getItem('clouds-enabled') === 'true')

watchEffect(() => {
  localStorage.setItem('clouds-enabled', String(cloudsEnabled.value))
})

export function useClouds() {
  function toggleClouds() {
    cloudsEnabled.value = !cloudsEnabled.value
  }
  return { cloudsEnabled, toggleClouds }
}
