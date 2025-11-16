<template>
  <DefaultLayout>
    <PageBreadcrumb title="Contacts" subtitle="Apps" />
    <b-row class="row-cols-1 row-cols-md-2 row-cols-xl-4 gx-3">
      <b-col v-for="(contact, idx) in contactData" :key="idx">
        <ContactCard :contact="contact" />
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import ContactCard from '@/views/apps/contacts/components/ContactCard.vue'
import { contactData } from '@/views/apps/contacts/components/data'
</script>
