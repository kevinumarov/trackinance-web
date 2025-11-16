<template>
  <b-card no-body class="overflow-hidden">
    <b-table-simple responsive class="table-centered text-nowrap mb-0">
      <b-thead>
        <b-tr>
          <b-th>Seller</b-th>
          <b-th>Store Name</b-th>
          <b-th>Rating</b-th>
          <b-th>Products</b-th>
          <b-th>Wallet Balance</b-th>
          <b-th>Create Date</b-th>
          <b-th>Revenue</b-th>
          <b-th>Action</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(seller, idx) in sellersList" :key="idx">
          <b-td>
            <div class="d-flex align-items-center gap-1">
              <img :src="seller.seller.image" alt="avatar-1" class="img-fluid avatar-sm rounded-circle avatar-border me-1" />
              <a href="#!">{{ seller.seller.name }}</a>
            </div>
          </b-td>
          <b-td>{{ seller.storeName }}</b-td>
          <b-td>
            <b-badge :variant="null" :class="seller.rating >= 4 ? 'badge-soft-success' : seller.rating <= 4 && seller.rating >= 2 ? 'badge-soft-warning' : 'badge-soft-danger'">
              <i class="bx bxs-star me-1"></i>
              {{ seller.rating }}
            </b-badge>
          </b-td>
          <b-td>{{ seller.products }}</b-td>
          <b-td>{{ currency }}{{ seller.walletBalance }}</b-td>
          <b-td>{{ seller.createDate }}</b-td>
          <b-td>{{ currency }}{{ seller.revenue }}</b-td>
          <b-td>
            <a href="javascript:void(0);" class="btn btn-sm btn-soft-primary me-2">
              <i class="bx bx-edit fs-18"></i>
            </a>
            <a href="javascript:void(0);" class="btn btn-sm btn-soft-danger">
              <i class="bx bx-trash fs-18"></i>
            </a>
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
          <span class="fw-semibold">269</span>
          Results
        </div>
      </div>
      <div class="col-sm-auto mt-3 mt-sm-0">
        <b-pagination class="m-0" pills v-model="currentPage" :per-page="perPageItem" :total-rows="sellersList.length" />
      </div>
    </div>
  </b-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { currency } from '@/helpers/constants'
import { sellersList } from '@/views/ecommerce/sellers/components/data'

const perPageItem = ref(5)
const currentPage = ref(1)
</script>
