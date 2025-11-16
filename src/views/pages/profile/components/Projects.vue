<template>
  <b-row>
    <b-col cols="12">
      <b-card no-body>
        <b-card-header class="d-flex align-items-center">
          <b-card-title tag="h5">Projects</b-card-title>
          <div class="ms-auto">
            <b-dropdown :variant="null" size="sm" toggle-class="arrow-none p-0 m-0" menu-class="dropdown-menu-end" no-caret>
              <template #button-content>
                <i class="bx bx-dots-vertical-rounded fs-18 text-dark mb-1" />
              </template>
              <b-dropdown-item><i class="bx bx-edit-alt me-2" />Edit Report</b-dropdown-item>
              <b-dropdown-item><i class="bx bx-export me-2" />Export Report</b-dropdown-item>
              <b-dropdown-item><i class="bx bxs-hand-up me-2" />Action</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-card-header>
        <b-card-body>
          <b-row class="g-3">
            <b-col lg="6" v-for="(item, idx) in projectData" :key="idx">
              <ProjectsCard :item="item" />
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import { projectData } from '@/views/pages/profile/components/data'
import ProjectsCard from '@/views/pages/profile/components/ProjectsCard.vue'
</script>
