<template>
  <b-card no-body>
    <img class="card-img-top img-fluid" :src="item.image" alt="group-2" />
    <b-card-body>
      <h6>
        {{ item.date }}
      </h6>
      <b-card-title tag="h5" class="fs-16 lh-base mb-1">
        <a href="#!" class="text-reset">{{ item.name }}</a>
      </b-card-title>
      <p class="card-text text-muted">
        {{ item.location }}
      </p>
      <div class="d-flex">
        <a href="javascript:void(0);" class="btn btn-primary w-100 me-1"><i class="bx bxs-star me-1"></i>Interested</a>
        <a href="javascript:void(0);" class="btn btn-primary"><i class="bx bxl-telegram"></i></a>
      </div>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { EventListType } from '@/views/apps/social/components/types'

defineProps({
  item: {
    type: Object as PropType<EventListType>,
    required: true
  }
})
</script>
