<template>
  <DefaultLayout>
    <PageBreadcrumb title="Social" subtitle="Apps" />
    <b-row class="justify-content-center">
      <b-col xxl="3">
        <div class="sticky-bar">
          <div class="offcanvas-xxl offcanvas-start" id="accountInfoffcanvas">
            <ProfileFeed :socialTab="socialTab" :toggleTabs="toggleTabs" />
          </div>
          <div class="d-block d-xl-none">
            <b-offcanvas v-model="showProfile" class="offcanvas-xxl" placement="start" no-header body-class="d-block p-0 m-0">
              <ProfileFeed :socialTab="socialTab" :toggleTabs="toggleTabs" />
            </b-offcanvas>
          </div>
        </div>
      </b-col>
      <b-col xxl="6">
        <b-card no-body class="d-xxl-none d-flex">
          <div class="d-flex gap-2 align-items-center p-2">
            <b-button variant="light" class="px-2 d-inline-flex align-items-center" type="button" @click="toggleProfileOffcanvas">
              <i class="bx bx-menu fs-18"></i>
            </b-button>

            <h5 class="me-auto mb-0">Gatson Keller</h5>

            <b-button variant="light" class="px-2 d-inline-flex align-items-center" type="button" @click="toggleOffcanvas">
              <i class="bx bx-menu fs-18"></i>
            </b-button>
          </div>
        </b-card>

        <div class="tab-content pt-0">
          <div class="tab-pane fade" id="social-feed" :class="socialTab === 'social-feed' && 'show active'">
            <SocialFeed />
          </div>

          <div class="tab-pane fade" id="social-friends" :class="socialTab === 'social-friends' && 'show active'">
            <SocialFriends />
          </div>

          <div class="tab-pane fade" id="social-events" :class="socialTab === 'social-events' && 'show active'">
            <SocialEvents />
          </div>

          <div class="tab-pane fade" id="social-groups" :class="socialTab === 'social-groups' && 'show active'">
            <SocialGroups />
          </div>

          <div class="tab-pane fade" id="social-saved" :class="socialTab === 'social-saved' && 'show active'">
            <SocialSaved />
          </div>

          <div class="tab-pane fade" id="social-memories" :class="socialTab === 'social-memories' && 'show active'">
            <SocialMemories />
          </div>
        </div>
      </b-col>

      <b-col xxl="3">
        <div class="sticky-bar">
          <div class="offcanvas-xxl offcanvas-end" id="friendListffcanvas">
            <FriendsFeed />
          </div>
          <div class="d-block d-xl-none">
            <b-offcanvas v-model="show" class="offcanvas-xxl" placement="end" no-header body-class="d-block p-0 m-0">
              <FriendsFeed />
            </b-offcanvas>
          </div>
        </div>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import FriendsFeed from '@/views/apps/social/components/FriendsFeed.vue'
import ProfileFeed from '@/views/apps/social/components/ProfileFeed.vue'
import SocialFeed from '@/views/apps/social/components/SocialFeed.vue'
import SocialFriends from '@/views/apps/social/components/SocialFriends.vue'
import SocialEvents from '@/views/apps/social/components/SocialEvents.vue'
import SocialGroups from '@/views/apps/social/components/SocialGroups.vue'
import SocialSaved from '@/views/apps/social/components/SocialSaved.vue'
import SocialMemories from '@/views/apps/social/components/SocialMemories.vue'

import { ref } from 'vue'

const show = ref(false)
const socialTab = ref('social-feed')

const toggleTabs = (e: string) => {
  socialTab.value = e
}

const toggleOffcanvas = () => {
  show.value = !show.value
}

const showProfile = ref(false)

const toggleProfileOffcanvas = () => {
  showProfile.value = !showProfile.value
}
</script>
