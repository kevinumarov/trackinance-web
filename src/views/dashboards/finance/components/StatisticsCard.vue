<template>
  <b-card no-body>
    <b-card-body>
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <h3 class="mb-0 fw-bold mb-2">{{ item.prefix }}{{ item.statistic }}{{ item.suffix }}</h3>
          <p class="text-muted">
            {{ item.title }}
          </p>
          <span v-if="item.growth" class="badge fs-12" :class="item.growth > 0 ? 'badge-soft-success' : 'badge-soft-danger'"> {{ Math.abs(item.growth) }}% </span>
        </div>
        <div>
          <div class="avatar-lg d-inline-block me-1">
            <span class="avatar-title rounded-circle" :class="`bg-${item.variant}-subtle text-${item.variant}`">
              <Icon :icon="item.icon" class="fs-32" />
            </span>
          </div>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import type { PropType } from 'vue'
import type { StatisticCardType } from '@/types'

defineProps({
  item: {
    type: Object as PropType<StatisticCardType>,
    required: true
  }
})
</script>
