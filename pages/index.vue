<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 bg-blue-200 text-center p-2 rounded">Posts</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup>
import { usePostsStore } from '~/stores/posts'
import PostCard from '~/components/PostCard.vue'

const postsStore = usePostsStore()
const posts = await postsStore.fetchPosts()
</script>