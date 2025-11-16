<template>
  <b-card no-body>
    <b-card-header class="d-flex justify-content-between align-items-center border-bottom border-dashed">
      <b-card-title tag="h4"> Sessions by Country </b-card-title>

      <b-dropdown text="View Data" variant="outline-light" size="sm" toggle-class="py-1 px-2" menu-class="dropdown-menu-end">
        <b-dropdown-item>Download</b-dropdown-item>
        <b-dropdown-item>Export</b-dropdown-item>
        <b-dropdown-item>Import</b-dropdown-item>
      </b-dropdown>
    </b-card-header>

    <b-card-body class="pt-0">
      <b-row class="align-items-center">
        <b-col lg="7">
          <JsVectorMap id="world-map-markers" class="my-3" :height="300" :options="worldMapOptions" />
        </b-col>
        <b-col lg="5" dir="ltr">
          <div class="p-3 pb-0">
            <template v-for="(item, idx) in sessionData" :key="idx">
              <div class="d-flex justify-content-between align-items-center">
                <p class="mb-1">
                  <Icon :icon="item.country.icon" class="fs-16 align-middle me-1" />
                  <span class="align-middle">{{ item.country.name }}</span>
                </p>
              </div>
              <b-row class="align-items-center mb-3">
                <b-col>
                  <b-progress size="sm" class="progress-soft" :max="100" height="5px">
                    <b-progress-bar :variant="item.variant" :value="calculateProgress(item.sessions)" />
                  </b-progress>
                </b-col>
                <b-col class="col-auto">
                  <p class="mb-0 fs-13 fw-semibold">
                    {{ item.sessions }}<span v-if="item.suffix">{{ item.suffix }}</span>
                  </p>
                </b-col>
              </b-row>
            </template>
          </div>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import JsVectorMap from '@/components/JsVectorMap.vue'
import { sessionData, totalSessions, worldMapOptions } from '@/views/dashboards/analytics/components/data'
import { Icon } from '@iconify/vue'

const calculateProgress = (session: number) => {
  return (session / totalSessions) * 100
}
</script>
