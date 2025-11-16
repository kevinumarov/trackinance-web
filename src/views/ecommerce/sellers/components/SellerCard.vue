<template>
  <b-card no-body>
    <b-card-body>
      <b-dropdown size="lg" variant="link" class="float-end" toggle-class="arrow-none p-0 text-dark" menu-class="dropdown-menu-end" no-caret>
        <template #button-content> <i class="bx bx-dots-vertical-rounded fs-18 mb-2"></i> </template>
        <b-dropdown-item href="#"><i class="bx bx-phone-call me-2"></i>Direct Call</b-dropdown-item>
        <b-dropdown-item href="#"><i class="bx bx-envelope-open me-2"></i>E mail</b-dropdown-item>
        <b-dropdown-item href="#"><i class="bx bxl-linkedin me-2"></i>Linkedin</b-dropdown-item>
      </b-dropdown>

      <div class="text-center mb-3">
        <a href="javascript:void(0);">
          <img :src="seller.seller.image" alt="avatar-1" class="img-fluid img-thumbnail avatar-xxl rounded-circle avatar-border" />
        </a>
      </div>
      <div class="text-center">
        <h4 class="mb-4 fw-bold">
          {{ seller.seller.name }}
        </h4>
      </div>
      <div class="mt-1 border-bottom">
        <p class="float-end mb-1">
          {{ seller.storeName }}
        </p>
        <p class="mb-1">Store Name</p>
      </div>
      <div class="mt-1 mb-2 border-bottom">
        <p class="float-end mb-1">
          {{ seller.products }}
        </p>
        <p class="mb-1">Products</p>
      </div>
      <a href="#!" class="btn btn-soft-primary w-100">View All Detail</a>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { SellerType } from '@/views/ecommerce/sellers/components/types'

defineProps({
  seller: {
    type: Object as PropType<SellerType>,
    required: true
  }
})
</script>
