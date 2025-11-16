<template>
  <div>
    <b-offcanvas placement="end" class="border-0" id="right-sidebar" header-class="p-0" body-class="p-0">
      <template v-slot:header>
        <div class="d-flex align-items-center bg-primary p-3 w-100">
          <h5 class="text-white m-0">Theme Settings</h5>
          <button type="button" class="btn-close btn-close-white ms-auto" v-b-toggle="'right-sidebar'"></button>
        </div>
      </template>

      <div class="p-0">
        <simplebar data-simplebar class="h-100">
          <div class="p-3 settings-bar">
            <div>
              <h5 class="mb-3 font-16 fw-semibold">Color Scheme</h5>

              <BFormRadioGroup stacked v-model="layout.theme" name="theme" @change="setTheme(layout.theme)">
                <BFormRadio value="light">Light</BFormRadio>
                <BFormRadio value="dark">Dark</BFormRadio>
              </BFormRadioGroup>
            </div>

            <div v-if="layout.theme === 'light'">
              <h5 class="my-3 font-16 fw-semibold">Topbar Color</h5>

              <BFormRadioGroup stacked v-model="layout.topBarColor" name="topbar-color" @change="setTopBarColor(layout.topBarColor)">
                <BFormRadio value="light">Light</BFormRadio>
                <BFormRadio value="dark">Dark</BFormRadio>
              </BFormRadioGroup>
            </div>

            <div v-if="layout.theme === 'light'">
              <h5 class="my-3 font-16 fw-semibold">Menu Color</h5>

              <BFormRadioGroup stacked v-model="layout.leftSideBarColor" name="menu-color" @change="setLeftSideBarColor(layout.leftSideBarColor)">
                <BFormRadio value="light">Light</BFormRadio>
                <BFormRadio value="dark">Dark</BFormRadio>
              </BFormRadioGroup>
            </div>

            <div>
              <h5 class="my-3 font-16 fw-semibold">Sidebar Size</h5>

              <BFormRadioGroup stacked v-model="layout.leftSideBarSize" name="menu-size" @change="setLeftSideBarSize(layout.leftSideBarSize)">
                <BFormRadio value="default">Default</BFormRadio>
                <BFormRadio value="condensed">Condensed</BFormRadio>
                <BFormRadio value="hidden">Hidden</BFormRadio>
                <BFormRadio value="sm-hover-active">Small Hover Active</BFormRadio>
                <BFormRadio value="sm-hover">Small Hover</BFormRadio>
              </BFormRadioGroup>
            </div>
          </div>
        </simplebar>
      </div>

      <template v-slot:footer>
        <div class="border-top p-3 text-center">
          <b-row>
            <b-col>
              <b-button variant="danger" class="w-100" @click="reset"> Reset </b-button>
            </b-col>
          </b-row>
        </div>
      </template>
    </b-offcanvas>
  </div>
</template>

<script setup lang="ts">
import simplebar from 'simplebar-vue'

import { useLayoutStore } from '@/stores/layout'

const useLayout = useLayoutStore()

const { layout, setTheme, setTopBarColor, setLeftSideBarColor, setLeftSideBarSize, reset } = useLayout
</script>
