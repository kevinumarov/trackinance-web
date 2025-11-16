<template>
  <b-card no-body>
    <b-card-header class="d-flex align-items-center justify-content-between gap-2">
      <b-card-title tag="h4" class="flex-grow-1"> Top Pages </b-card-title>
      <div>
        <a href="#" class="btn btn-sm btn-soft-primary">View All</a>
      </div>
    </b-card-header>

    <b-table-simple hover responsive class="table-nowrap table-centered m-0">
      <b-thead class="bg-light bg-opacity-50">
        <b-tr>
          <b-th v-for="(header, idx) in topPagesTableData.header" :key="idx" class="text-muted py-1">
            {{ header }}
          </b-th>
        </b-tr>
      </b-thead>

      <b-tbody>
        <b-tr v-for="(item, idx) in topPagesTableData.body" :key="idx">
          <b-td>
            <a href="#" class="text-muted">{{ item.pagePath }}</a>
          </b-td>
          <b-td>{{ item.pageViews }}</b-td>
          <b-td>{{ item.avgTimeOnPage }}</b-td>
          <b-td>
            <b-badge :class="item.exitRate < 10 ? 'badge-soft-success text-success' : item.exitRate > 10 && item.exitRate < 20 ? 'badge-soft-warning text-warning' : 'badge-soft-danger text-danger'"> {{ Math.abs(item.exitRate) }}% </b-badge>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </b-card>
</template>

<script setup lang="ts">
import { topPagesTableData } from '@/views/dashboards/analytics/components/data'
</script>
