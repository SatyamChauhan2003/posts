import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    cachedAt: null,
    cacheDuration: 15 * 60 * 1000,
  }),
  actions: {
    async fetchPosts() {
      if (this.cachedAt && Date.now() - this.cachedAt < this.cacheDuration) {
        return this.posts
      }
      await axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        this.posts = res.data.slice(0, 9);
        this.cachedAt = Date.now()
      }).catch(err => console.error(err))
    },
  },
})