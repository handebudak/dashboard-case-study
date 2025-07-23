// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://dhcase-mockapi.vercel.app/api',
  ENDPOINTS: {
    GAME_OVERVIEW: '/game',
    PERFORMANCE: '/game',
    STREAM: '/game'
  }
} as const

// Common API utilities
export const createApiUrl = (endpoint: string, gameId: string, subEndpoint?: string): string => {
  const baseUrl = `${API_CONFIG.BASE_URL}${endpoint}/${gameId}`
  return subEndpoint ? `${baseUrl}/${subEndpoint}` : baseUrl
}

export const handleApiError = (response: Response, context: string): never => {
  throw new Error(`Failed to fetch ${context}: ${response.status} ${response.statusText}`)
} 