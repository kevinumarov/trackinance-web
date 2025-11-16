<template>
  <b-card no-body>
    <div class="position-relative">
      <img :src="img6" alt="" class="card-img rounded-bottom-0" height="200" />
      <img :src="avatar1" alt="" class="avatar-lg rounded-circle position-absolute top-100 start-0 translate-middle-y ms-3 border border-light border-3" />
    </div>
    <b-card-body class="mt-4">
      <div class="">
        <div class="d-flex align-items-center">
          <div class="d-block">
            <h4 class="mb-1">Jeannette C. Mullin</h4>
            <p class="fs-14 mb-0">Front End Developer</p>
          </div>
          <div class="ms-auto">
            <b-dropdown :variant="null" size="sm" toggle-class="arrow-none p-0 m-0" menu-class="dropdown-menu-end" no-caret>
              <template #button-content>
                <i class="bx bx-dots-vertical-rounded fs-18 text-dark mb-1" />
              </template>
              <b-dropdown-item><i class="bx bx-edit-alt me-2" />Edit Profile</b-dropdown-item>
              <b-dropdown-item><i class="bx bx-export me-2" />Export Profile</b-dropdown-item>
              <b-dropdown-item><i class="bx bxs-hand-up me-2" />Action</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <b-row class="mt-3">
          <b-col cols="12">
            <b-card-title tag="h5" class="badge bg-light text-secondary py-1 px-2 fs-13 mb-3 border-start border-secondary border-2 rounded-1"> About Me </b-card-title>
            <p class="fs-15 mb-0 text-muted">Hi I'm Jeannette Mullin. I am user experience and user interface designer. I have been working on Full Stack Developer since last 10 years.</p>
            <div class="mt-3">
              <div class="d-flex gap-2 flex-wrap">
                <b-badge :variant="null" class="text-secondary py-1 px-2 fs-12 border rounded-1">Code</b-badge>
                <b-badge :variant="null" class="text-secondary py-1 px-2 fs-12 border rounded-1">UX Researcher</b-badge>
                <b-badge :variant="null" class="text-secondary py-1 px-2 fs-12 border rounded-1">Python</b-badge>
                <b-badge :variant="null" class="text-secondary py-1 px-2 fs-12 border rounded-1">HTML</b-badge>
                <b-badge :variant="null" class="text-secondary py-1 px-2 fs-12 border rounded-1">JavaScript</b-badge>
                <b-badge :variant="null" class="text-secondary py-1 px-2 fs-12 border rounded-1">WordPress</b-badge>
                <b-badge :variant="null" class="text-secondary py-1 px-2 fs-12 border rounded-1">App Development </b-badge>
                <b-badge :variant="null" class="text-secondary py-1 px-2 fs-12 border rounded-1">SQL</b-badge>
                <b-badge :variant="null" class="text-secondary py-1 px-2 fs-12 border rounded-1">MongoDB</b-badge>
              </div>
            </div>
            <div class="mt-4">
              <h5 class="text-dark fw-medium">Links :</h5>
              <a href="#!" class="text-primary text-decoration-underline">https://myworkbench-portfolio.com</a>
              <p class="mb-0 mt-1">
                <a href="#!" class="text-primary text-decoration-underline">https://scaly-paddock.biz//a.portfolio </a>
              </p>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-card-body>
    <b-card-footer class="bg-light-subtle">
      <b-row class="g-2 mb-1">
        <b-col lg="4">
          <b-button variant="primary" class="d-flex align-items-center justify-content-center gap-1 w-100">
            <Icon icon="iconamoon:profile-duotone"></Icon>
            Follow
          </b-button>
        </b-col>
        <b-col lg="4">
          <b-button variant="success" class="d-flex align-items-center justify-content-center gap-1 w-100">
            <Icon icon="iconamoon:comment-dots-duotone"></Icon>
            Message
          </b-button>
        </b-col>
        <b-col lg="4">
          <b-button variant="danger" class="d-flex align-items-center justify-content-center gap-1 w-100">
            <Icon icon="iconamoon:share-1-duotone"></Icon>
            Share
          </b-button>
        </b-col>
      </b-row>
    </b-card-footer>
  </b-card>
</template>

<script setup lang="ts">
import img6 from '@/assets/images/small/img-6.jpg'
import avatar1 from '@/assets/images/users/avatar-1.jpg'
import { Icon } from '@iconify/vue'
</script>
