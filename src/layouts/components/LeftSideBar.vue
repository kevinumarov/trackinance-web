<template>
  <div class="main-nav">
    <LogoBox logoClass="logo-box" />

    <button type="button" class="button-sm-hover">
      <Icon icon="iconamoon:arrow-left-4-square-duotone" class="button-sm-hover-icon fs-10 mt-1 me-1" style="height: 22px; width: 22px" @click="toggleMenuSize" />
    </button>

    <simplebar class="scrollbar">
      <AppMenu :menu-items="getMenuItems()" />
    </simplebar>
  </div>
</template>

<script setup lang="ts">
import LogoBox from '@/components/LogoBox.vue'
import AppMenu from '@/components/AppMenu/index.vue'
import simplebar from 'simplebar-vue'
import { getMenuItems } from '@/helpers/menu'
import { useLayoutStore } from '@/stores/layout'
import { onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const useLayout = useLayoutStore()

const { layout, setLeftSideBarSize } = useLayout

const toggleMenuSize = () => {
  if (layout.leftSideBarSize === 'sm-hover-active') return setLeftSideBarSize('sm-hover')
  return setLeftSideBarSize('sm-hover-active')
}

const resize = () => {
  if (window.innerWidth < 1140) {
    setLeftSideBarSize('hidden')
  } else {
    setLeftSideBarSize(layout.leftSideBarSize === 'hidden' ? 'sm-hover-active' : layout.leftSideBarSize)
  }
}

onMounted(() => {
  resize()
  window.addEventListener('resize', () => {
    resize()
  })
})
</script>
