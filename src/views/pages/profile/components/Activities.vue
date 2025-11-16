<template>
  <b-row>
    <b-col cols="12">
      <b-card no-body>
        <b-card-header class="d-flex align-items-center">
          <b-card-title tag="h5"> Activities </b-card-title>
          <div class="ms-auto">
            <a href="javascript:void(0);" class="text-primary"
              >Export
              <i class="bx bx-export ms-1"></i>
            </a>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="d-flex align-items-start">
            <p class="mb-0 mt-2 pe-3 me-2">12:15</p>
            <div class="position-relative ps-4">
              <span class="position-absolute start-0 top-0 border border-dashed h-100"></span>
              <div class="mb-4">
                <span class="position-absolute start-0 avatar-sm translate-middle-x bg-danger d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-14">UI</span>
                <div class="d-flex gap-2">
                  <div class="ms-2">
                    <h5 class="mb-0 text-dark fw-semibold fs-15 lh-base">Completed UX design project for our client</h5>
                    <b-badge :variant="null" class="badge-soft-danger mt-1">Important</b-badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-start">
            <p class="mb-0 mt-2 pe-3 me-2">11:00</p>
            <div class="position-relative ps-4">
              <span class="position-absolute start-0 top-0 border border-dashed h-100"></span>
              <div class="mb-4">
                <span class="position-absolute start-0 translate-middle-x bg-success bg-gradient d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                  <img :src="avatar2" alt="avatar-5" class="avatar-sm rounded-circle" />
                </span>
                <div class="d-flex gap-2">
                  <div class="ms-2">
                    <h5 class="mb-2 text-dark fw-semibold fs-15 lh-base">Yes! We are celebrating our first admin release.</h5>
                    <a href="#!">
                      <b-badge variant="light" class="bg-opacity-50 border text-dark fw-semibold">
                        <i class="bx bx-images text-primary me-2" />
                        IMG_201
                      </b-badge>
                      <b-badge variant="light" class="bg-opacity-50 border text-dark fw-semibold ms-2">
                        <i class="bx bx-images text-primary me-2" />
                        IMG_202
                      </b-badge>
                      <b-badge variant="light" class="bg-opacity-50 border text-dark fw-semibold ms-2">
                        <i class="bx bx-images text-primary me-2" />
                        IMG_203
                      </b-badge>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-start">
            <p class="mb-0 mt-2 pe-3 me-2">10:30</p>
            <div class="position-relative ps-4">
              <span class="position-absolute start-0 top-0 border border-dashed h-100"></span>
              <div class="mb-3">
                <span class="position-absolute start-0 avatar-sm translate-middle-x bg-success d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                  <Icon icon="iconamoon:check-circle-1-duotone"></Icon>
                </span>
                <div class="d-flex gap-2">
                  <div class="ms-2">
                    <h5 class="mb-1 text-dark fw-semibold fs-15 lh-base">We have archieved 25k sales in our themes</h5>
                    <div class="d-flex align-items-center gap-2">
                      <ul class="d-flex text-warning list-unstyled gap-1">
                        <li>
                          <Icon icon="iconamoon:star-fill"></Icon>
                        </li>
                        <li>
                          <Icon icon="iconamoon:star-fill"></Icon>
                        </li>
                        <li>
                          <Icon icon="iconamoon:star-fill"></Icon>
                        </li>
                        <li>
                          <Icon icon="iconamoon:star-fill"></Icon>
                        </li>
                        <li>
                          <Icon icon="iconamoon:star-fill"></Icon>
                        </li>
                      </ul>
                      <h5 class="text-muted fs-14">4.5/5 Rating</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-start">
            <p class="mb-0 mt-2 pe-3 me-2">09:00</p>
            <div class="position-relative ps-4">
              <span class="position-absolute start-0 top-0 border border-dashed h-50"></span>
              <div class="mb-2">
                <span class="position-absolute start-0 translate-middle-x bg-success bg-gradient d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                  <img :src="avatar7" alt="avatar-5" class="avatar-sm rounded-circle" />
                </span>
                <div class="d-flex gap-2">
                  <div class="ms-2">
                    <h5 class="mb-0 text-dark fw-semibold fs-15 lh-base">Join new team member Alex Smith</h5>
                    <b-badge variant="light" class="bg-opacity-50 text-dark py-1 px-2 mt-1 me-1">Designer</b-badge>
                    <b-badge variant="light" class="bg-opacity-50 text-dark py-1 px-2 mt-1 me-1">Developer</b-badge>
                    <b-badge variant="light" class="bg-opacity-50 text-dark py-1 px-2 mt-1">Ui/Ux</b-badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar7 from '@/assets/images/users/avatar-7.jpg'
import { Icon } from '@iconify/vue'
</script>
