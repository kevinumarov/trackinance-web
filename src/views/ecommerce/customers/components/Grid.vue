<template>
  <b-row class="row-cols-1 row-cols-md-2 row-cols-xl-5 gx-3">
    <b-col v-for="(customer, idx) in customerList" :key="idx">
      <CustomerCard :customer="customer" />
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import { customerList } from '@/views/ecommerce/customers/components/data'
import CustomerCard from '@/views/ecommerce/customers/components/CustomerCard.vue'
</script>
