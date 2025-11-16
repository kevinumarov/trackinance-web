<template>
  <b-card no-body class="shadow-none mb-0">
    <b-card-body class="p-lg-3 p-2">
      <div class="d-flex align-items-center gap-3 mb-3">
        <div class="avatar-md flex-shrink-0">
          <span class="avatar-title bg-light rounded-circle">
            <Icon :icon="item.icon" :class="`text-${item.iconColor} fs-28`"></Icon>
          </span>
        </div>
        <a href="#!" class="fw-medium text-dark">{{ item.title }}</a>
        <div class="ms-auto">
          <a href="#!" class="fw-medium text-muted fs-18" v-b-tooltip.hover.bottom="'Download'">
            <Icon icon="iconamoon:cloud-download-duotone" class="mb-1"></Icon>
          </a>
        </div>
      </div>
      <div class="d-flex gap-2">
        <b-card-title tag="h5" class="badge text-secondary d-flex gap-1 align-items-center py-1 px-2 fs-13 mb-3 border rounded-1">
          <Icon icon="iconamoon:clock-duotone"></Icon>
          {{ item.days }} day left
        </b-card-title>
        <b-card-title tag="h5" class="badge text-secondary d-flex gap-1 align-items-center py-1 px-2 fs-13 mb-3 border rounded-1">
          <Icon icon="iconamoon:file-duotone"></Icon>
          {{ item.file }} Files
        </b-card-title>
      </div>
      <div>
        <p class="fs-15 mb-1 float-end">
          {{ item.task }}
        </p>
        <p class="fs-15 mb-1">{{ item.progressValue }}%</p>
        <b-progress :value="item.progressValue" :variant="item.progressVariant" striped animated class="progress-sm mb-3" />
      </div>

      <div class="d-flex align-items-center gap-3">
        <div class="avatar-group">
          <div class="avatar-group-item" v-for="(member, idx) in item.teamMembers" :key="idx">
            <img :src="member" alt="" class="rounded-circle avatar-sm" />
          </div>
        </div>
        <h5 class="mb-0">{{ item.team }}+ Team Work</h5>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ProjectType } from '@/views/pages/profile/components/types'
import { Icon } from '@iconify/vue'

defineProps({
  item: {
    type: Object as PropType<ProjectType>,
    required: true
  }
})
</script>
