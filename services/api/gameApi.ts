import type { GameStats } from '../types/game.types'
import { API_CONFIG, createApiUrl, handleApiError } from './config'

/**
 * Fetches game overview data for a specific game ID
 * @param gameId - The unique identifier for the game
 * @returns Promise<GameStats> - Game statistics and overview data
 */
export const getGameOverview = async (gameId: string): Promise<GameStats> => {
  const url = createApiUrl(API_CONFIG.ENDPOINTS.GAME_OVERVIEW, gameId, 'overview')
  
  const response = await fetch(url)
  
  if (!response.ok) {
    handleApiError(response, 'game overview')
  }
  
  return response.json()
}
