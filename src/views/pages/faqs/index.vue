<template>
  <DefaultLayout>
    <PageBreadcrumb title="FAQs" subtitle="Pages" />
    <b-row>
      <b-col>
        <b-card no-body>
          <b-card-body class="p-4">
            <b-row class="g-xl-4">
              <b-col xl="6">
                <h4 class="mb-3 fw-semibold fs-16">General</h4>
                <b-accordion free>
                  <template v-for="(item, idx) in faqData.General" :key="idx">
                    <b-accordion-item :title="item.question" button-class="fw-medium" :visible="!idx">
                      {{ item.answer }}
                    </b-accordion-item>
                  </template>
                </b-accordion>

                <h4 class="mb-3 mt-4 fw-semibold fs-16">Refunds</h4>
                <b-accordion free>
                  <template v-for="(item, idx) in faqData.Refunds" :key="idx">
                    <b-accordion-item :title="item.question" button-class="fw-medium" :visible="!idx">
                      {{ item.answer }}
                    </b-accordion-item>
                  </template>
                </b-accordion>
              </b-col>

              <b-col xl="6">
                <h4 class="mb-3 fw-semibold fs-16">Payments</h4>
                <b-accordion free>
                  <template v-for="(item, idx) in faqData.Payments" :key="idx">
                    <b-accordion-item :title="item.question" button-class="fw-medium" :visible="!idx">
                      {{ item.answer }}
                    </b-accordion-item>
                  </template>
                </b-accordion>

                <h4 class="mb-3 mt-4 fw-semibold fs-16">Support</h4>
                <b-accordion free>
                  <template v-for="(item, idx) in faqData.Support" :key="idx">
                    <b-accordion-item :title="item.question" button-class="fw-medium" :visible="!idx">
                      {{ item.answer }}
                    </b-accordion-item>
                  </template>
                </b-accordion>
              </b-col>
            </b-row>

            <b-row class="my-5">
              <b-col cols="12" class="text-center">
                <h4>Can't find a questions?</h4>
                <b-button variant="success" class="mt-2">
                  <i class="bx bx-envelope me-1"></i>
                  Email us your question
                </b-button>
                <b-button variant="info" class="mt-2 ms-1">
                  <i class="bx bxl-twitter me-1"></i>
                  Send us a tweet
                </b-button>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { faqData } from '@/views/pages/faqs/data'
</script>
