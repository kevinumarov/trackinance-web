<template>
  <b-card no-body>
    <b-card-body>
      <div class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <img :src="item.avatar" class="img-fluid avatar-md rounded me-2" alt="avatar-1" />
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
          <h5>
            <a href="#!" class="text-reset">{{ item.name }}</a>
          </h5>
          <p class="mb-0">
            {{ item.mutualFriends }}
          </p>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { FriendsRequestListType } from '@/views/apps/social/components/types'

defineProps({
  item: {
    type: Object as PropType<FriendsRequestListType>,
    required: true
  }
})
</script>
