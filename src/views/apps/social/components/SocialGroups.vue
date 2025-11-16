<template>
  <b-card no-body>
    <b-card-body class="px-0">
      <div class="px-3 mb-3">
        <b-dropdown :variant="null" class="float-end" toggle-class="arrow-none text-dark p-0 m-0" menu-class="dropdown-menu-end">
          <template #button-content>
            <i class="bx bx-cog fs-18 mb-1" />
          </template>
          <a href="javascript:void(0);" class="dropdown-header fs-14 fw-medium"> Notification Setting </a>

          <b-dropdown-item link-class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i class="bx bx-notification me-2"></i>
            </div>
            <div class="flex-grow-1">
              <div class="form-check form-switch mb-0 float-end">
                <input class="form-check-input" type="checkbox" role="switch" id="notification" checked />
              </div>
              <p class="mb-0">Show Notification Dots</p>
            </div>
          </b-dropdown-item>
          <b-dropdown-divider />
          <a href="javascript:void(0);" class="dropdown-header fs-14 fw-medium"> Manage Groups </a>

          <b-dropdown-item link-class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i class="bx bx-pin me-2 fs-18"></i>
            </div>
            <div class="flex-grow-1">
              <p class="mb-0">Pins</p>
              <small class="text-muted">Pins your favorite groups for quick access.</small>
            </div>
          </b-dropdown-item>

          <b-dropdown-item link-class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i class="bx bx-user-plus me-2 fs-18"></i>
            </div>
            <div class="flex-grow-1">
              <p class="mb-0">Following</p>
              <small class="text-muted">Follow or unfollow groups to control what you see in Newsfeed</small>
            </div>
          </b-dropdown-item>
        </b-dropdown>
        <b-card-title tag="h5"> Groups </b-card-title>
      </div>

      <b-form class="chat-search px-3">
        <div class="chat-search-box">
          <b-form-input type="text" name="search" id="search" placeholder="Search ..." />
          <i class="bx bx-search-alt search-icon"></i>
        </div>
      </b-form>
      <h5 class="px-3 mb-3">Groups you have joined</h5>
      <simplebar class="px-3 mb-2" data-simplebar style="max-height: 215px">
        <div class="d-flex align-items-center position-relative mb-3" v-for="(item, idx) in joinedGroup" :key="idx">
          <div class="flex-shrink-0">
            <img :src="item.image" class="img-fluid avatar-md rounded-circle me-2" alt="group-6" />
          </div>
          <div class="flex-grow-1">
            <p class="mb-0 fw-medium">
              <a href="#!" class="stretched-link">{{ item.title }}</a>
            </p>
            <small>{{ item.member }}</small
            ><br />
          </div>
        </div>
      </simplebar>
      <div class="d-grid">
        <b-button :variant="null" class="btn-soft-primary mx-3"> <i class="bx bx-plus me-1"></i>Create New Group </b-button>
      </div>
    </b-card-body>
  </b-card>
  <b-row>
    <b-col lg="6" v-for="(item, idx) in groupList" :key="idx">
      <SocialGroupsCard :item="item" />
    </b-col>
  </b-row>
  <b-card-title tag="h5" class="mb-3"> Friends Group </b-card-title>
  <b-row>
    <b-col lg="6" v-for="(item, idx) in friendsGroup" :key="idx">
      <SocialGroupsCard :item="item" />
    </b-col>
  </b-row>
  <b-card-title tag="h5" class="mb-3"> Suggested For You </b-card-title>
  <b-row>
    <b-col lg="6" v-for="(item, idx) in suggestedGroup" :key="idx">
      <SocialGroupsCard :item="item" />
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import simplebar from 'simplebar-vue'
import SocialGroupsCard from '@/views/apps/social/components/SocialGroupsCard.vue'
import { groupList, friendsGroup, suggestedGroup, joinedGroup } from '@/views/apps/social/components/data'
</script>
