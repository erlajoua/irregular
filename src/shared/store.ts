import { defineStore } from 'pinia'

export const useStore = defineStore('myStore', {
  state: () => ({
    topScore: localStorage.getItem('topScore') ? parseInt(localStorage.getItem('topScore')!) : 0,
  }),
  getters: {
    getTopScore(): number {
      return this.topScore
    },
  },
  actions: {
    updateTopScore(score: number): void {
      this.topScore = score
      localStorage.setItem('topScore', score.toString())
    },
  },
})