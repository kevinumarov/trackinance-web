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
            <i class="bx bx-dots-vertical-rounded mb-2" />
          </template>
          <b-dropdown-item><i class="bx bx-bookmark align-middle pe-1"></i>Save post</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-user-x align-middle pe-1"></i>Unfollow</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-x-circle align-middle pe-1"></i>Hide post</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-block align-middle pe-1"></i>Block</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item><i class="bx bx-flag align-middle fa-fw pe-1"></i>Report post</b-dropdown-item>
        </b-dropdown>
      </div>
      <p>Story based around the idea of time lapse, animation to post soon!</p>

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
          <img class="rounded-circle border border-2 border-transparent" :src="avatar4" height="48" alt="Generic placeholder img" />
        </div>
        <div class="flex-grow-1">
          <h5 class="m-0">
            <router-link :to="{ name: 'pages.profile' }" class="text-reset">Thelma Fridley</router-link>
          </h5>
          <p class="text-muted mb-0">
            <small>about 1 hour ago</small>
          </p>
        </div>

        <b-dropdown :variant="null" class="text-muted" toggle-class="arrow-none text-muted fs-22 p-0 m-0" menu-class="dropdown-menu-end">
          <template #button-content>
            <i class="bx bx-dots-vertical-rounded mb-2" />
          </template>
          <b-dropdown-item><i class="bx bx-bookmark align-middle pe-1"></i>Save post</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-user-x align-middle pe-1"></i>Unfollow</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-x-circle align-middle pe-1"></i>Hide post</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-block align-middle pe-1"></i>Block</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item><i class="bx bx-flag align-middle fa-fw pe-1"></i>Report post</b-dropdown-item>
        </b-dropdown>
      </div>

      <div class="fs-16 text-center fst-italic text-dark">🌟✨ Just spent the most amazing weekend camping in the wilderness! 🏕️🌲 Nothing beats disconnecting from the hustle and bustle of city life and reconnecting with nature.</div>

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
        <a href="javascript: void(0);" class="btn btn-link text-muted ms-auto"
          ><i class="bx bx-bookmark align-middle"></i>
          Save
        </a>
      </div>

      <div class="post-user-comment-box mt-2">
        <div class="d-flex align-items-start">
          <img class="me-2 avatar-sm rounded-circle" :src="avatar3" alt="Generic placeholder img" />
          <div class="w-100">
            <div class="w-100 bg-light p-2 rounded">
              <h5 class="mt-0">
                <router-link :to="{ name: 'pages.profile' }" class="text-reset">Jeremy Tomlinson</router-link>
                <small class="text-muted"> 3 hours ago</small>
              </h5>
              Nice work, makes me think of The Money Pit.
            </div>
            <div class="d-flex gap-2">
              <a href="javascript: void(0);" class="text-muted fs-13 d-inline-block mt-2">
                <i class="bx bxs-heart align-middle"></i>
                Like(2)
              </a>
              <a href="javascript: void(0);" class="text-muted fs-13 d-inline-block mt-2">
                <i class="bx bx-share align-middle"></i>
                Reply
              </a>
            </div>

            <div class="d-flex align-items-start mt-3">
              <a class="pe-2" href="#">
                <img :src="avatar4" class="avatar-sm rounded-circle" alt="Generic placeholder img" />
              </a>
              <div class="w-100 bg-light p-2 rounded">
                <h5 class="mt-0">
                  <router-link :to="{ name: 'pages.profile' }" class="text-reset">Kathleen Thomas</router-link>
                  <small class="text-muted"> 5 hours ago</small>
                </h5>
                i'm in the middle of a timelapse animation myself! (Very different though.) Awesome stuff.
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-card-body>
  </b-card>

  <b-card no-body>
    <b-card-body>
      <div class="d-flex gap-2 align-items-center mb-2">
        <div class="border border-2 border-primary rounded-circle">
          <img class="rounded-circle border border-2 border-transparent" :src="avatar6" height="48" alt="Generic placeholder img" />
        </div>
        <div class="flex-grow-1">
          <h5 class="m-0">
            <router-link :to="{ name: 'pages.profile' }" class="text-reset">Jonathan Tiner</router-link>
          </h5>
          <p class="text-muted mb-0">
            <small>about 11 hour ago</small>
          </p>
        </div>

        <b-dropdown :variant="null" class="text-muted" toggle-class="arrow-none text-muted fs-22 p-0 m-0" menu-class="dropdown-menu-end">
          <template #button-content>
            <i class="bx bx-dots-vertical-rounded mb-2" />
          </template>
          <b-dropdown-item><i class="bx bx-bookmark align-middle pe-1"></i>Save post</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-user-x align-middle pe-1"></i>Unfollow</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-x-circle align-middle pe-1"></i>Hide post</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-block align-middle pe-1"></i>Block</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item><i class="bx bx-flag align-middle fa-fw pe-1"></i>Report post</b-dropdown-item>
        </b-dropdown>
      </div>

      <p>The parallax is a little odd but O.o that house build is awesome!!</p>

      <b-row>
        <b-col>
          <div class="ratio ratio-16x9 rounded overflow-hidden">
            <iframe src="https://player.vimeo.com/video/87993762" class="img-fluid border-0"></iframe>
          </div>
        </b-col>
      </b-row>

      <div class="d-flex align-items-center mt-2">
        <a href="javascript: void(0);" class="btn btn-link text-muted">
          <i class="bx bx-tv align-middle"></i>
          3.5k Views
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
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import post1 from '@/assets/images/app-social/post-1.jpg'
import post2 from '@/assets/images/app-social/post-2.jpg'
import post4 from '@/assets/images/app-social/post-4.jpg'
import post3 from '@/assets/images/app-social/post-3.jpg'

import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'
import avatar6 from '@/assets/images/users/avatar-6.jpg'
</script>
