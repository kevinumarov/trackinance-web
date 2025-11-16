<template>
  <b-col xxl="8">
    <b-row>
      <PersonalInfo />
      <Followers />
    </b-row>
    <Projects />
    <b-row>
      <b-col cols="12">
        <b-card no-body>
          <b-card-header class="d-flex align-items-center">
            <b-card-title tag="h5">Messages</b-card-title>
            <div class="ms-auto">
              <a href="javascript:void(0);" class="text-primary"
                >Export
                <i class="bx bx-export ms-1"></i>
              </a>
            </div>
          </b-card-header>
          <b-card-body>
            <ul class="list-unstyled mb-0">
              <template v-for="(item, idx) in messagesData" :key="idx">
                <li :class="!idx ? 'pb-3 border-bottom' : messagesData.length - 1 === idx ? 'pt-3' : 'py-3 border-bottom'">
                  <div class="d-flex flex-wrap gap-2 align-items-center">
                    <img :src="item.avatar" alt="avatar-2" class="avatar-md rounded-circle" />
                    <div class="d-block">
                      <h5 class="fs-15 mt-0 mb-1">
                        {{ item.name }}
                      </h5>
                      <p class="text-muted fs-13 text-break mb-0">
                        {{ item.content }}
                      </p>
                    </div>
                    <div class="ms-auto text-end">
                      <p class="text-muted mb-0">
                        {{ item.time }}
                      </p>
                    </div>
                  </div>
                </li>
              </template>
            </ul>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-col>
</template>
<script setup lang="ts">
import PersonalInfo from '@/views/pages/profile/components/PersonalInfo.vue'
import Followers from '@/views/pages/profile/components/Followers.vue'
import Projects from '@/views/pages/profile/components/Projects.vue'

import { messagesData } from '@/views/pages/profile/components/data'
</script>
