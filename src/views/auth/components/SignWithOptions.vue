<template>
  <div class="text-center d-flex justify-content-center gap-1">
    <router-link v-for="(item, idx) in signWithOptions" :key="idx" :to="item.url" class="btn btn-light shadow-none">
      <i class="bx fs-20" :class="item.icon" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
type OptionType = {
  icon: string
  name: string
  url: string
}

const signWithOptions: OptionType[] = [
  {
    icon: 'bxl-google',
    name: 'Google',
    url: ''
  },
  {
    icon: 'bxl-facebook',
    name: 'Facebook',
    url: ''
  },
  {
    icon: 'bxl-github',
    name: 'Github',
    url: ''
  }
]
</script>
