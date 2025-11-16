<template>
  <header class="topbar">
    <div class="container-xxl">
      <div class="navbar-header">
        <div class="d-flex align-items-center gap-2">
          <div class="topbar-item">
            <button type="button" class="button-toggle-menu">
              <Icon icon="iconamoon:menu-burger-horizontal" class="fs-22" @click="toggleLeftSideBar" />
            </button>
          </div>

          <b-form class="app-search d-none d-md-block me-auto">
            <div class="position-relative">
              <b-form-input type="search" placeholder="Search..." autocomplete="off" />
              <Icon icon="iconamoon:search-duotone" class="search-widget-icon" />
            </div>
          </b-form>
        </div>

        <div class="d-flex align-items-center gap-1">
          <!-- Theme Toggle (Light/Dark) -->
          <div class="topbar-item">
            <button type="button" class="topbar-button" @click="toggleTheme">
              <Icon icon="iconamoon:mode-dark-duotone" class="fs-24 align-middle" />
            </button>
          </div>

          <!-- Category -->
          <DropDown class="topbar-item d-none d-lg-flex">
            <button type="button" class="topbar-button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <Icon icon="iconamoon:apps" class="fs-24 align-middle" />
            </button>
            <div class="dropdown-menu dropdown-menu-end p-0">
              <div class="p-1">
                <a class="dropdown-item py-2" href="javascript:void(0);" v-for="(item, idx) in categories" :key="idx">
                  <img :src="item.image" class="avatar-xs" alt="Github" />
                  <span class="ms-2"
                    >{{ item.name }}: <span class="fw-medium">{{ item.username }}</span></span
                  >
                </a>
              </div>
            </div>
          </DropDown>

          <!-- Notification -->
          <DropDown custom-class="topbar-item">
            <button type="button" class="topbar-button position-relative" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <Icon icon="iconamoon:notification-duotone" class="fs-24 align-middle" />
              <span class="position-absolute topbar-badge fs-10 translate-middle badge bg-danger rounded-pill">3<span class="visually-hidden">unread messages</span></span>
            </button>
            <div class="dropdown-menu py-0 dropdown-lg dropdown-menu-end" aria-labelledby="page-header-notifications-dropdown">
              <div class="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                <div class="row align-items-center">
                  <div class="col">
                    <h6 class="m-0 fs-16 fw-semibold">Notifications</h6>
                  </div>
                  <div class="col-auto">
                    <a href="javascript: void(0);" class="text-dark text-decoration-underline">
                      <small>Clear All</small>
                    </a>
                  </div>
                </div>
              </div>
              <div data-simplebar style="max-height: 280px">
                <a v-for="(item, idx) in notifications" :key="idx" href="javascript:void(0);" class="dropdown-item py-3 border-bottom text-wrap">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img v-if="item.user?.avatar" :src="item.user.avatar" class="img-fluid me-2 avatar-sm rounded-circle" alt="avatar-1" />

                      <div v-else-if="item.icon" class="avatar-sm me-2">
                        <span class="avatar-title bg-soft-warning text-warning fs-20 rounded-circle">
                          <Icon :icon="item.icon" />
                        </span>
                      </div>

                      <div v-else class="avatar-sm me-2">
                        <span class="avatar-title bg-soft-info text-info fs-20 rounded-circle">
                          {{ item.user?.name?.slice(0, 1) }}
                        </span>
                      </div>
                    </div>

                    <div class="flex-grow-1">
                      <p v-if="item.user?.name" class="mb-0 fw-semibold">
                        {{ item.user.name }}
                      </p>

                      <p v-if="item.title" class="mb-0 fw-semibold text-wrap">
                        {{ item.title }}
                      </p>

                      <p v-if="item.message" class="mb-0 text-wrap">
                        {{ item.message }}
                      </p>
                      <p v-if="item.content" class="mb-0 text-wrap">
                        {{ item.content }}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="text-center py-3">
                <a href="javascript:void(0);" class="btn btn-primary btn-sm">
                  View All Notification
                  <i class="bx bx-right-arrow-alt ms-1"></i
                ></a>
              </div>
            </div>
          </DropDown>

          <!-- Theme Setting -->
          <div class="topbar-item">
            <button type="button" class="topbar-button" v-b-toggle="'right-sidebar'">
              <Icon icon="iconamoon:settings-duotone" class="fs-24 align-middle" />
            </button>
          </div>

          <!-- Activity -->
          <div class="topbar-item d-none d-md-flex">
            <button type="button" class="topbar-button" v-b-toggle="'activity-offcanvas'">
              <Icon icon="iconamoon:history-duotone" class="fs-24 align-middle" />
            </button>
          </div>

          <!-- Profile -->
          <DropDown custom-class="topbar-item">
            <a type="button" class="topbar-button" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="d-flex align-items-center">
                <img class="rounded-circle" width="32" :src="avatar1" alt="" />
              </span>
            </a>

            <div class="dropdown-menu dropdown-menu-end">
              <h6 class="dropdown-header">Welcome Gaston!</h6>

              <router-link v-for="(item, idx) in profileMenuItems" :key="idx" :to="{ name: item.route?.name }" class="dropdown-item">
                <i class="bx text-muted fs-18 align-middle me-1" :class="item.icon"></i>
                <span class="align-middle">{{ item.label }}</span>
              </router-link>

              <div class="dropdown-divider my-1"></div>

              <router-link class="dropdown-item text-danger" :to="{ name: 'auth.sign-in' }">
                <i class="bx bx-log-out fs-18 align-middle me-1"></i>
                <span class="align-middle">Logout</span>
              </router-link>
            </div>
          </DropDown>
        </div>
      </div>
    </div>
  </header>

  <ActivityOffcanvas />
</template>

<script setup lang="ts">
import DropDown from '@/components/DropDown.vue'
import { useLayoutStore } from '@/stores/layout'
import { toggleDocumentAttribute } from '@/helpers/layout'
import { categories, notifications, profileMenuItems } from '@/layouts/components/data'
import { onMounted } from 'vue'
import { Icon } from '@iconify/vue'

import avatar1 from '@/assets/images/users/avatar-1.jpg'
import ActivityOffcanvas from '@/layouts/components/ActivityOffcanvas.vue'

const useLayout = useLayoutStore()

const toggleTheme = () => {
  if (useLayout.layout.theme === 'light') {
    return useLayout.setTheme('dark')
  }
  useLayout.setTheme('light')
}

const toggleLeftSideBar = () => {
  if (useLayout.layout.leftSideBarSize === 'default') {
    return useLayout.setLeftSideBarSize('condensed')
  }
  if (useLayout.layout.leftSideBarSize === 'condensed') {
    return useLayout.setLeftSideBarSize('default')
  }
  toggleDocumentAttribute('class', 'sidebar-enable')
  showBackdrop()
}

const showBackdrop = () => {
  let backdrop = document.createElement('div') as HTMLDivElement
  if (backdrop) {
    backdrop.classList.add('offcanvas-backdrop', 'fade', 'show')
    document.body.appendChild(backdrop)
    document.body.style.overflow = 'hidden'
    if (window.innerWidth > 1040) {
      document.body.style.paddingRight = '15px'
    }

    backdrop.addEventListener('click', function (e) {
      toggleDocumentAttribute('class', '')
      document.body.removeChild(backdrop)
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    })
  }
}

onMounted(() => {
  useLayout.init()
})
</script>
