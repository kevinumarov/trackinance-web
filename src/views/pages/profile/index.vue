<template>
  <DefaultLayout>
    <PageBreadcrumb title="Profile" subtitle="Pages" />
    <b-row>
      <b-col xxl="4">
        <b-row>
          <b-col cols="12">
            <ProfileInfo />
            <Skills />
          </b-col>
        </b-row>
        <Activities />
      </b-col>

      <Messages />
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import Skills from '@/views/pages/profile/components/Skills.vue'
import Messages from '@/views/pages/profile/components/Messages.vue'
import Activities from '@/views/pages/profile/components/Activities.vue'
import ProfileInfo from '@/views/pages/profile/components/ProfileInfo.vue'
</script>
