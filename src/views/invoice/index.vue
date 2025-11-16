<template>
  <DefaultLayout>
    <PageBreadcrumb title="Invoices List" subtitle="Invoice" />
    <b-row>
      <b-col>
        <b-card no-body>
          <b-card-body>
            <div class="d-flex flex-wrap justify-content-between gap-3">
              <div class="search-bar">
                <span><i class="bx bx-search-alt"></i></span>
                <b-form-input type="search" id="search" placeholder="Search invoice..." />
              </div>
              <div>
                <a href="#!" class="btn btn-success"> <i class="bx bx-plus me-1"></i>Create Invoice </a>
              </div>
            </div>
          </b-card-body>
          <div>
            <b-table-simple responsive class="text-nowrap table-centered mb-0">
              <b-thead class="bg-light bg-opacity-50">
                <b-tr>
                  <b-th class="border-0 py-2"> Invoice ID</b-th>
                  <b-th class="border-0 py-2"> Customer</b-th>
                  <b-th class="border-0 py-2"> Created Date</b-th>
                  <b-th class="border-0 py-2"> Due Date</b-th>
                  <b-th class="border-0 py-2"> Amount</b-th>
                  <b-th class="border-0 py-2"> Payment Status</b-th>
                  <b-th class="border-0 py-2"> Via</b-th>
                  <b-th class="border-0 py-2"> Action</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(item, idx) in invoicesData" :key="idx">
                  <b-td>
                    <router-link :to="`/invoice/${item.invoiceNumber}`" class="fw-medium"> #{{ item.invoiceNumber }} </router-link>
                  </b-td>
                  <b-td>
                    <div class="d-flex align-items-center">
                      <img :src="item.client.avatar" alt="" class="avatar-xs rounded-circle me-2" />
                      <div>
                        <h5 class="fs-14 mt-1 fw-normal">
                          {{ item.client.name }}
                        </h5>
                      </div>
                    </div>
                  </b-td>
                  <b-td>
                    {{ moment(item.issueDate).format('DD MMMM, YYYY') }}
                    <small>{{ moment(item.issueDate).format('h:mm a') }}</small>
                  </b-td>
                  <b-td>{{ moment(item.dueDate).format('DD MMMM, YYYY') }}</b-td>
                  <b-td>{{ currency }}{{ item.amount }}</b-td>
                  <b-td>
                    <b-badge :variant="null" :class="item.status === 'paid' ? 'badge-soft-success' : item.status === 'send' ? 'badge-soft-primary' : 'badge-soft-warning'">
                      {{ kebabToTitleCase(item.status) }}
                    </b-badge>
                  </b-td>
                  <b-td>{{ item.paymentMethod }}</b-td>
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
                  <span class="fw-semibold">52</span>
                  invoices
                </div>
              </div>
              <div class="col-sm-auto mt-3 mt-sm-0">
                <b-pagination class="m-0" pills v-model="currentPage" :per-page="perPageItem" :total-rows="invoicesData.length" />
              </div>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import moment from 'moment'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { invoicesData } from '@/views/invoice/components/data'
import { kebabToTitleCase } from '@/helpers/change-casing'
import { currency } from '@/helpers/constants'

const perPageItem = ref(5)
const currentPage = ref(1)
</script>
