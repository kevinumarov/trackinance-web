<template>
  <b-card no-body>
    <b-card-body>
      <div class="text-center">
        <img :src="customer.image" alt="avatar-1" class="img-fluid avatar-xxl img-thumbnail rounded-circle avatar-border" />
        <h4 class="mt-3">
          <a href="javascript:void(0);">{{ customer.name }}</a>
        </h4>
        <a href="javascript:void(0);" class="mb-1 d-inline-block">
          <i class="bx bx-location-plus text-danger fs-14 me-1" />
          {{ customer.location }}
        </a>
        <br />
        <a href="javascript:void(0);">
          <i class="bx bx-phone-call text-success fs-14 me-1" />
          {{ customer.phone }}
        </a>
        <br />
        <a href="#!" class="btn btn-sm btn-outline-primary mt-2">View All Details</a>
      </div>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { CustomerType } from '@/views/ecommerce/customers/components/types'

defineProps({
  customer: {
    type: Object as PropType<CustomerType>,
    required: true
  }
})
</script>
