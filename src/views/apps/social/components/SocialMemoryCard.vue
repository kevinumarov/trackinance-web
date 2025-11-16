<template>
  <b-card no-body>
    <b-card-body>
      <div class="d-flex gap-2 align-items-center mb-2">
        <div class="border border-2 border-primary rounded-circle">
          <img class="rounded-circle border border-2 border-transparent" :src="item.avatar" height="48" alt="Generic placeholder img" />
        </div>
        <div class="flex-grow-1">
          <p class="mb-0">
            {{ item.title }}
          </p>
          <small class="text-muted">{{ item.timeStamp }}</small>
        </div>

        <b-dropdown :variant="null" class="text-muted" toggle-class="arrow-none text-muted fs-18 p-0 m-0" menu-class="dropdown-menu-end">
          <template #button-content>
            <i class="bx bx-dots-vertical-rounded mb-1" />
          </template>
          <b-dropdown-item link-class="d-flex">
            <div class="flex-shrink-0">
              <i class="bx bx-bell me-2" />
            </div>
            <div class="flex-grow-1">
              <p class="mb-0">Turn on notification</p>
            </div>
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item link-class="d-flex">
            <div class="flex-shrink-0">
              <i class="bx bx-bookmark me-2" />
            </div>
            <div class="flex-grow-1">
              <p class="mb-0">Save Video</p>
              <small class="text-muted">Add this to your save items.</small>
            </div>
          </b-dropdown-item>

          <b-dropdown-item link-class="d-flex">
            <div class="flex-shrink-0">
              <i class="bx bx-link me-2"></i>
            </div>
            <div class="flex-grow-1">
              <p class="mb-0">Copy Link</p>
            </div>
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item link-class="d-flex">
            <div class="flex-shrink-0">
              <i class="bx bx-x-circle me-2"></i>
            </div>
            <div class="flex-grow-1">
              <p class="mb-0">Hide this video</p>
              <small class="text-muted">You won't see this video.</small>
            </div>
          </b-dropdown-item>

          <b-dropdown-item link-class="d-flex">
            <div class="flex-shrink-0">
              <i class="bx bx-x-circle me-2"></i>
            </div>
            <div class="flex-grow-1">
              <p class="mb-0">Report this video</p>
              <small class="text-muted">Tell us about a problem with this video.</small>
            </div>
          </b-dropdown-item>
        </b-dropdown>
      </div>

      <b-row>
        <b-col>
          <div class="ratio ratio-21x9 rounded overflow-hidden">
            <iframe :src="item.link" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>

      <div class="d-flex align-items-center mt-2">
        <a href="javascript: void(0);" class="btn btn-link text-muted"><i class="bx bx-tv align-middle"></i> {{ item.views }} Views</a>
        <a href="javascript: void(0);" class="btn btn-link text-muted"><i class="bx bx-comment align-middle"></i> {{ item.comments }} Comments</a>
        <a href="javascript: void(0);" class="btn btn-link text-muted"><i class="bx bx-share-alt align-middle"></i> Share</a>
        <a href="javascript: void(0);" class="btn btn-link text-muted ms-auto"><i class="bx bx-bookmark align-middle"></i> Save</a>
      </div>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { MemoriesType } from '@/views/apps/social/components/types'

defineProps({
  item: {
    type: Object as PropType<MemoriesType>,
    required: true
  }
})
</script>
