<template>
  <b-card no-body>
    <b-card-body>
      <div class="d-flex align-items-center justify-content-between">
        <b-card-title tag="h4"> Recent Orders </b-card-title>

        <a href="#!" class="btn btn-sm btn-primary">
          <i class="bx bx-plus me-1"></i>
          Create Order
        </a>
      </div>
    </b-card-body>

    <b-table-simple responsive class="table-centered mb-0">
      <b-thead class="bg-light bg-opacity-50">
        <b-tr>
          <b-th v-for="(header, idx) in recentOrdersTableData.header" :key="idx" class="border-0 py-2">
            {{ header }}
          </b-th>
        </b-tr>
      </b-thead>

      <b-tbody>
        <b-tr v-for="(order, idx) in tableData" :key="idx">
          <b-td>
            <a href="">{{ order.id }}</a>
          </b-td>
          <b-td>{{ order.date }}</b-td>
          <b-td>
            <img :src="order.product.image" alt="" class="img-fluid avatar-sm" />
          </b-td>
          <b-td>
            <a href="#!">{{ order.customer.name }}</a>
          </b-td>
          <b-td>{{ order.customer.email }}</b-td>
          <b-td>{{ order.customer.phoneNo }}</b-td>
          <b-td>{{ order.customer.address }}</b-td>
          <b-td>{{ order.paymentType }}</b-td>
          <b-td>
            <i class="bx bxs-circle me-1" :class="order.status === 'completed' ? 'text-success' : order.status === 'processing' ? 'text-primary' : 'text-danger'"></i>
            {{ toSentenceCase(order.status) }}
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>

    <b-row class="align-items-center justify-content-between g-0 text-center text-sm-start p-3 border-top">
      <b-col class="col-sm">
        <div class="text-muted">
          Showing
          <span class="fw-semibold">{{ perPageItem }}</span>
          of
          <span class="fw-semibold">{{ recentOrdersTableData.body.length }}</span>
          orders
        </div>
      </b-col>
      <b-col class="col-sm-auto mt-3 mt-sm-0">
        <b-pagination class="m-0" pills size="md" v-model="currentPage" :per-page="perPageItem" :total-rows="recentOrdersTableData.body.length" />
      </b-col>
    </b-row>
  </b-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { recentOrdersTableData } from '@/views/dashboards/sales/components/data'
import { toSentenceCase } from '@/helpers/change-casing'

const perPageItem = ref(5)
const currentPage = ref(1)

const tableData = recentOrdersTableData.body.slice(0, 5)
</script>
