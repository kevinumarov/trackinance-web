<template>
  <div class="text-center">
    <img :src="help.image" alt="help-1" class="img-fluid avatar-md mb-3" />
    <h4 class="fw-semibold">{{ help.title }}</h4>
    <p class="px-2 px-xl-5">
      {{ help.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { HelpType } from '@/views/calendar/help/components/types'

defineProps({
  help: {
    type: Object as PropType<HelpType>,
    required: true
  }
})
</script>
