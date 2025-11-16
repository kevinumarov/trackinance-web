<template>
  <DefaultLayout>
    <PageBreadcrumb title="Invoice Details" subtitle="Invoice" />
    <b-row>
      <b-col cols="12">
        <b-card no-body>
          <b-card-body>
            <div class="clearfix">
              <div class="float-sm-end">
                <div class="auth-logo">
                  <img class="logo-dark me-1" :src="logoDark" alt="logo-dark" height="24" />
                </div>
                <address class="mt-3">
                  1729 Bangor St,<br />
                  Houlton, ME, 04730 <br />
                  <abbr title="Phone">P:</abbr>
                  (207) 532-9109
                </address>
              </div>
              <div class="float-sm-start">
                <b-card-title tag="h5" class="mb-2"> Invoice: #{{ route.params.id }} </b-card-title>
              </div>
            </div>

            <b-row class="mt-3">
              <b-col md="6">
                <h6 class="fw-normal text-muted">Customer</h6>
                <h6 class="fs-16">Glenn H Smith</h6>
                <address>
                  135 White Cemetery Rd,<br />
                  Perryville, KY, 40468<br />
                  <abbr title="Phone">P:</abbr>
                  (304) 584-4345
                </address>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="12">
                <b-table-simple responsive class="text-nowrap table-centered mt-3 mb-0">
                  <b-thead class="bg-light bg-opacity-50">
                    <b-tr>
                      <b-th class="border-0 py-2"> Product Name </b-th>
                      <b-th class="border-0 py-2"> Quantity </b-th>
                      <b-th class="border-0 py-2"> Price </b-th>
                      <b-th class="text-end border-0 py-2"> Total </b-th>
                    </b-tr>
                  </b-thead>
                  <b-tbody>
                    <b-tr>
                      <b-td>G15 Gaming Laptop</b-td>
                      <b-td>3</b-td>
                      <b-td>{{ currency }}240.59</b-td>
                      <b-td class="text-end">{{ currency }}721.77</b-td>
                    </b-tr>
                    <b-tr>
                      <b-td>Sony Alpha ILCE 6000Y 24.3 MP Mirrorless Digital SLR Camera</b-td>
                      <b-td>5</b-td>
                      <b-td>{{ currency }}135.99</b-td>
                      <b-td class="text-end">{{ currency }}679.95</b-td>
                    </b-tr>
                    <b-tr>
                      <b-td>Sony Over-Ear Wireless Headphone with Mic</b-td>
                      <b-td>1</b-td>
                      <b-td>{{ currency }}99.49</b-td>
                      <b-td class="text-end">{{ currency }}99.49</b-td>
                    </b-tr>
                    <b-tr class="border-bottom">
                      <b-td>Adam ROMA USB-C / USB-A 3.1 (2-in-1 Flash Drive) – 128GB</b-td>
                      <b-td>2</b-td>
                      <b-td>{{ currency }}350.19</b-td>
                      <b-td class="text-end">700.38</b-td>
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
              </b-col>
            </b-row>

            <b-row class="mt-3">
              <b-col sm="7">
                <div class="clearfix pt-xl-3 pt-0">
                  <h6 class="text-muted">Notes:</h6>

                  <small class="text-muted"> All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above. </small>
                </div>
              </b-col>
              <b-col sm="5">
                <div class="float-end">
                  <p>
                    <span class="fw-medium">Sub-total :</span>
                    <span class="float-end">{{ currency }}2266.59</span>
                  </p>
                  <p>
                    <span class="fw-medium">Discount (10%) :</span>
                    <span class="float-end"> &nbsp;&nbsp;&nbsp; {{ currency }}226.659</span>
                  </p>
                  <h3>{{ currency }}2039.931 USD</h3>
                </div>
                <div class="clearfix"></div>
              </b-col>
            </b-row>

            <div class="mt-5 mb-1">
              <div class="text-end d-print-none">
                <a href="javascript:void(0);" @click="print" class="btn btn-primary me-1">Print</a>
                <a href="javascript:void(0);" class="btn btn-outline-primary">Submit</a>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { currency } from '@/helpers/constants'
import logoDark from '@/assets/images/logo-dark.png'

import { useRoute } from 'vue-router'

const print = () => {
  window.print()
}

const route = useRoute()
</script>
