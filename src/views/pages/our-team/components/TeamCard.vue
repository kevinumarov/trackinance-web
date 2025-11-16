<template>
  <b-card no-body>
    <div class="position-relative">
      <img :src="profileBg" alt="" class="card-img rounded-bottom-0" />
      <img :src="item.avatar" alt="" class="avatar-lg rounded-circle position-absolute top-100 start-50 translate-middle border border-light border-3" />
    </div>
    <b-card-body class="text-center mt-4 mb-3 pt-3">
      <a href="#!" class="text-dark fw-medium fs-18">{{ item.name }}</a>
      <p class="mb-2 mt-1">
        <i class="bx bxs-envelope text-warning align-middle"></i>
        {{ item.email }}
      </p>
      <div class="my-2">
        <p class="badge bg-light text-dark px-2 py-1 mb-2 fs-14">
          {{ item.post }}
        </p>
      </div>
      <div class="d-flex justify-content-center gap-2">
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
    <b-card-footer class="text-center border-top">
      <b-row>
        <b-col lg="4" cols="4" class="border-end">
          <h4 class="text-dark fw-medium">
            {{ item.projects }}
          </h4>
          <h5 class="mb-0 d-flex align-items-center justify-content-center gap-1 text-muted fs-14">
            <i class="bx bx-briefcase-alt-2 text-muted"></i>
            Projects
          </h5>
        </b-col>
        <b-col lg="4" cols="4" class="border-end">
          <h4 class="text-dark fw-medium">
            {{ item.duration }}
          </h4>
          <h5 class="mb-0 d-flex align-items-center justify-content-center gap-1 text-muted fs-14">
            <i class="bx bx-calendar-event text-muted"></i>
            Duration
          </h5>
        </b-col>
        <b-col lg="4" cols="4">
          <h4 class="text-dark fw-medium">
            {{ item.tasks }}
          </h4>
          <h5 class="mb-0 d-flex align-items-center justify-content-center gap-1 text-muted fs-14">
            <i class="bx bx-task text-muted"></i>
            Tasks
          </h5>
        </b-col>
      </b-row>
    </b-card-footer>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { TeamMemberType } from '@/views/pages/our-team/components/types'
import profileBg from '@/assets/images/profile-bg.jpg'

defineProps({
  item: {
    type: Object as PropType<TeamMemberType>,
    required: true
  }
})
</script>
