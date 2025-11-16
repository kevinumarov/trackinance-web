<template>
  <DefaultLayout>
    <PageBreadcrumb title="Line Charts" subtitle="Charts" />
    <b-row>
      <b-col xl="9">
        <UIComponentCard title="Simple line chart" titleClass="mb-3" id="simple">
          <div dir="ltr">
            <ApexChart :chart="lineChart" class="apex-charts" id="line-chart" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Line with Data Labels" titleClass="mb-3" id="datalabel">
          <div dir="ltr">
            <ApexChart :chart="lineWithDataLabel" class="apex-charts" id="line-chart-datalabel" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Zoomable Timeseries" titleClass="mb-3" id="zoomable">
          <div dir="ltr">
            <ApexChart :chart="zoomableTimeseries" class="apex-charts" id="line-chart-zoomable" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Line Chart with Annotations" titleClass="mb-3" id="overview">
          <div dir="ltr">
            <ApexChart :chart="lineChartWithAnnotation" class="apex-charts" id="line-chart-annotations" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Syncing charts" titleClass="mb-3" id="syncing">
          <ApexChart :chart="syncingChart2" class="apex-charts" id="line-chart-syncing2" />
          <div dir="ltr">
            <ApexChart :chart="syncingChart" class="apex-charts" id="line-chart-syncing" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Gradient Line Chart" titleClass="mb-3" id="gradient">
          <div dir="ltr">
            <ApexChart :chart="gradientLineChart" class="apex-charts" id="line-chart-gradient" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Missing / Null values" titleClass="mb-3" id="missing">
          <div dir="ltr">
            <ApexChart :chart="missingChart" class="apex-charts" id="line-chart-missing" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Dashed Line Chart" titleClass="mb-3" id="dashed">
          <div dir="ltr">
            <ApexChart :chart="dashedLineChart" class="apex-charts" id="line-chart-dashed" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Stepline Chart" titleClass="mb-3" id="stepline">
          <div dir="ltr">
            <ApexChart :chart="steplineChart" class="apex-charts" id="line-chart-stepline" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Brush Chart" titleClass="mb-3" id="brush">
          <div dir="ltr">
            <ApexChart :chart="brushChart" class="apex-charts" id="chart-line" />
            <ApexChart :chart="brushChart2" class="apex-charts" id="chart-line2" />
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
import { lineChart, lineWithDataLabel, zoomableTimeseries, lineChartWithAnnotation, syncingChart, syncingChart2, gradientLineChart, missingChart, dashedLineChart, steplineChart, brushChart, brushChart2 } from '@/views/charts/line/data'

const anchorNavigation = [
  {
    id: 'simple',
    title: 'Simple line chart'
  },
  {
    id: 'datalabel',
    title: 'Line with Data Labels'
  },
  {
    id: 'zoomable',
    title: 'Zoomable Timeseries'
  },
  {
    id: 'overview',
    title: 'Line Chart with Annotations'
  },
  {
    id: 'syncing',
    title: 'Syncing charts'
  },
  {
    id: 'gradient',
    title: 'Gradient Line Chart'
  },
  {
    id: 'missing',
    title: 'Missing / Null values'
  },
  {
    id: 'dashed',
    title: 'Dashed Line Chart'
  },
  {
    id: 'stepline',
    title: 'Stepline Chart'
  },
  {
    id: 'brush',
    title: 'Brush Chart'
  }
]
</script>
