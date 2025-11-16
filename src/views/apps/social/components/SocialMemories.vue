<template>
  <b-card no-body>
    <b-card-body>
      <div class="d-flex gap-2 align-items-center mb-2">
        <div class="border border-2 border-primary rounded-circle">
          <img class="rounded-circle border border-2 border-transparent" :src="avatar3" height="48" alt="Generic placeholder img" />
        </div>
        <div class="flex-grow-1">
          <h5 class="m-0">
            <router-link :to="{ name: 'pages.profile' }" class="text-reset">Jeremy Tomlinson</router-link>
          </h5>
          <p class="text-muted mb-0">
            <small>about 2 minuts ago</small>
          </p>
        </div>

        <b-dropdown :variant="null" class="text-muted" toggle-class="arrow-none text-muted fs-22 p-0 m-0" menu-class="dropdown-menu-end">
          <template #button-content>
            <i class="bx bx-dots-vertical-rounded mb-1" />
          </template>
          <b-dropdown-item><i class="bx bx-bookmark align-middle pe-1" />Save post</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-user-x align-middle pe-1" />Unfollow</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-x-circle align-middle pe-1" />Hide post</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-block align-middle pe-1" />Block</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item><i class="bx bx-flag align-middle fa-fw pe-1" />Report post</b-dropdown-item>
        </b-dropdown>
      </div>
      <p>Story based around the idea of time lapse, animation to post soon!</p>

      <div class="bg-soft-primary p-1 rounded text-center mb-3">
        <h5 class="text-primary ms-2">2 years ago</h5>
        <a href="javascript:void(0);" class="ms-2 text-primary"> See all your memories<i class="bi bi-chevron-right ms-1"></i> </a>
      </div>

      <b-row>
        <b-col md="6">
          <img :src="post1" class="img-fluid rounded" alt="post-1" />
        </b-col>
        <b-col md="6">
          <b-row>
            <b-col>
              <div class="mb-3 mt-3 mt-md-0">
                <img :src="post2" class="img-fluid rounded" alt="post-2" />
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <img :src="post4" class="img-fluid rounded" alt="post-4" />
            </b-col>
            <b-col md="6" class="mt-3 mt-md-0">
              <div class="position-relative overflow-hidden rounded">
                <a href="javascript:void(0);">
                  <img :src="post3" class="img-fluid rounded" alt="post-3" />
                  <div class="bg-overlay bg-dark"></div>
                  <h3 class="position-absolute top-50 start-50 translate-middle my-0 text-white">+7</h3>
                </a>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <div class="d-flex align-items-center my-2">
        <a href="javascript: void(0);" class="btn btn-link text-muted">
          <i class="bx bxs-heart align-middle text-danger"></i>
          1.5k Likes
        </a>
        <a href="javascript: void(0);" class="btn btn-link text-muted">
          <i class="bx bx-comment align-middle"></i>
          521 Comments
        </a>
        <a href="javascript: void(0);" class="btn btn-link text-muted">
          <i class="bx bx-share-alt align-middle"></i>
          Share
        </a>
        <a href="javascript: void(0);" class="btn btn-link text-muted ms-auto">
          <i class="bx bx-bookmark align-middle"></i>
          Save
        </a>
      </div>

      <div class="d-flex align-items-start">
        <img :src="avatar1" height="32" class="align-self-start rounded me-2" alt="Arya Stark" />
        <div class="w-100">
          <input type="text" class="form-control bg-light border-0 form-control-sm" placeholder="Write a comment" />
        </div>
      </div>
    </b-card-body>
  </b-card>

  <b-card no-body>
    <b-card-body>
      <div class="d-flex gap-2 align-items-center mb-2">
        <div class="border border-2 border-primary rounded-circle">
          <img class="rounded-circle border border-2 border-transparent" :src="avatar3" height="48" alt="Generic placeholder img" />
        </div>
        <div class="flex-grow-1">
          <h5 class="my-0">
            <b class="text-primary">Martin R. Peters</b>
          </h5>
          <small class="mb-0">Post: 07 Feb, 2021 06:00AM</small>
        </div>

        <b-dropdown :variant="null" class="text-muted" toggle-class="arrow-none text-muted fs-22 p-0 m-0" menu-class="dropdown-menu-end">
          <template #button-content>
            <i class="bx bx-dots-vertical-rounded mb-1" />
          </template>
          <b-dropdown-item><i class="bx bx-bookmark align-middle pe-1" />Save post</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-user-x align-middle pe-1" />Unfollow</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-x-circle align-middle pe-1" />Hide post</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-block align-middle pe-1" />Block</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item><i class="bx bx-flag align-middle fa-fw pe-1" />Report post</b-dropdown-item>
        </b-dropdown>
      </div>

      <div class="bg-soft-primary p-1 rounded text-center mb-3">
        <h5 class="text-primary ms-2">2 years ago</h5>
        <a href="javascript:void(0);" class="ms-2 text-primary">
          See all your memories
          <i class="bi bi-chevron-right ms-1"></i>
        </a>
      </div>

      <b-row>
        <b-col>
          <p class="text-justify">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</p>
          <b-row class="g-0 align-items-center">
            <b-col md="5">
              <img :src="post3" class="card-img" alt="..." />
            </b-col>
            <b-col md="7">
              <b-card-body>
                <b-card-title tag="h5" class="fs-16"> DJs flock </b-card-title>
                <p class="card-text text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head.</p>
              </b-card-body>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <div class="d-flex align-items-center my-2">
        <a href="javascript: void(0);" class="btn btn-link text-muted">
          <i class="bx bxs-heart align-middle text-danger"></i>
          2.6k Likes
        </a>
        <a href="javascript: void(0);" class="btn btn-link text-muted">
          <i class="bx bx-comment align-middle"></i>
          412 Comments
        </a>
        <a href="javascript: void(0);" class="btn btn-link text-muted">
          <i class="bx bx-share-alt align-middle"></i>
          Share
        </a>
        <a href="javascript: void(0);" class="btn btn-link text-muted ms-auto">
          <i class="bx bx-bookmark align-middle"></i>
          Save
        </a>
      </div>

      <div class="d-flex align-items-start">
        <img :src="avatar1" height="32" class="align-self-start rounded me-2" alt="Arya Stark" />
        <div class="w-100">
          <input type="text" class="form-control bg-light border-0 form-control-sm" placeholder="Write a comment" />
        </div>
      </div>
    </b-card-body>
  </b-card>

  <template v-for="(item, idx) in memoriesData" :key="idx">
    <SocialMemoryCard :item="item" />
  </template>
</template>
<script setup lang="ts">
import { memoriesData } from '@/views/apps/social/components/data'
import SocialMemoryCard from '@/views/apps/social/components/SocialMemoryCard.vue'

import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'

import post1 from '@/assets/images/app-social/post-1.jpg'
import post2 from '@/assets/images/app-social/post-2.jpg'
import post3 from '@/assets/images/app-social/post-3.jpg'
import post4 from '@/assets/images/app-social/post-4.jpg'
</script>
