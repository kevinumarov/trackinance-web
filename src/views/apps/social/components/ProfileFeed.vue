<template>
  <simplebar class="card h-100" data-simplebar>
    <b-card-body class="pb-2">
      <div class="d-flex flex-column text-center justify-content-center mb-3">
        <div class="mx-auto border border-2 border-primary rounded-circle">
          <img class="avatar-md rounded-circle border border-2 border-transparent" :src="avatar1" alt="Generic placeholder" />
        </div>
        <h5 class="mt-2 mb-1">Gatson Keller</h5>
        <p class="text-muted">California, USA</p>
        <p class="text-muted fst-italic">Hi I'm Cynthia Price,has been the industry's standard dummy text To an English person.</p>
      </div>

      <div class="hstack gap-3 text-center justify-content-evenly">
        <div>
          <h5 class="mb-0">389</h5>
          <small>Post</small>
        </div>
        <div>
          <h5 class="mb-0">5K</h5>
          <small>Followers</small>
        </div>
        <div>
          <h5 class="mb-0">210</h5>
          <small>Following</small>
        </div>
      </div>

      <div class="nav flex-column mt-3" id="social-tab" role="tablist" aria-orientation="vertical">
        <a class="nav-link px-0 fs-14 fw-medium" id="social-feed-tab" href="#" :class="socialTab === 'social-feed' && 'active'" @click="toggleTabs('social-feed')">
          <i class="align-middle bx bx-rss fs-15 me-1"></i>
          Feed
        </a>

        <a class="nav-link px-0 fs-14 fw-medium" id="social-friends-tab" href="#" :class="socialTab === 'social-friends' && 'active'" @click="toggleTabs('social-friends')">
          <i class="align-middle bx bx-user-circle fs-15 me-1"></i>
          Friends
        </a>

        <a class="nav-link px-0 fs-14 fw-medium" id="social-events-tab" href="#" :class="socialTab === 'social-events' && 'active'" @click="toggleTabs('social-events')">
          <i class="align-middle bx bx-calendar-heart fs-15 me-1"></i>
          Events
        </a>

        <a class="nav-link px-0 fs-14 fw-medium" id="social-groups-tab" href="#" :class="socialTab === 'social-groups' && 'active'" @click="toggleTabs('social-groups')">
          <i class="align-middle bx bx-group fs-15 me-1"></i>
          Groups
        </a>

        <a class="nav-link px-0 fs-14 fw-medium" id="social-saved-tab" href="#" :class="socialTab === 'social-saved' && 'active'" @click="toggleTabs('social-saved')">
          <i class="align-middle bx bx-save fs-15 me-1"></i>
          Saved
        </a>

        <a class="nav-link px-0 fs-14 fw-medium" id="social-memories-tab" href="#" :class="socialTab === 'social-memories' && 'active'" @click="toggleTabs('social-memories')">
          <i class="align-middle bx bx-history fs-15 me-1"></i>
          Memories
        </a>
      </div>
    </b-card-body>
    <div class="border-top">
      <h6 class="text-uppercase px-3 py-2 mb-0">Events</h6>
      <div class="list-group list-group-flush">
        <a href="javascript:void(0);" class="list-group-item list-group-item-action border-0">
          <i class="bx bx-cake align-middle me-1"></i>
          Aarya's birthday today
        </a>
        <a href="javascript:void(0);" class="list-group-item list-group-item-action border-0">
          <i class="bx bx-heart align-middle me-1"></i>
          Penda's wedding tomorrow
        </a>
        <a href="javascript:void(0);" class="list-group-item list-group-item-action border-0">
          <i class="bx bx-bookmark align-middle me-1"></i>
          Meeting with Big B
        </a>
      </div>
    </div>
  </simplebar>
</template>
<script setup lang="ts">
import simplebar from 'simplebar-vue'
import avatar1 from '@/assets/images/users/avatar-1.jpg'

const props = defineProps(['socialTab', 'toggleTabs'])
</script>
