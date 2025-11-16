<template>
  <AuthLayout>
    <b-col xl="12">
      <b-card no-body class="auth-card">
        <b-card-body class="p-0">
          <b-row class="align-items-center g-0">
            <b-col lg="6" class="d-none d-lg-inline-block border-end">
              <div class="auth-page-sidebar">
                <img :src="signIn" alt="auth" class="img-fluid" />
              </div>
            </b-col>
            <b-col lg="6">
              <div class="p-4">
                <div class="mx-auto mb-4 text-center auth-logo">
                  <LogoBox />
                </div>
                <h2 class="fw-bold text-center lh-base">We are currently performing maintenance</h2>
                <p class="text-muted text-center mt-1 mb-4">We're making the system more awesome. We'll be back shortly.</p>

                <div class="text-center">
                  <router-link :to="{ name: 'pages.contact-us' }" class="btn btn-success">Contact Us</router-link>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import LogoBox from '@/components/LogoBox.vue'
import signIn from '@/assets/images/sign-in.svg'
</script>
