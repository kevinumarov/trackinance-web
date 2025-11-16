<template>
  <DefaultLayout>
    <PageBreadcrumb title="Product Details" subtitle="Ecommerce" />
    <b-row>
      <b-col>
        <b-card no-body>
          <b-card-body>
            <b-row>
              <b-col lg="4">
                <div class="tab-content">
                  <div class="tab-pane" id="product-1-item" :class="productTab === 'product-1' && 'show active'">
                    <img :src="product12" alt="product-1(2)" class="img-fluid mx-auto d-block rounded" />
                  </div>
                  <div class="tab-pane" id="product-2-item" :class="productTab === 'product-2' && 'show active'">
                    <img :src="product11" alt="product-1(1)" class="img-fluid mx-auto d-block rounded" />
                  </div>
                  <div class="tab-pane" id="product-3-item" :class="productTab === 'product-3' && 'show active'">
                    <img :src="product13" alt="product-1(3)" class="img-fluid mx-auto d-block rounded" />
                  </div>
                  <div class="tab-pane" id="product-4-item" :class="productTab === 'product-4' && 'show active'">
                    <img :src="product14" alt="product-1(4)" class="img-fluid mx-auto d-block rounded" />
                  </div>
                </div>
                <ul class="nav nav-pills nav-justified">
                  <li class="nav-item">
                    <a href="#" class="nav-link product-thumb" :class="productTab === 'product-1' && 'active'" @click="productTab = 'product-1'">
                      <img :src="product12" alt="product-1(2)" class="img-fluid mx-auto rounded" />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link product-thumb" :class="productTab === 'product-2' && 'active'" @click="productTab = 'product-2'">
                      <img :src="product11" alt="product-1(1)" class="img-fluid mx-auto rounded" />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link product-thumb" :class="productTab === 'product-3' && 'active'" @click="productTab = 'product-3'">
                      <img :src="product13" alt="product-1(3)" class="img-fluid mx-auto rounded" />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link product-thumb" :class="productTab === 'product-4' && 'active'" @click="productTab = 'product-4'">
                      <img :src="product14" alt="product-1(4)" class="img-fluid mx-auto rounded" />
                    </a>
                  </li>
                </ul>
              </b-col>
              <b-col lg="8">
                <div class="ps-xl-3 mt-3 mt-xl-0">
                  <a href="javascript:void(0);" class="text-primary mb-2 d-inline-block">Apple MacBook Air M1</a>
                  <h4 class="mb-3">(8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A (13.3 inch, Space Grey, 1.29 kg)</h4>
                  <p class="text-muted float-start me-3 hstack gap-1">
                    <span class="bx bxs-star text-warning"></span>
                    <span class="bx bxs-star text-warning"></span>
                    <span class="bx bxs-star text-warning"></span>
                    <span class="bx bxs-star text-warning"></span>
                    <span class="bx bxs-star text-warning"></span>
                  </p>
                  <p class="mb-3">
                    <a href="javascript:void(0);" class="text-muted">( 36 Customer Reviews )</a>
                  </p>
                  <h6 class="text-danger text-uppercase">20 % Off</h6>
                  <h4 class="mb-3">
                    Price :
                    <span class="text-muted me-2"
                      ><del>{{ currency }}999 USD</del></span
                    >
                    <b class="ms-1">{{ currency }}899 USD</b>
                  </h4>
                  <h4>
                    <b-badge :variant="null" class="badge-soft-success mb-3">In stock</b-badge>
                  </h4>

                  <b-form class="d-flex flex-wrap align-items-center mb-2">
                    <b-form-group class="my-1 me-2" label-cols="4" label-class="px-0 mx-0" label="Color:" for="color">
                      <div class="me-3">
                        <b-form-select :model-value="1" size="sm" class="my-1" id="color">
                          <option value="1">Black</option>
                          <option value="2">Blue</option>
                          <option value="3">Midnight</option>
                        </b-form-select>
                      </div>
                    </b-form-group>

                    <b-form-group class="my-1 me-2" label-cols="4" label-class="px-0 mx-0" label="Size:" for="sizeinput">
                      <div class="me-sm-3">
                        <b-form-select :model-value="1" size="sm" class="my-1" id="sizeinput">
                          <option value="1">256 GB</option>
                          <option value="2">512 GB</option>
                        </b-form-select>
                      </div>
                    </b-form-group>
                  </b-form>

                  <div class="mb-3 pb-3 border-bottom">
                    <h5>
                      Processor Brand :
                      <span class="text-muted me-2"></span>
                      <b>Apple</b>
                    </h5>
                    <h5>
                      Processor Name :
                      <span class="text-muted me-2"></span>
                      <b>M1</b>
                    </h5>
                    <h5>
                      SSD :
                      <span class="text-muted me-2"></span>
                      <b>Yes</b>
                    </h5>
                    <h5>
                      SSD Capacity :
                      <span class="text-muted me-2"></span>
                      <b>256 GB</b>
                    </h5>
                    <h5>
                      RAM :
                      <span class="text-muted me-2"></span>
                      <b>8 GB</b>
                    </h5>
                  </div>
                  <div class="mb-3">
                    <h5>About this item:</h5>
                    <p class="text-muted mb-1"><i class="bx bx-check-circle text-primary me-2"></i>Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology)</p>
                    <p class="text-muted mb-1"><i class="bx bx-check-circle text-primary me-2"></i>Built-in Speakers</p>
                    <p class="text-muted mb-1"><i class="bx bx-check-circle text-primary me-2"></i>Three-mic Array with Directional Beamforming</p>
                    <p class="text-muted mb-1"><i class="bx bx-check-circle text-primary me-2"></i>Stereo Speakers, Wide Stereo Sound, Support for Dolby Atmos Playback</p>
                    <p class="text-muted mb-1"><i class="bx bx-check-circle text-primary me-2"></i>49.9 WHr Li-polymer Battery</p>
                    <p class="text-muted mb-1"><i class="bx bx-check-circle text-primary me-2"></i>Backlit Magic Keyboard</p>
                  </div>

                  <div>
                    <b-button type="button" variant="danger" class="me-2">
                      <i class="bx bx-heart fs-18"></i>
                    </b-button>
                    <b-button type="button" variant="primary" class="ms-1"> <i class="bx bx-cart fs-18 me-2"></i>Add to cart </b-button>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { currency } from '@/helpers/constants'

import product12 from '@/assets/images/products/product-1(2).png'
import product11 from '@/assets/images/products/product-1(1).png'
import product13 from '@/assets/images/products/product-1(3).png'
import product14 from '@/assets/images/products/product-1(4).png'

import { useRoute } from 'vue-router'

const productTab = ref('product-1')

const route = useRoute()
</script>
