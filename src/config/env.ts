import { z } from 'zod'

const envSchema = z.object({
  VITE_NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  VITE_API_URL: z.string().url(),
  VITE_APP_VERSION: z.string(),
})

type Env = z.infer<typeof envSchema>

function validateEnv(): Env {
  const env = {
    VITE_NODE_ENV: import.meta.env.VITE_NODE_ENV,
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_APP_VERSION: import.meta.env.VITE_APP_VERSION,
  }

  try {
    return envSchema.parse(env)
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues.map(issue => issue.path.join('.'))
      throw new Error(`❌ Invalid environment variables: ${missingVars.join(', ')}`)
    }
    throw error
  }
}

export const env = validateEnv()

// Type-safe environment helpers
export const isDevelopment = env.VITE_NODE_ENV === 'development'
export const isProduction = env.VITE_NODE_ENV === 'production'
export const isTest = env.VITE_NODE_ENV === 'test' 