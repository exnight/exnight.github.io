<script setup lang="ts">
useHead({
  title: 'Leo Wong',
  meta: [{ name: 'description', content: 'A personal website, blog, and gallery' }],
})
</script>

<template>
  <div class="h-screen md:w-10/12 mx-4 md:mx-auto">
    <!-- Markup shared across all pages, e.g., NavBar -->
    <HeaderBar />
    <NuxtPage />
  </div>
</template>
