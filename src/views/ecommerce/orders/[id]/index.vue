<template>
  <DefaultLayout>
    <PageBreadcrumb title="Order Details" subtitle="Ecommerce" />
    <b-row class="justify-content-center">
      <b-col lg="8" xl="7">
        <ul class="progressbar ps-0 my-5 pb-5">
          <li class="active">Order Placed</li>
          <li>Packed</li>
          <li>Shipped</li>
          <li>Delivered</li>
        </ul>
      </b-col>
    </b-row>

    <b-row>
      <ProductDetails :id="route.params.id" />
      <OrderDescription :id="route.params.id" />
    </b-row>

    <b-row>
      <ShippingInformation />
      <BillingInformation />
      <DeliveryInformation :id="route.params.id" />
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import ProductDetails from '@/views/ecommerce/orders/components/ProductDetails.vue'
import OrderDescription from '@/views/ecommerce/orders/components/OrderDescription.vue'
import BillingInformation from '@/views/ecommerce/orders/components/BillingInformation.vue'
import DeliveryInformation from '@/views/ecommerce/orders/components/DeliveryInformation.vue'
import ShippingInformation from '@/views/ecommerce/orders/components/ShippingInformation.vue'

import { useRoute } from 'vue-router'

const route = useRoute()
</script>
