<template>
  <DefaultLayout>
    <PageBreadcrumb title="Inventory" subtitle="Ecommerce" />
    <b-row>
      <b-col xl="3">
        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-3"> Filter Products </b-card-title>
            <div class="search-bar mb-3">
              <span><i class="bx bx-search-alt"></i></span>
              <b-form-input type="email" name="search" id="search" placeholder="Search by name ......." />
            </div>
            <div class="mb-3">
              <b-form-group label="Product Id" label-for="productId">
                <b-form-input type="email" id="productId" placeholder="Filter by Product Id" />
              </b-form-group>
            </div>
            <div class="mb-3">
              <b-form-group label="Condition" label-for="condition">
                <b-form-select :model-value="1" id="condition">
                  <option value="1">All Conditions</option>
                  <option value="2">New</option>
                  <option value="3">Return</option>
                  <option value="4">Damaged</option>
                </b-form-select>
              </b-form-group>
            </div>
            <div class="mb-3">
              <b-form-group label="Category" label-for="category">
                <b-form-select :model-value="1" id="category">
                  <option value="1">All Categories</option>
                  <option value="2">Electronics & Accessories</option>
                  <option value="3">Home & Kitchen</option>
                  <option value="4">Cloth</option>
                </b-form-select>
              </b-form-group>
            </div>
            <div class="mb-3">
              <b-form-group label="Location" label-for="location">
                <b-form-select :model-value="1" id="location">
                  <option value="1">All Locations</option>
                  <option value="2">WareHouse 1</option>
                  <option value="3">WareHouse 2</option>
                  <option value="4">WareHouse 3</option>
                  <option value="5">WareHouse 4</option>
                </b-form-select>
              </b-form-group>
            </div>
            <b-row>
              <b-col cols="6">
                <a href="javascript:void(0);" class="btn btn-outline-primary w-100">Clear</a>
              </b-col>
              <b-col cols="6">
                <a href="javascript:void(0);" class="btn btn-primary w-100">Apply Filters</a>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col xl="9">
        <b-card no-body>
          <b-card-body>
            <b-row>
              <b-col cols="12">
                <div class="d-flex flex-wrap align-items-center gap-2">
                  <a href="javascript:void(0);" class="btn btn-secondary"><i class="bx bx-export me-1"></i>Export</a>
                  <a href="javascript:void(0);" class="btn btn-secondary"><i class="bx bx-import me-1"></i>Import</a>
                  <router-link :to="{ name: 'ecommerce.products.create' }" class="btn btn-primary d-inline-flex align-items-center ms-md-auto">
                    <i class="bx bx-plus me-1"></i>
                    Add Product
                  </router-link>
                </div>
              </b-col>
            </b-row>
            <b-table-simple responsive class="text-nowrap table-centered mt-3 mb-0">
              <b-thead>
                <b-tr>
                  <b-th v-for="(thead, idx) in inventoryList.header" :key="idx">{{ thead }}</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(inventory, idx) in inventoryList.body" :key="idx">
                  <b-td>#{{ inventory.id }}</b-td>
                  <b-td>
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 me-3">
                        <router-link :to="`/ecommerce/products/${inventory.id}`">
                          <img :src="inventory.product.image" alt="product-1(1)" class="img-fluid avatar-sm" />
                        </router-link>
                      </div>
                      <div class="flex-grow-1">
                        <h5 class="mt-0 mb-1">
                          {{ inventory.product.name }}
                        </h5>
                        <span class="fs-13">Added: {{ inventory.product.addedDate }}</span>
                      </div>
                    </div>
                  </b-td>
                  <b-td>
                    <b-badge :variant="null" :class="inventory.condition === 'new' ? 'badge-soft-success' : inventory.condition === 'return' ? 'badge-soft-warning' : 'badge-soft-danger'">
                      {{ kebabToTitleCase(inventory.condition) }}
                    </b-badge>
                  </b-td>
                  <b-td>{{ inventory.location }}</b-td>
                  <b-td>{{ inventory.available }}</b-td>
                  <b-td>{{ inventory.reserved }}</b-td>
                  <b-td>{{ inventory.onHand }}</b-td>
                  <b-td>{{ inventory.modified }}</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { kebabToTitleCase } from '@/helpers/change-casing'
import { inventoryList } from '@/views/ecommerce/inventory/components/data'
</script>
