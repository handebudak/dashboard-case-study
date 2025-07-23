import type { StreamData } from '../types/stream.types'
import { API_CONFIG, createApiUrl, handleApiError } from './config'

/**
 * Fetches stream data for a specific game ID
 * @param gameId - The unique identifier for the game
 * @returns Promise<StreamData> - Stream statistics and viewer metrics
 */
export const getStreamData = async (gameId: string): Promise<StreamData> => {
  const url = createApiUrl(API_CONFIG.ENDPOINTS.STREAM, gameId, 'stream')
  
  const response = await fetch(url)
  
  if (!response.ok) {
    handleApiError(response, 'stream data')
  }
  
  return response.json()
}
