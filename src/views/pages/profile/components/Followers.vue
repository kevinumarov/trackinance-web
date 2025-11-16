<template>
  <b-col lg="6">
    <b-card no-body>
      <b-card-header class="d-flex">
        <b-card-title tag="h5"> Followers </b-card-title>
        <div class="ms-auto">
          <a href="javascript:void(0);" class="text-primary">View All </a>
        </div>
      </b-card-header>
      <b-card-body>
        <ul class="list-group">
          <template v-for="(item, idx) in followersData" :key="idx">
            <li class="list-group-item border-0" :class="!idx ? 'px-0 pt-0 border-bottom' : followersData.length - 1 === idx ? 'px-0 pb-0' : 'border-bottom px-0'">
              <div class="d-flex flex-wrap align-items-center gap-2">
                <img :src="item.avatar" alt="" class="rounded-circle avatar-sm" />
                <div class="d-block">
                  <h5 class="mb-1">
                    {{ item.name }}
                  </h5>
                  <h6 class="mb-0 text-muted">
                    {{ item.email }}
                  </h6>
                </div>
                <div class="ms-auto">
                  <a href="#!" class="btn btn-soft-secondary btn-sm">Follow</a>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { followersData } from '@/views/pages/profile/components/data'
</script>
