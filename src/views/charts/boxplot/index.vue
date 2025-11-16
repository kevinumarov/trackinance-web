<template>
  <DefaultLayout>
    <PageBreadcrumb title="Bar Charts" subtitle="Charts" />
    <b-row>
      <b-col xl="9">
        <UIComponentCard title="Basic Boxplot" id="basic" titleClass="mb-3">
          <div dir="ltr">
            <ApexChart :chart="basicBoxplotChart" class="apex-charts" id="basic-boxplot" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Scatter Boxplot" id="scatter" titleClass="mb-3">
          <div dir="ltr">
            <ApexChart :chart="scatterBoxplotChart" class="apex-charts" id="scatter-boxplot" />
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
import { basicBoxplotChart, scatterBoxplotChart } from '@/views/charts/boxplot/data'

const anchorNavigation = [
  {
    id: 'basic',
    title: 'Basic Boxplot'
  },
  {
    id: 'scatter',
    title: 'Scatter Boxplot'
  }
]
</script>
