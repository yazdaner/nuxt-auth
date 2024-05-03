<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body text-center">
        <h1 class="mb-4">posts</h1>
        <div>
          <div v-for="post in posts" :key="post.id">
            <h3>{{ post.id }} - {{ post.title }}</h3>
            <p>{{ post.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
    middleware: 'auth',
})
const headers = useRequestHeaders(['cookie'])
const { data: posts, error } = await useFetch('/api/posts', {
  headers
})
</script>