<template>
  <DefaultLayout>
    <PageBreadcrumb title="Timeline Charts" subtitle="Charts" />
    <b-row>
      <b-col xl="9">
        <UIComponentCard title="Basic Timeline" titleClass="mb-3" id="basic">
          <div dir="ltr">
            <ApexChart :chart="basicTimelineChart" class="apex-charts" id="basic-timeline" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Distributed Timeline" titleClass="mb-3" id="distributed">
          <div dir="ltr">
            <ApexChart :chart="distributedTimelineChart" class="apex-charts" id="distributed-timeline" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Multi Series Timeline" titleClass="mb-3" id="multi-series">
          <div dir="ltr">
            <ApexChart :chart="multiSeriesTimelineChart" class="apex-charts" id="multi-series-timeline" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Advanced Timeline" titleClass="mb-3" id="advanced">
          <div dir="ltr">
            <ApexChart :chart="advancedTimelineChart" class="apex-charts" id="advanced-timeline" />
          </div>
        </UIComponentCard>

        <UIComponentCard title="Multiple Series - Group Rows" titleClass="mb-3" id="group-rows">
          <div dir="ltr">
            <ApexChart :chart="groupRowsTimelineChart" class="apex-charts" id="group-rows-timeline" />
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
import { basicTimelineChart, distributedTimelineChart, multiSeriesTimelineChart, advancedTimelineChart, groupRowsTimelineChart } from '@/views/charts/timeline/data'

const anchorNavigation = [
  {
    id: 'basic',
    title: 'Basic Timeline'
  },
  {
    id: 'distributed',
    title: 'Distributed Timeline'
  },
  {
    id: 'multi-series',
    title: 'Multi Series Timeline'
  },
  {
    id: 'advanced',
    title: 'Advanced Timeline'
  },
  {
    id: 'group-rows',
    title: 'Multiple Series - Group Rows'
  }
]
</script>
