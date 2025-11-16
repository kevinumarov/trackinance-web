<template>
  <DefaultLayout>
    <PageBreadcrumb title="Timeline" subtitle="Pages" />

    <Timeline />

    <LeftTimeline />
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import Timeline from '@/views/pages/timeline/components/Timeline.vue'
import LeftTimeline from '@/views/pages/timeline/components/LeftTimeline.vue'
</script>
