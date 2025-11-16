<template>
  <DefaultLayout>
    <PageBreadcrumb title="Pricing" subtitle="Pages" />
    <b-row>
      <b-col cols="12">
        <div class="text-center my-4">
          <h3>Simple Pricing Plans</h3>
          <p class="text-muted text-center">Get the power and control you need to manage your organization's technical documentation</p>
        </div>
        <b-row class="justify-content-center">
          <b-col lg="3" v-for="(item, idx) in pricingPlans" :key="idx">
            <PricingCard :item="item" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import PricingCard from '@/views/pages/pricing/components/PricingCard.vue'
import { pricingPlans } from '@/views/pages/pricing/components/data'
</script>
