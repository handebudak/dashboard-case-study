import type { PerformanceData } from '../types/performance.types'
import { API_CONFIG, createApiUrl, handleApiError } from './config'

/**
 * Fetches performance data for a specific game ID
 * @param gameId - The unique identifier for the game
 * @returns Promise<PerformanceData> - Performance metrics and chart data
 */
export const getPerformanceData = async (gameId: string): Promise<PerformanceData> => {
  const url = createApiUrl(API_CONFIG.ENDPOINTS.PERFORMANCE, gameId, 'performance')
  
  const response = await fetch(url)
  
  if (!response.ok) {
    handleApiError(response, 'performance data')
  }
  
  return response.json()
}
