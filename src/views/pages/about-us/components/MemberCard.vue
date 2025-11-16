<template>
  <b-card no-body>
    <b-card-body>
      <div class="d-flex align-items-center gap-2">
        <div class="avatar-md">
          <img :src="item.avatar" alt="" class="img-fluid rounded-circle border border-light border-3" />
        </div>
        <div class="">
          <a href="#!" class="text-reset fw-semibold fs-16">{{ item.name }}</a>
          <p class="fs-13 mb-0">
            {{ item.email }}
          </p>
        </div>
      </div>
      <div class="d-flex gap-2 mt-3">
        <a href="#!" class="btn btn-soft-primary avatar-sm fs-20 d-inline-flex align-items-center justify-content-center p-0" :id="`tooltip1${item.id}`">
          <i class="bx bxl-facebook"></i>
          <b-tooltip :target="`tooltip1${item.id}`" class="primary-tooltip" placement="bottom"> Facebook </b-tooltip>
        </a>
        <a href="#!" class="btn btn-soft-danger avatar-sm fs-20 d-inline-flex align-items-center justify-content-center p-0" :id="`tooltip2${item.id}`">
          <i class="bx bxl-instagram-alt"></i>
          <b-tooltip :target="`tooltip2${item.id}`" class="danger-tooltip" placement="bottom"> Instagram </b-tooltip>
        </a>
        <a href="#!" class="btn btn-soft-info avatar-sm fs-20 d-inline-flex align-items-center justify-content-center p-0" :id="`tooltip3${item.id}`">
          <i class="bx bxl-twitter"></i>
          <b-tooltip :target="`tooltip3${item.id}`" class="info-tooltip" placement="bottom"> Twitter </b-tooltip>
        </a>
        <a href="#!" class="btn btn-soft-primary avatar-sm fs-20 d-inline-flex align-items-center justify-content-center p-0" :id="`tooltip4${item.id}`">
          <i class="bx bxl-linkedin"></i>
          <b-tooltip :target="`tooltip4${item.id}`" class="primary-tooltip" placement="bottom"> Linkedin </b-tooltip>
        </a>
      </div>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { MemberType } from '@/views/pages/about-us/components/types'

defineProps({
  item: {
    type: Object as PropType<MemberType>,
    required: true
  }
})
</script>
