<template>
  <DefaultLayout>
    <PageBreadcrumb title="Customers List" subtitle="Ecommerce" />
    <b-row>
      <b-col cols="12">
        <b-card no-body>
          <b-card-body>
            <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
              <div>
                <b-form class="d-flex flex-wrap align-items-center gap-2">
                  <label for="inputPassword2" class="visually-hidden">Search</label>
                  <div class="search-bar me-3">
                    <span><i class="bx bx-search-alt"></i></span>
                    <b-form-input type="search" id="search" placeholder="Search ..." />
                  </div>

                  <label for="status-select" class="me-2">Sort By</label>
                  <div class="me-sm-3">
                    <select class="form-select my-1 my-md-0" id="status-select">
                      <option>All</option>
                      <option value="1">Name</option>
                      <option value="2">Joining Date</option>
                      <option value="3">Phone</option>
                      <option value="4">Orders</option>
                    </select>
                  </div>
                </b-form>
              </div>
              <div>
                <div class="d-flex flex-wrap gap-2 justify-content-md-end align-items-center">
                  <ul class="nav nav-pills bg-transparent gap-1 p-0">
                    <li class="nav-item">
                      <a href="#" class="nav-link" :class="!customersTab && 'active'" @click="customersTab = !customersTab">
                        <i class="bx bx-grid-alt"></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link" :class="customersTab && 'active'" @click="customersTab = !customersTab">
                        <i class="bx bx-list-ul"></i>
                      </a>
                    </li>
                  </ul>

                  <b-dropdown :variant="null" toggle-class="btn-soft-success arrow-none" menu-class="dropdown-menu-end">
                    <template #button-content> <i class="bx bx-sort me-1" />Filter </template>
                    <b-dropdown-item>By Date</b-dropdown-item>
                    <b-dropdown-item>By Order ID</b-dropdown-item>
                    <b-dropdown-item>By Status</b-dropdown-item>
                  </b-dropdown>
                  <a href="#!" class="btn btn-danger"> <i class="bi bi-plus-circle me-1"></i>Add Customer </a>
                </div>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <div class="tab-content pt-0">
      <div class="tab-pane" id="team-list" :class="customersTab && 'show active'">
        <List />
      </div>

      <div class="tab-pane" id="team-grid" :class="!customersTab && 'show active'">
        <Grid />
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import List from '@/views/ecommerce/customers/components/List.vue'
import Grid from '@/views/ecommerce/customers/components/Grid.vue'

const customersTab = ref(true)
</script>
