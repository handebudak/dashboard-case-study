export interface StreamData {
    hoursWatched: {
      value: number
      delta: number
      deltaPercentage: number
    }
    averageViewers: {
      value: number
      delta: number
      deltaPercentage: number
    }
    dailyStreamCounts: {
      Monday: number
      Tuesday: number
      Wednesday: number
      Thursday: number
      Friday: number
    }
  } 