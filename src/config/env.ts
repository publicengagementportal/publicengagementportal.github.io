interface Environment {
  NODE_ENV: 'development' | 'production' | 'test'
  API_URL: string
  APP_VERSION: string
}

export const env: Environment = {
  NODE_ENV: import.meta.env.MODE as Environment['NODE_ENV'],
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  APP_VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
}

export const isDevelopment = env.NODE_ENV === 'development'
export const isProduction = env.NODE_ENV === 'production'
export const isTest = env.NODE_ENV === 'test' 