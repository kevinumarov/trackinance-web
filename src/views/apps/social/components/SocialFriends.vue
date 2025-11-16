<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a href="#" class="nav-link px-4" :class="friendsTab && 'active'" @click="friendsTab = !friendsTab">
        <span>All Friends</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link px-4" :class="!friendsTab && 'active'" @click="friendsTab = !friendsTab">
        <span>Pending Requests (2)</span>
      </a>
    </li>
  </ul>

  <div class="tab-content mt-3 pt-0 text-muted">
    <div class="tab-pane" id="all" :class="friendsTab && 'show active'">
      <template v-for="(item, idx) in friendsRequests" :key="idx">
        <SocialFriendCard :item="item" />
      </template>
    </div>

    <div class="tab-pane" id="pending" :class="!friendsTab && 'show active'">
      <template v-for="(item, idx) in pendingFriendsRequests" :key="idx">
        <SocialFriendCard :item="item" />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import SocialFriendCard from '@/views/apps/social/components/SocialFriendCard.vue'
import { friendsRequests, pendingFriendsRequests } from '@/views/apps/social/components/data'

const friendsTab = ref(true)
</script>
