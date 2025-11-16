<template>
  <b-col lg="4">
    <b-card no-body class="card-height-100">
      <b-card-body>
        <div class="float-end">
          <a href="javascript:void(0);" class="text-primary">View All Detail</a>
        </div>
        <b-card-title tag="h5" class="mb-3"> Delivery Information </b-card-title>
        <div class="text-center">
          <i class="bx bx-cart h2"></i>
          <h5>UPS Delivery</h5>
          <p class="mb-1">
            Order ID :
            <span class="text-muted me-2"></span>
            <b>#{{ id }}</b>
          </p>
          <p class="mb-0">
            Payment Mode :
            <span class="text-muted me-2"></span>
            <b>COD</b>
          </p>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
defineProps(['id'])
</script>
