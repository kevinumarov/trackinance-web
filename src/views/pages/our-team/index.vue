<template>
  <DefaultLayout>
    <PageBreadcrumb title="Our Team" subtitle="Pages" />
    <b-row>
      <b-col lg="12">
        <b-card no-body>
          <b-card-header>
            <b-row class="g-2">
              <b-col sm="4">
                <div class="search-bar">
                  <span><i class="bx bx-search-alt"></i></span>
                  <b-form-input type="search" id="search" placeholder="Search..." />
                </div>
              </b-col>
              <div class="col-sm-auto ms-auto">
                <div class="d-flex gap-1">
                  <b-button variant="danger">
                    <i class="bx bx-plus me-1 align-middle" />
                    Add Members
                  </b-button>
                  <b-button type="button" :variant="null" class="btn-soft-primary fs-14">
                    <i class="bx bxs-grid" />
                  </b-button>
                  <b-button type="button" :variant="null" class="btn-soft-primary fs-14">
                    <i class="bx bx-list-ul" />
                  </b-button>

                  <b-dropdown :variant="null" toggle-class="btn-soft-secondary fs-14" menu-class="dropdown-menu-end" no-caret>
                    <template #button-content>
                      <i class="bx bx-dots-vertical-rounded" />
                    </template>
                    <b-dropdown-item>All</b-dropdown-item>
                    <b-dropdown-item>Last Week</b-dropdown-item>
                    <b-dropdown-item>Last Month</b-dropdown-item>
                    <b-dropdown-item>Last Year</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
            </b-row>
          </b-card-header>
        </b-card>
        <b-row>
          <b-col xxl="4" md="6" v-for="(item, idx) in teamData" :key="idx">
            <TeamCard :item="item" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import TeamCard from '@/views/pages/our-team/components/TeamCard.vue'
import { teamData } from '@/views/pages/our-team/components/data'
</script>
