<template>
  <b-col xl="5">
    <b-card no-body>
      <b-card-body>
        <b-card-title tag="h5" class="mb-3"> Products From Order #{{ id }} </b-card-title>
        <b-table-simple responsive class="text-nowrap table-centered mb-0">
          <thead>
            <tr>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Grand Total :</td>
              <td>{{ currency }}2201.59</td>
            </tr>
            <tr>
              <td>Shipping Charge :</td>
              <td>FREE</td>
            </tr>
            <tr>
              <td>Estimated tax :</td>
              <td>{{ currency }}15</td>
            </tr>
            <tr>
              <td class="fw-semibold">Total :</td>
              <td class="fw-semibold">{{ currency }}2266.59</td>
            </tr>
          </tbody>
        </b-table-simple>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { currency } from '@/helpers/constants'

defineProps(['id'])
</script>
