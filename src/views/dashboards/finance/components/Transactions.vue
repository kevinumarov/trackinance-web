<template>
  <b-card no-body>
    <b-card-header class="d-flex justify-content-between align-items-center">
      <b-card-title tag="h4">Transactions</b-card-title>
      <div class="flex-shrink-0">
        <div class="d-flex gap-2">
          <b-form-select size="sm" v-model="selectedTransactionType" :options="transactionTypeOptions" />
        </div>
      </div>
    </b-card-header>
    <b-card-body class="p-0">
      <div class="table-card mb-0">
        <b-table-simple hover borderless responsive class="table-nowrap align-middle mb-0">
          <b-thead size="sm" class="bg-light bg-opacity-50">
            <b-tr>
              <b-th v-for="(header, idx) in transactionsTableData.header" :key="idx" scope="col">{{ header }}</b-th>
            </b-tr>
          </b-thead>

          <b-tbody>
            <b-tr v-for="(item, idx) in tableData" :key="idx">
              <b-td>
                <img :src="item.user.avatar" alt="" class="avatar-xs rounded-circle me-1" />
                <a href="#!" class="text-reset">{{ item.user.name }}</a>
              </b-td>
              <b-td>{{ item.description }}</b-td>
              <b-td>
                <span v-if="item.amount > 0">{{ currency }}{{ Math.abs(item.amount) }}</span>
                <span v-else class="text-danger">-{{ currency }}{{ Math.abs(item.amount) }}</span>
              </b-td>
              <b-td>{{ item.timestamp }}</b-td>
              <b-td>
                <span class="badge p-1" :class="item.status === 'success' ? 'bg-success-subtle text-success' : item.status === 'cancelled' ? 'bg-info-subtle text-info' : item.status === 'on-hold' ? 'bg-warning-subtle text-warning' : 'bg-danger-subtle text-danger'"> {{ kebabToTitleCase(item.status) }}</span>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </b-card-body>

    <b-card-footer class="border-top border-light">
      <div class="align-items-center justify-content-between row text-center text-sm-start">
        <b-col class="col-sm">
          <div class="text-muted">
            Showing
            <span class="fw-semibold text-body">{{ perPageItem }}</span> of <span class="fw-semibold">{{ transactionsTableData.body.length }}</span> Transactions
          </div>
        </b-col>
        <b-col class="col-sm-auto mt-3 mt-sm-0">
          <b-pagination class="mb-0" size="sm" v-model="currentPage" :total-rows="transactionsTableData.body.length" :per-page="perPageItem" />
        </b-col>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { transactionsTableData } from '@/views/dashboards/finance/components/data'
import { currency } from '@/helpers/constants'
import { kebabToTitleCase } from '@/helpers/change-casing'

const selectedTransactionType = ref('all')
const transactionTypeOptions = [
  { value: 'all', text: 'All' },
  { value: 'paid', text: 'Paid' },
  { value: 'cancelled', text: 'Cancelled' },
  { value: 'failed', text: 'Failed' },
  { value: 'on-hold', text: 'OnHold' }
]

const perPageItem = ref(5)
const currentPage = ref(1)

const tableData = transactionsTableData.body.slice(0, 5)
</script>
