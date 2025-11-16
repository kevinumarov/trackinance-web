<template>
  <b-card no-body>
    <b-card-body>
      <b-card-title class="fw-bold text-uppercase mb-2"> Our Creative Team </b-card-title>
      <p class="mb-4">A dedicated group of experts committed to crafting visually stunning and highly functional user interfaces. With a keen eye for design and a passion for innovation, our team transforms concepts into captivating HTML-based interfaces. From sleek layouts to seamless interactions, we deliver UI solutions that elevate user experiences and exceed expectations.</p>

      <b-row>
        <b-col xxl="3" md="6" v-for="(item, idx) in teamData" :key="idx">
          <MemberCard :item="item" />
        </b-col>
      </b-row>

      <div class="mt-3 text-center">
        <router-link :to="{ name: 'pages.our-team' }" class="btn btn-link link-primary text-decoration-underline">
          View All
          <i class="bx bx-right-arrow-alt fs-16 align-middle ms-1"></i>
        </router-link>
      </div>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import { teamData } from '@/views/pages/about-us/components/data'
import MemberCard from '@/views/pages/about-us/components/MemberCard.vue'
</script>
