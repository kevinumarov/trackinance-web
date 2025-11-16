<template>
  <AuthLayout>
    <b-col xl="5">
      <b-card no-body class="auth-card">
        <b-card-body class="px-3 py-5">
          <div class="mx-auto mb-4 text-center auth-logo">
            <LogoBox />
          </div>

          <h2 class="fw-bold text-center fs-18">Hi ! Gaston</h2>
          <p class="text-muted text-center mt-1 mb-4">Enter your password to access the admin.</p>

          <div class="px-4">
            <b-form class="authentication-form">
              <b-form-group class="mb-3">
                <b-form-input type="password" id="example-password" placeholder="Enter your password" />
              </b-form-group>

              <div class="mb-1 text-center d-grid">
                <b-button variant="primary" type="submit"> Sign In </b-button>
              </div>
            </b-form>
          </div>
        </b-card-body>
      </b-card>

      <p class="text-white mb-0 text-center">
        Not you? return
        <router-link :to="{ name: 'auth.sign-in-2' }" class="text-white fw-bold ms-1">Sign In</router-link>
      </p>
    </b-col>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import LogoBox from '@/components/LogoBox.vue'
</script>
