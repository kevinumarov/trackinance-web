<template>
  <b-card no-body>
    <b-card-header class="d-flex justify-content-between align-items-center border-bottom border-dashed">
      <b-card-title tag="h4"> Session By Browser </b-card-title>

      <b-dropdown no-caret toggle-class="p-0" :variant="null" menu-class="dropdown-menu-end">
        <template v-slot:button-content>
          <a role="button" class="card-drop">
            <Icon icon="iconamoon:menu-kebab-vertical-circle-duotone" class="fs-20 align-middle text-muted" />
          </a>
        </template>

        <b-dropdown-item>Download</b-dropdown-item>
        <b-dropdown-item>Export</b-dropdown-item>
        <b-dropdown-item>Import</b-dropdown-item>
      </b-dropdown>
    </b-card-header>

    <b-card-body class="py-2 px-0">
      <div class="px-2" data-simplebar style="height: 270px">
        <div v-for="(item, idx) in sessionByBrowserData" :key="idx" class="d-flex justify-content-between align-items-center p-2">
          <span class="align-middle fw-medium">{{ item.browser }}</span>
          <span class="fw-semibold text-muted">{{ item.session.percent }}%</span>
          <span class="fw-semibold text-muted">{{ item.session.data }}k</span>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { sessionByBrowserData } from '@/views/dashboards/analytics/components/data'
</script>
