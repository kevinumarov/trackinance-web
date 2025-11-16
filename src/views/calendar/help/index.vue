<template>
  <DefaultLayout>
    <PageBreadcrumb title="Help" subtitle="Calendar" />
    <b-row>
      <b-col>
        <b-row class="d-flex justify-content-center text-center mt-4 pb-5">
          <b-col md="8" lg="6" xl="4">
            <h3 class="fw-semibold">Search for a question</h3>
            <p class="mb-3 text-muted">Type your question or search keyword</p>
            <div class="search-bar">
              <span><i class="bx bx-search-alt"></i></span>
              <b-form-input type="email" id="search" placeholder="Start typing..." />
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="d-flex justify-content-center my-4">
      <b-col md="6" lg="4" class="mb-3" v-for="(help, idx) in helpData" :key="idx">
        <HelpCard :help="help" />
      </b-col>
    </b-row>

    <b-row class="mb-5">
      <b-col cols="12" class="text-center">
        <h4>Can't find a questions?</h4>
        <b-button type="button" variant="success" size="sm" class="mt-2"> <i class="bx bx-envelope me-1"></i> Email us your question </b-button>
        <b-button type="button" variant="info" size="sm" class="mt-2 ms-1"> <i class="bx bxl-twitter me-1"></i> Send us a tweet </b-button>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import HelpCard from '@/views/calendar/help/components/HelpCard.vue'
import { helpData } from '@/views/calendar/help/components/data'
</script>
