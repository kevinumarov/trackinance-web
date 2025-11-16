<template>
  <CreatePost />
  <StoryFeed />

  <a href="#!" class="text-primary d-flex justify-content-center mx-auto mb-3">
    <i class="bx bx-loader-circle spin-icon fs-22 align-middle me-1"></i>
    Loading
  </a>
</template>

<script setup lang="ts">
import CreatePost from '@/views/apps/social/components/CreatePost.vue'
import StoryFeed from '@/views/apps/social/components/StoryFeed.vue'
</script>
