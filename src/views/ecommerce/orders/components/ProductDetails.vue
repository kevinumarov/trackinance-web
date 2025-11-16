<template>
  <b-col xl="7">
    <b-card no-body>
      <b-card-body>
        <b-card-title tag="h5" class="mb-3"> Products From Order #{{ id }} </b-card-title>
        <b-table-simple responsive class="table-centered table-dashed mb-0">
          <b-thead>
            <b-tr>
              <b-th>Product Name</b-th>
              <b-th>Quantity</b-th>
              <b-th>Price</b-th>
              <b-th>Total</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>G15 Gaming Laptop</b-td>
              <b-td>3</b-td>
              <b-td>{{ currency }}240.59</b-td>
              <b-td>{{ currency }}721.77</b-td>
            </b-tr>
            <b-tr>
              <b-td> Sony Alpha ILCE 6000Y 24.3 MP Mirrorless Digital SLR Camera </b-td>
              <b-td>5</b-td>
              <b-td>{{ currency }}135.99</b-td>
              <b-td>{{ currency }}679.95</b-td>
            </b-tr>
            <b-tr>
              <b-td> Sony Over-Ear Wireless Headphone with Mic </b-td>
              <b-td>1</b-td>
              <b-td>{{ currency }}99.49</b-td>
              <b-td>{{ currency }}99.49</b-td>
            </b-tr>
            <b-tr>
              <b-td> Adam ROMA USB-C / USB-A 3.1 (2-in-1 Flash Drive) – 128GB </b-td>
              <b-td>2</b-td>
              <b-td>{{ currency }}350.19</b-td>
              <b-td>700.38</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { currency } from '@/helpers/constants'

defineProps(['id'])
</script>
