<template>
  <div
    class="bg-white p-4 rounded shadow-md cursor-pointer hover:shadow-lg transition-shadow"
  >
    <NuxtLink :to="`/posts/${post.id}`">
      <h4>{{ post.id }}</h4>
      <h2 class="text-xl font-semibold">{{ post.title }}</h2>
      <p class="text-gray-600">{{ post.body }}</p>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
