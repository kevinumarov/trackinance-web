<template>
  <b-card no-body class="overflow-hidden">
    <b-table-simple responsive class="text-nowrap table-centered mb-0">
      <b-thead>
        <b-tr>
          <b-th>Customer Name</b-th>
          <b-th>Date</b-th>
          <b-th>Email ID</b-th>
          <b-th>Phone No.</b-th>
          <b-th>Location</b-th>
          <b-th>Orders</b-th>
          <b-th>Action</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(customer, idx) in customerList" :key="idx">
          <b-td>
            <div class="d-flex align-items-center gap-1">
              <img :src="customer.image" alt="avatar-1" class="img-fluid avatar-xs rounded-circle avatar-border me-1" />
              <a href="#!">{{ customer.name }}</a>
            </div>
          </b-td>
          <b-td>{{ customer.date }}</b-td>
          <b-td>{{ customer.email }}</b-td>
          <b-td>{{ customer.phone }}</b-td>
          <b-td>{{ customer.location }}</b-td>
          <b-td>{{ customer.orders }}</b-td>
          <b-td>
            <b-button type="button" size="sm" :variant="null" class="btn-soft-secondary me-2">
              <i class="bx bx-edit fs-16"></i>
            </b-button>
            <b-button type="button" size="sm" :variant="null" class="btn-soft-danger">
              <i class="bx bx-trash fs-16"></i>
            </b-button>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <div class="align-items-center justify-content-between row g-0 text-center text-sm-start p-3 border-top">
      <div class="col-sm">
        <div class="text-muted">
          Showing
          <span class="fw-semibold">10</span>
          of
          <span class="fw-semibold">2,852</span>
          Results
        </div>
      </div>
      <div class="col-sm-auto mt-3 mt-sm-0">
        <b-pagination class="m-0" pills v-model="currentPage" :per-page="perPageItem" :total-rows="customerList.length" />
      </div>
    </div>
  </b-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { customerList } from '@/views/ecommerce/customers/components/data'

const perPageItem = ref(5)
const currentPage = ref(1)
</script>
