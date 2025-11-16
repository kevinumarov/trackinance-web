<template>
  <DefaultLayout>
    <PageBreadcrumb title="Candlestick Charts" subtitle="Charts" />
    <b-row>
      <b-col xl="9">
        <UIComponentCard title="Simple Candlestick Chart" id="simple">
          <div dir="ltr">
            <ApexChart :chart="simpleChart" class="apex-charts" id="simple-candlestick" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Category X-Axis" id="x-axis" titleClass="mb-3">
          <div dir="ltr">
            <ApexChart :chart="categoryXAxisChart" class="apex-charts" id="x-axis-candlestick" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Candlestick with Line" id="line" titleClass="mb-3">
          <div dir="ltr">
            <ApexChart :chart="candlestickWithLine" class="apex-charts" id="candlestick-with-line" />
          </div>
        </UIComponentCard>
      </b-col>

      <b-col xl="3">
        <AnchorNavigation :elements="anchorNavigation" />
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'
import UIComponentCard from '@/components/UIComponentCard.vue'
import ApexChart from '@/components/ApexChart.vue'
import { simpleChart, categoryXAxisChart, candlestickWithLine } from '@/views/charts/candlestick/data'

const anchorNavigation = [
  {
    id: 'simple',
    title: 'Simple Candlestick Chart'
  },
  {
    id: 'x-axis',
    title: 'Category X-Axis'
  },
  {
    id: 'line',
    title: 'Candlestick with Line'
  }
]
</script>
