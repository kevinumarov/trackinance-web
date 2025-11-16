<template>
  <DefaultLayout>
    <PageBreadcrumb title="Finance" subtitle="Dashboards" />

    <b-row>
      <b-col v-for="(item, idx) in statistics" :key="idx">
        <StatisticsCard :item="item" />
      </b-col>
    </b-row>

    <b-row>
      <b-col xxl="6">
        <Revenue />
      </b-col>

      <b-col xxl="6">
        <Expenses />
      </b-col>
    </b-row>

    <b-row>
      <b-col xxl="8">
        <Transactions />
      </b-col>

      <b-col xxl="4">
        <RevenueSources />
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import StatisticsCard from '@/views/dashboards/finance/components/StatisticsCard.vue'
import Revenue from '@/views/dashboards/finance/components/Revenue.vue'
import Expenses from '@/views/dashboards/finance/components/Expenses.vue'
import RevenueSources from '@/views/dashboards/finance/components/RevenueSources.vue'
import Transactions from '@/views/dashboards/finance/components/Transactions.vue'
import { statistics } from '@/views/dashboards/finance/components/data'
</script>
