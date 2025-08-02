export interface ThemeState {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}
export interface CloudState {
  cloudsEnabled: boolean
  toggleClouds: () => void
}

export interface Project {
  title: string;
  year: string;
  description: string;
  tags: string[];
  codeUrl: string;
  liveUrl?: string;
}

export interface AboutFeature {
  icon: any; // Vue component
  iconColor: 'blue' | 'cyan' | 'teal';
  title: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}
