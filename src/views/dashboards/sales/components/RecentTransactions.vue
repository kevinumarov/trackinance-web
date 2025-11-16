<template>
  <b-card no-body>
    <b-card-header class="d-flex justify-content-between align-items-center">
      <b-card-title tag="h4"> Recent Transactions </b-card-title>

      <a href="#!" class="btn btn-sm btn-light"> View All </a>
    </b-card-header>

    <b-card-body>
      <b-table-simple hover responsive class="mb-0 table-centered">
        <b-thead>
          <b-tr>
            <b-th v-for="(header, idx) in recentTransactionsTableData.header" :key="idx" class="py-1">{{ header }}</b-th>
          </b-tr>
        </b-thead>

        <b-tbody>
          <b-tr v-for="(item, idx) in recentTransactionsTableData.body" :key="idx">
            <b-td>{{ item.id }}</b-td>
            <b-td>{{ item.date }}</b-td>
            <b-td>{{ item.amount }}</b-td>
            <b-td>
              <b-badge :class="item.status === 'cr' ? 'bg-success' : 'bg-danger'">{{ toSentenceCase(item.status) }} </b-badge>
            </b-td>
            <b-td>{{ item.description }}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { recentTransactionsTableData } from '@/views/dashboards/sales/components/data'
import { toSentenceCase } from '@/helpers/change-casing'
</script>
