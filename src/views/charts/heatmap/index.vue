<template>
  <DefaultLayout>
    <PageBreadcrumb title="Heatmap Charts" subtitle="Charts" />
    <b-row>
      <b-col xl="9">
        <UIComponentCard title="Basic Heatmap - Single Series" titleClass="mb-3" id="basic">
          <div dir="ltr">
            <ApexChart :chart="basicHeatmap" class="apex-charts" id="basic-heatmap" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Heatmap - Multiple Series" titleClass="mb-3" id="multiple-series">
          <div dir="ltr">
            <ApexChart :chart="multipleHeatmap" class="apex-charts" id="multiple-series-heatmap" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Heatmap - Color Range" titleClass="mb-3" id="color-range">
          <div dir="ltr">
            <ApexChart :chart="colorRangeHeatmap" class="apex-charts" id="color-range-heatmap" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Heatmap - Range without Shades" titleClass="mb-3" id="rounded">
          <div dir="ltr">
            <ApexChart :chart="rangeWithoutShade" class="apex-charts" id="rounded-heatmap" />
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
import AnchorNavigation from '@/components/AnchorNavigation.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import ApexChart from '@/components/ApexChart.vue'
import UIComponentCard from '@/components/UIComponentCard.vue'
import { basicHeatmap, multipleHeatmap, colorRangeHeatmap, rangeWithoutShade } from '@/views/charts/heatmap/data'

const anchorNavigation = [
  {
    id: 'basic',
    title: 'Basic Heatmap - Single Series'
  },
  {
    id: 'multiple-series',
    title: 'Heatmap - Multiple Series'
  },
  {
    id: 'color-range',
    title: 'Heatmap - Color Range'
  },
  {
    id: 'rounded',
    title: 'Heatmap - Range without Shades'
  }
]
</script>
