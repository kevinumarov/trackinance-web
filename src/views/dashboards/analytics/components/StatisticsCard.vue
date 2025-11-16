<template>
  <b-card no-body>
    <b-card-body>
      <b-row>
        <b-col cols="6">
          <div class="avatar-md bg-opacity-10 rounded" :class="`bg-${item.variant}`">
            <span class="avatar-title">
              <Icon :icon="item.icon" :class="`text-${item.variant}`" height="32" />
            </span>
          </div>
        </b-col>

        <b-col cols="6" class="text-end">
          <p class="text-muted mb-0 text-truncate">
            {{ item.title }}
          </p>
          <h3 class="text-dark mt-1 mb-0">
            <span v-if="item.prefix">{{ item.prefix }}</span
            >{{ item.statistic }}<span v-if="item.suffix">{{ item.suffix }}</span>
          </h3>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { StatisticCardType } from '@/types'
import { Icon } from '@iconify/vue'

defineProps({
  item: {
    type: Object as PropType<StatisticCardType>,
    required: true
  }
})
</script>
