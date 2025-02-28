<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-6 bg-blue-100 text-center p-2 rounded">
      Post Details
    </h1>
    <div v-if="post" class="bg-white p-4 rounded shadow-md">
      <h2 class="text-xl font-semibold">{{ post.title }}</h2>
      <p class="text-gray-600">{{ post.body }}</p>
    </div>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup>
import { usePostsStore } from "~/stores/posts";

const route = useRoute();
const postsStore = usePostsStore();

const post = computed(() => {
  return postsStore.posts.find((p) => p.id == route.params.id);
});

onMounted(() => {
  if (!postsStore.posts.length) {
    postsStore.fetchPosts();
  }
});

</script>
