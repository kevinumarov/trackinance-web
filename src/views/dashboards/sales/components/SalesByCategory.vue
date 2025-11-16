<template>
  <b-card no-body>
    <b-card-header class="d-flex justify-content-between align-items-center">
      <b-card-title tag="h4"> Sales By Category </b-card-title>

      <b-dropdown no-caret toggle-class="p-0" :variant="null" menu-class="dropdown-menu-end">
        <template v-slot:button-content>
          <a role="button" class="card-drop">
            <Icon icon="iconamoon:menu-kebab-vertical-circle-duotone" class="fs-20 align-middle text-muted" />
          </a>
        </template>

        <b-dropdown-item>Sales Report</b-dropdown-item>
        <b-dropdown-item>Export Report</b-dropdown-item>
        <b-dropdown-item>Profit</b-dropdown-item>
        <b-dropdown-item>Action</b-dropdown-item>
      </b-dropdown>
    </b-card-header>

    <b-card-body>
      <div dir="ltr">
        <ApexChart :chart="salesByCategoryChart" class="apex-charts" />
      </div>

      <div class="mb-n1 mt-2">
        <b-table-simple responsive small borderless class="table-nowrap table-centered mb-0">
          <b-thead size="sm" class="bg-light bg-opacity-50">
            <b-tr>
              <b-th v-for="(header, idx) in salesByCategoryTableData.header" class="py-1" :key="idx">
                {{ header }}
              </b-th>
            </b-tr>
          </b-thead>

          <b-tbody>
            <b-tr v-for="(item, idx) in salesByCategoryTableData.body" :key="idx">
              <b-td>{{ item.category }}</b-td>
              <b-td>{{ item.orders }}</b-td>
              <td>
                {{ item.percent.data }}%
                <b-badge class="ms-1" :class="item.percent.growth > 0 ? 'badge-soft-success text-success' : 'badge-soft-danger text-danger'"> {{ Math.abs(item.percent.growth) }}% {{ item.percent.growth > 0 ? 'Up' : 'Down' }} </b-badge>
              </td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import ApexChart from '@/components/ApexChart.vue'
import { Icon } from '@iconify/vue'
import { salesByCategoryChart, salesByCategoryTableData } from '@/views/dashboards/sales/components/data'
</script>
