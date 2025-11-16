<template>
  <b-card no-body class="group">
    <a href="javascript:void(0);" class="group-action">
      <div class="avatar-sm fw-bold">
        <span class="avatar-title rounded-circle text-bg-primary text-center fs-18">
          <i class="bx bx-x"></i>
        </span>
      </div>
    </a>
    <img class="card-img-top img-fluid" :src="item.image" alt="group-7" />
    <b-card-body>
      <b-card-title tag="h5" class="fs-16 mb-2">
        {{ item.title }}
      </b-card-title>
      <p class="card-text text-muted text-justify">
        {{ item.caption }}
      </p>
      <a href="javascript:void(0);" class="btn btn-primary w-100">Join Group</a>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { GroupType } from '@/views/apps/social/components/types'

defineProps({
  item: {
    type: Object as PropType<GroupType>,
    required: true
  }
})
</script>
