<template>
  <simplebar no-body class="card h-100" data-simplebar>
    <b-card-body>
      <b-card-title tag="h5" class="mb-3"> Friends </b-card-title>

      <b-form class="chat-search">
        <div class="chat-search-box">
          <b-form-input type="text" name="search" id="search" placeholder="Search ..." />
          <i class="bx bx-search-alt search-icon"></i>
        </div>
      </b-form>

      <h5 class="mb-3">Pending Request (2)</h5>

      <div class="d-flex position-relative mb-3">
        <div class="flex-shrink-0">
          <img :src="avatar2" class="img-fluid avatar-sm rounded me-2" alt="avatar-2" />
        </div>
        <div class="flex-grow-1 text-truncate">
          <p class="mb-0">
            <a href="#!" class="text-dark stretched-link"><b>Daniel J. Olsen</b> sent you a request</a>
          </p>
          <small>46 mutual friends</small><br />
        </div>
      </div>

      <hr class="mb-3" />

      <div class="d-flex position-relative">
        <div class="flex-shrink-0">
          <img :src="avatar3" class="img-fluid avatar-sm rounded me-2" alt="avatar-3" />
        </div>
        <div class="flex-grow-1 text-truncate">
          <p class="mb-0">
            <a href="#!" class="text-dark stretched-link"><b>Jack P. Roldan</b> sent you a request</a>
          </p>
          <small>23 mutual friends</small><br />
        </div>
      </div>
    </b-card-body>
    <b-card-body class="border-top">
      <b-card-title tag="h5" class="mb-3"> Friends Request </b-card-title>

      <template v-for="(item, idx) in friendsRequestList" :key="idx">
        <div class="d-flex align-items-center" :class="!(friendsRequestList.length - 1 === idx) && 'mb-3'">
          <div class="flex-shrink-0">
            <img :src="item.avatar" class="img-fluid avatar-sm rounded me-2" alt="avatar-5" />
          </div>
          <div class="flex-grow-1">
            <b-dropdown :variant="null" class="float-end" toggle-class="arrow-none text-dark p-0 m-0" menu-class="dropdown-menu-end">
              <template #button-content>
                <i class="bx bx-dots-vertical-rounded fs-18 mb-1" />
              </template>
              <b-dropdown-item><i class="bx bxs-user-detail me-1"></i>See Profile</b-dropdown-item>
              <b-dropdown-item><i class="bx bxl-telegram me-1"></i>Message to {{ item.name.split(' ')[0] }}</b-dropdown-item>
              <b-dropdown-item><i class="bx bx-user-x me-1"></i>Unfriend {{ item.name.split(' ')[0] }}</b-dropdown-item>
              <b-dropdown-item><i class="bx bx-block me-1"></i>Block {{ item.name.split(' ')[0] }}</b-dropdown-item>
            </b-dropdown>
            <h5 class="mb-1 fs-14">
              <a href="#!">{{ item.name }}</a>
            </h5>
            <p class="mb-0">
              {{ item.mutualFriends }}
            </p>
          </div>
        </div>
      </template>
    </b-card-body>
  </simplebar>
</template>
<script setup lang="ts">
import simplebar from 'simplebar-vue'
import { friendsRequestList } from '@/views/apps/social/components/data'

import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
</script>
