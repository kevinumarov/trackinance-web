<template>
  <b-row>
    <b-col cols="12">
      <b-card-title tag="h5" class="mb-3">Left Timeline</b-card-title>
      <template v-for="(item, idx) in leftTimeLine" :key="idx">
        <div class="d-flex flex-row fs-18 align-items-center mb-3">
          <h5 class="mb-0">{{ item.date }}</h5>
        </div>
        <ul class="list-unstyled left-timeline">
          <li class="left-timeline-list" v-for="(event, idx) in item.events" :key="idx">
            <b-card no-body class="d-inline-block">
              <b-card-body>
                <h5 class="mt-0 fs-16">
                  {{ event.title }}
                  <b-badge variant="secondary" class="ms-1 align-items-center" v-if="event.badge">{{ event.badge }}</b-badge>
                </h5>
                <p class="text-muted mb-0">
                  {{ event.description }}
                </p>
              </b-card-body>
            </b-card>
          </li>
        </ul>
      </template>
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import { leftTimeLine } from '@/views/pages/timeline/components/data'
</script>
