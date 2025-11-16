<template>
  <b-card no-body>
    <b-card-body class="p-4">
      <b-card-title class="fw-bold text-uppercase mb-2"> Our Services </b-card-title>
      <p class="mb-4">Our work stands as a testament to dedication, innovation, and excellence. With meticulous attention to detail and a passion for surpassing expectations, we strive to deliver solutions that inspire and empower.</p>

      <b-row>
        <b-col md="4" v-for="(item, idx) in serviceData" :key="idx">
          <div class="d-flex flex-wrap flex-md-nowrap gap-2 p-3 mb-3">
            <div class="flex-shrink-0 avatar-sm">
              <div class="avatar-title bg-gradient text-white rounded-circle" :class="item.variant">
                <i class="bx fs-20" :class="item.icon"></i>
              </div>
            </div>

            <div class="flex-grow-1 d-flex flex-grow-1 flex-column">
              <h5 class="fs-16 fw-semibold lh-base">
                <a href="#!" class="text-reset">{{ item.title }}</a>
              </h5>

              <span class="flex-grow-1 text-muted">{{ item.description }}</span>
            </div>
          </div>
        </b-col>
      </b-row>

      <div class="mt-3 text-center">
        <a href="#!" class="text-primary">
          <i class="bx bx-loader-circle spin-icon fs-22 align-middle me-1"></i>
          Loading
        </a>
      </div>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import { serviceData } from '@/views/pages/about-us/components/data'
</script>
