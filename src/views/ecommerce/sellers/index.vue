<template>
  <DefaultLayout>
    <PageBreadcrumb title="Sellers List" subtitle="Ecommerce" />
    <b-card no-body>
      <b-card-body>
        <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <div>
            <b-form class="d-flex flex-wrap align-items-center gap-2">
              <label for="inputPassword2" class="visually-hidden">Search</label>
              <div class="search-bar me-3">
                <span><i class="bx bx-search-alt"></i></span>
                <b-form-input type="search" id="search" placeholder="Search..." />
              </div>

              <label for="status-select" class="me-2">Sort By</label>
              <div class="me-sm-3">
                <select class="form-select my-1 my-md-0" id="status-select">
                  <option>All</option>
                  <option value="1">Name</option>
                  <option value="2">Store Name</option>
                  <option value="3">Rating</option>
                  <option value="4">Revenue</option>
                </select>
              </div>
            </b-form>
          </div>
          <div>
            <div class="d-flex flex-wrap gap-2 justify-content-md-end align-items-center">
              <ul class="nav nav-pills bg-transparent gap-1 p-0">
                <li class="nav-item">
                  <a href="#" class="nav-link" :class="!sellerTab && 'active'" @click="sellerTab = !sellerTab">
                    <i class="bx bx-grid-alt" />
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link" :class="sellerTab && 'active'" @click="sellerTab = !sellerTab">
                    <i class="bx bx-list-ul" />
                  </a>
                </li>
              </ul>
              <a href="#!" class="btn btn-danger"> <i class="bx bx-plus me-1"></i>Add Seller </a>
            </div>
          </div>
        </div>
      </b-card-body>
    </b-card>

    <div class="tab-content pt-0">
      <div class="tab-pane" id="seller-list" :class="sellerTab && 'show active'">
        <List />
      </div>

      <div class="tab-pane" id="seller-grid" :class="!sellerTab && 'show active'">
        <Grid />
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import List from '@/views/ecommerce/sellers/components/List.vue'
import Grid from '@/views/ecommerce/sellers/components/Grid.vue'

const sellerTab = ref(true)
</script>
