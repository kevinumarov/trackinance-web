<template>
  <DefaultLayout>
    <PageBreadcrumb title="Orders List" subtitle="Ecommerce" />
    <b-row>
      <b-col>
        <b-card no-body>
          <b-card-body>
            <div class="d-flex flex-wrap gap-2 align-items-center justify-content-between">
              <div class="search-bar">
                <span><i class="bx bx-search-alt"></i></span>
                <b-form-input type="search" id="search" placeholder="Search..." />
              </div>

              <div class="d-flex flex-wrap gap-2 justify-content-end">
                <b-dropdown :variant="null" toggle-class="btn-light" menu-class="dropdown-menu-end">
                  <template #button-content> <i class="bx bx-sort me-1" />Filter </template>
                  <b-dropdown-item>By Date</b-dropdown-item>
                  <b-dropdown-item>By Order ID</b-dropdown-item>
                  <b-dropdown-item>By Status</b-dropdown-item>
                </b-dropdown>
                <a href="#!" class="btn btn-primary"> <i class="bx bx-plus me-1"></i>Create Contact </a>
              </div>
            </div>
          </b-card-body>
          <b-table-simple responsive class="text-nowrap table-centered mb-0">
            <b-thead class="bg-light bg-opacity-50">
              <b-tr>
                <b-th v-for="(thead, idx) in orderList.header" :key="idx">{{ thead }}</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(order, idx) in orderList.body" :key="idx">
                <b-td>
                  <router-link :to="{ name: 'ecommerce.orders.details', params: { id: order.orderID } }">#{{ order.orderID }} </router-link>
                </b-td>
                <b-td>{{ order.date }}</b-td>
                <b-td>
                  <img :src="order.image" alt="product-1(1)" class="img-fluid avatar-sm" />
                </b-td>
                <b-td>
                  <a href="#!">{{ order.name }}</a>
                </b-td>
                <b-td>{{ order.email }}</b-td>
                <b-td>{{ order.phone }}</b-td>
                <b-td>{{ order.address }}</b-td>
                <b-td>{{ order.paymentType }}</b-td>
                <b-td>
                  <i class="bx bxs-circle" :class="order.status === 'completed' ? 'text-success' : order.status === 'processing' ? 'text-primary' : 'text-danger'"></i>
                  {{ kebabToTitleCase(order.status) }}
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
                <span class="fw-semibold">90,521</span>
                orders
              </div>
            </div>
            <div class="col-sm-auto mt-3 mt-sm-0">
              <b-pagination class="m-0" pills v-model="currentPage" :per-page="perPageItem" :total-rows="orderList.body.length" />
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { kebabToTitleCase } from '@/helpers/change-casing'
import { orderList } from '@/views/ecommerce/orders/components/data'

const perPageItem = ref(5)
const currentPage = ref(1)
</script>
