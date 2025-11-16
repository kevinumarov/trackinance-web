<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title tag="h5">Skill</b-card-title>
    </b-card-header>
    <b-card-body>
      <b-row>
        <b-col cols="12">
          <template v-for="(item, idx) in skillData" :key="idx">
            <p class="fs-15 mb-1 float-end">{{ item.progressValue }}%</p>
            <p class="fs-15 mb-1">
              {{ item.title }}
            </p>
            <b-progress :value="item.progressValue" striped animated class="progress-sm" :class="skillData.length - 1 === idx ? 'mb-2' : 'mb-3'" />
          </template>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import { skillData } from '@/views/pages/profile/components/data'
</script>
