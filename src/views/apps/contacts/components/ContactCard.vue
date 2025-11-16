<template>
  <b-card no-body>
    <b-card-body>
      <div class="text-center">
        <img :src="contact.avatar" alt="avatar-1" class="img-fluid avatar-xl img-thumbnail rounded-circle avatar-border" />
        <h4 class="mt-3 fs-18">
          <a href="javascript:void(0);" class="text-dark">{{ contact.name }}</a>
        </h4>
        <a href="javascript:void(0);" class="mb-1 d-inline-block">
          <i class="bx bx-location-plus text-danger fs-14 me-1"></i>
          {{ contact.location }}
        </a>
        <br />
        <a href="javascript:void(0);"
          ><i class="bx bx-phone-call text-success fs-14 me-1"></i>
          {{ contact.phone }}
        </a>
        <br />
        <router-link :to="{ name: 'pages.profile' }" class="btn btn-sm btn-outline-primary mt-3">View Profile</router-link>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ContactType } from '@/views/apps/contacts/components/types'

defineProps({
  contact: {
    type: Object as PropType<ContactType>,
    required: true
  }
})
</script>
