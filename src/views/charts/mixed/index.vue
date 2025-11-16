<template>
  <DefaultLayout>
    <PageBreadcrumb title="Mixed Charts" subtitle="Charts" />
    <b-row>
      <b-col xl="9">
        <UIComponentCard title="Line & Column Chart" titleClass="mb-3" id="line-column">
          <div dir="ltr">
            <ApexChart :chart="lineColumnChart" class="apex-charts" id="line-column-mixed" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Multiple Y-Axis Chart" titleClass="mb-3" id="multiple-yaxis">
          <div dir="ltr">
            <ApexChart :chart="multipleYAxisChart" class="apex-charts" id="multiple-yaxis-mixed" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Line & Area Chart" titleClass="mb-3" id="line-area">
          <div dir="ltr">
            <ApexChart :chart="lineAreaChart" class="apex-charts" id="line-area-mixed" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Line, Column & Area Chart" titleClass="mb-3" id="all">
          <div dir="ltr">
            <ApexChart :chart="lineColumnAreaChart" class="apex-charts" id="all-mixed" />
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
import { lineColumnChart, multipleYAxisChart, lineAreaChart, lineColumnAreaChart } from '@/views/charts/mixed/data'

const anchorNavigation = [
  {
    id: 'line-column',
    title: 'Line & Column Chart'
  },
  {
    id: 'multiple-yaxis',
    title: 'Multiple Y-Axis Chart'
  },
  {
    id: 'line-area',
    title: 'Line & Area Chart'
  },
  {
    id: 'all',
    title: 'Line, Column & Area Chart'
  }
]
</script>
