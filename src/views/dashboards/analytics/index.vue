<template>
  <DefaultLayout>
    <PageBreadcrumb title="Analytics" subtitle="Dashboards" />

    <b-row>
      <b-col xxl="3">
        <b-row>
          <b-col md="6" xxl="12" v-for="(item, idx) in statistics" :key="idx">
            <StatisticsCard :item="item" />
          </b-col>
        </b-row>
      </b-col>

      <b-col xxl="9">
        <b-card no-body>
          <div class="p-0">
            <b-row class="g-0">
              <b-col lg="4">
                <div class="p-3">
                  <b-card-title tag="h4"> Conversions </b-card-title>

                  <ApexChart :chart="conversionsChart" class="apex-charts mb-2 mt-n2" />

                  <b-row class="text-center">
                    <b-col cols="6">
                      <p class="text-muted mb-2">This Week</p>
                      <h3 class="text-dark mb-3">23.5k</h3>
                    </b-col>

                    <b-col cols="6">
                      <p class="text-muted mb-2">Last Week</p>
                      <h3 class="text-dark mb-3">41.05k</h3>
                    </b-col>
                  </b-row>

                  <div class="text-center">
                    <b-button variant="light" type="button" class="shadow-none w-100"> View Details </b-button>
                  </div>
                </div>
              </b-col>

              <b-col lg="8" class="border-start">
                <div class="p-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <b-card-title tag="h4"> Performance </b-card-title>
                    <div>
                      <b-button variant="outline-light" size="sm" class="me-1">ALL</b-button>
                      <b-button variant="outline-light" size="sm" class="me-1">1M</b-button>
                      <b-button variant="outline-light" size="sm" class="me-1">6M</b-button>
                      <b-button variant="outline-light" size="sm" class="active">1Y</b-button>
                    </div>
                  </div>

                  <b-alert v-model="performanceAlert" variant="info" class="mt-3 text text-truncate mb-0"> We regret to inform you that our server is currently experiencing technical difficulties. </b-alert>

                  <div dir="ltr">
                    <ApexChart :chart="performanceChart" class="apex-charts" />
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <SessionsByCountry />
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="4">
        <SessionsByBrowser />
      </b-col>

      <b-col lg="8">
        <TopPages />
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import ApexChart from '@/components/ApexChart.vue'
import StatisticsCard from '@/views/dashboards/analytics/components/StatisticsCard.vue'
import SessionsByCountry from '@/views/dashboards/analytics/components/SessionsByCountry.vue'
import SessionsByBrowser from '@/views/dashboards/analytics/components/SessionsByBrowser.vue'
import TopPages from '@/views/dashboards/analytics/components/TopPages.vue'
import { conversionsChart, performanceChart, statistics } from '@/views/dashboards/analytics/components/data'

import { ref } from 'vue'

const performanceAlert = ref<boolean>(true)
</script>
