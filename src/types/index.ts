export interface ThemeState {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}
export interface CloudState {
  cloudsEnabled: boolean
  toggleClouds: () => void
}
