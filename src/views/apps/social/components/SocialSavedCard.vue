<template>
  <b-card no-body>
    <b-card-body>
      <div class="d-flex gap-2 align-items-center mb-2">
        <div class="border border-2 border-primary rounded-circle">
          <img class="rounded-circle border border-2 border-transparent" :class="item.imageContent && 'avatar-md '" :src="item.avatar" height="48" alt="Generic placeholder img" />
        </div>

        <div class="flex-grow-1" v-if="item.timestamp">
          <p class="mb-0">
            {{ item.title }}
          </p>
          <small class="text-muted">{{ item.timestamp }}</small>
        </div>

        <div class="flex-grow-1" v-else>
          <h5 class="my-0">
            {{ item.title }}
          </h5>
          <p class="mb-0">
            Post by
            <b>{{ item.postBy }}</b>
          </p>
        </div>

        <b-dropdown :variant="null" class="text-muted" toggle-class="arrow-none text-muted fs-18 p-0 m-0" menu-class="dropdown-menu-end">
          <template #button-content>
            <i class="bx bx-dots-vertical-rounded mb-1" />
          </template>
          <b-dropdown-item><i class="bx bx-share me-1"></i>Share</b-dropdown-item>
          <b-dropdown-item><i class="bx bxl-telegram me-1"></i>Send in Message</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-images me-1"></i>View Original Post</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-link me-1"></i>Copy Link</b-dropdown-item>
          <b-dropdown-item><i class="bx bx-bookmark-minus me-1"></i>Unsave</b-dropdown-item>
        </b-dropdown>
      </div>
      <template v-if="item.desc">
        <p class="mb-0" v-for="(description, idx) in item.desc" :key="idx">{{ description }}</p>
        <p class="text-primary mb-3">
          <template v-for="(hashTag, idx) in item.hashTags" :key="idx"> #{{ hashTag }} </template>
        </p>
        <a href="javascript:void(0);">
          <img class="img-fluid rounded" :src="item.imageContent" alt="favorite-2" />
        </a>
      </template>

      <b-row v-if="item.imgs">
        <b-col md="5" v-for="(image, idx) in item.imgs" :key="idx">
          <img :src="image" class="img-fluid rounded" alt="post-2" />
        </b-col>
      </b-row>

      <p class="text-justify mb-0" v-if="item.textContent">
        {{ item.textContent }}
      </p>

      <b-row v-if="item.videoContent">
        <b-col>
          <div class="ratio ratio-21x9 rounded overflow-hidden">
            <iframe :src="item.videoContent" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" :allowfullscreen="true"></iframe>
          </div>
        </b-col>
      </b-row>

      <div class="d-flex align-items-center mt-2">
        <a href="javascript: void(0);" class="btn btn-link text-muted"><i class="bx bxs-heart align-middle text-danger"></i> {{ item.views }} Likes</a>
        <a href="javascript: void(0);" class="btn btn-link text-muted"><i class="bx bx-comment align-middle"></i> {{ item.comments }} Comments</a>
        <a href="javascript: void(0);" class="btn btn-link text-muted"><i class="bx bx-share-alt align-middle"></i> Share</a>
        <a href="javascript: void(0);" class="btn btn-link text-muted ms-auto"><i class="bx bx-bookmark align-middle"></i> Save</a>
      </div>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { SavedPostType } from '@/views/apps/social/components/types'

defineProps({
  item: {
    type: Object as PropType<SavedPostType>,
    required: true
  }
})
</script>
