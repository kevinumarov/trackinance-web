<template>
  <DefaultLayout>
    <PageBreadcrumb title="About Us" subtitle="Pages" />
    <b-row>
      <b-col cols="12">
        <About />
        <Services />
        <Team />
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import Team from '@/views/pages/about-us/components/Team.vue'
import About from '@/views/pages/about-us/components/About.vue'
import Services from '@/views/pages/about-us/components/Services.vue'
</script>
