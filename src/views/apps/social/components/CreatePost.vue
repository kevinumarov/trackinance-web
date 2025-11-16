<template>
  <b-card no-body>
    <b-card-body>
      <b-dropdown :variant="null" class="float-end" toggle-class="arrow-none text-dark p-0 m-0" menu-class="dropdown-menu-end">
        <template #button-content>
          <i class="bx bx-slider-alt fs-18 mb-2" />
        </template>
        <a href="javascript:void(0);" class="dropdown-header text-center fs-14">Post Filters</a>
        <b-dropdown-divider class="mt-0" />
        <b-dropdown-item link-class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <i class="bx bx-bookmark fs-18 align-middle me-2"></i>
          </div>
          <div class="flex-grow-1">
            <p class="mb-0">Save Link</p>
            <small class="text-muted">Add this to your saved item</small>
          </div>
        </b-dropdown-item>
        <b-dropdown-item link-class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <i class="bx bx-bell-off fs-18 align-middle me-2"></i>
          </div>
          <div class="flex-grow-1">
            <p class="mb-0">Notification</p>
            <small class="text-muted">Turn off notification for this post</small>
          </div>
        </b-dropdown-item>
      </b-dropdown>

      <b-card-title tag="h5" class="mb-3"> Create Post </b-card-title>

      <div class="d-md-flex mb-2">
        <b-dropdown :variant="null" class="me-1" toggle-class="btn-outline-light text-dark">
          <template #button-content> Who can see your post ? </template>
          <b-dropdown-item><i class="bx bx-globe-alt me-1"></i>Public</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-user me-1"></i>Friends</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-user-check me-1"></i>Friends Except..</b-dropdown-item>
        </b-dropdown>

        <b-dropdown :variant="null" class="me-1 mt-md-0" toggle-class="btn-outline-light text-dark">
          <template #button-content> <i class="bx bx-plus me-1" />Album </template>
          <b-dropdown-item><i class="bx bx-images me-1"></i>Untitled Album</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-images me-1"></i>My Dream</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-images me-1"></i>Tours Story</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="mb-3">
        <textarea class="form-control" id="description" rows="3" placeholder="What's on your mind?"></textarea>
      </div>
      <div class="d-flex gap-1">
        <a href="javascript:void(0);" class="btn btn-outline-light text-dark btn-sm fs-16" v-b-tooltip.hover.top="'Photo / Video'">
          <i class="bx bx-images"></i>
        </a>
        <a href="javascript:void(0);" class="btn btn-outline-light text-dark btn-sm fs-16" v-b-tooltip.hover.top="'Tag People'">
          <i class="bx bxs-user-plus"></i>
        </a>
        <a href="javascript:void(0);" class="btn btn-outline-light text-dark btn-sm fs-16" v-b-tooltip.hover.top="'Feeling / Activity'">
          <i class="bx bxs-smile"></i>
        </a>
        <a href="javascript:void(0);" class="btn btn-outline-light text-dark btn-sm fs-16" v-b-tooltip.hover.top="'Check In'">
          <i class="bx bxs-location-plus"></i>
        </a>
        <a href="javascript:void(0);" class="btn btn-outline-light text-dark btn-sm fs-16" v-b-tooltip.hover.top="'Camera'">
          <i class="bx bxs-camera"></i>
        </a>
        <b-button type="button" variant="primary" class="ms-auto"> Publish </b-button>
      </div>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts"></script>
