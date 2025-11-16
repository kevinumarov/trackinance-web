<template>
  <b-card no-body>
    <b-card-header class="d-flex justify-content-between align-items-center">
      <b-card-title tag="h4">Expenses</b-card-title>
      <div>
        <b-button variant="outline-light" size="sm" class="me-1">ALL</b-button>
        <b-button variant="outline-light" size="sm" class="me-1">1M</b-button>
        <b-button variant="outline-light" size="sm" class="me-1">6M</b-button>
        <b-button variant="outline-light" size="sm" class="active">1Y</b-button>
      </div>
    </b-card-header>

    <b-card-body>
      <div dir="ltr">
        <ApexChart :chart="expensesChart" class="apex-charts" />
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { expensesChart } from '@/views/dashboards/finance/components/data'
import ApexChart from '@/components/ApexChart.vue'
</script>
