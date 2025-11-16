<template>
  <b-row>
    <b-col cols="12">
      <div class="page-title-box">
        <h4 class="mb-0 fw-semibold">{{ title }}</h4>
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <router-link to="">{{ subtitle }}</router-link>
          </li>
          <li class="breadcrumb-item active">{{ title }}</li>
        </ol>
      </div>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
type PageBreadcrumbPropsType = {
  title: string
  subtitle: string
}

const props = defineProps<PageBreadcrumbPropsType>()
</script>
