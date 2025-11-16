<template>
  <AuthLayout>
    <b-col xl="5">
      <b-card no-body class="auth-card">
        <b-card-body class="px-3 py-5">
          <div class="mx-auto mb-4 text-center auth-logo">
            <LogoBox />
          </div>

          <h2 class="fw-bold text-center fs-18">Sign In</h2>
          <p class="text-muted text-center mt-1 mb-4">Enter your email address and password to access admin panel.</p>

          <div class="px-4">
            <b-form class="authentication-form">
              <b-form-group label="Email" class="mb-3">
                <b-form-input type="email" id="example-email" placeholder="Enter your email" />
              </b-form-group>

              <b-form-group label="Password" class="mb-3">
                <b-form-input type="password" id="example-password" placeholder="Enter your password" />
              </b-form-group>

              <div class="mb-3">
                <b-form-checkbox>Remember me</b-form-checkbox>
              </div>

              <div class="mb-3 d-flex justify-content-center">
                <router-link :to="{ name: 'auth.reset-password-2' }" class="text-muted text-unline-dashed"> Reset password </router-link>
              </div>

              <div class="mb-1 text-center d-grid">
                <b-button variant="primary" type="submit"> Sign In </b-button>
              </div>
            </b-form>

            <p class="mt-3 fw-semibold no-span">OR sign with</p>

            <SignWithOptions />
          </div>
        </b-card-body>
      </b-card>

      <p class="text-white mb-0 text-center">
        Don't have an account?
        <router-link :to="{ name: 'auth.sign-up-2' }" class="text-white fw-bold ms-1">Sign Up</router-link>
      </p>
    </b-col>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import LogoBox from '@/components/LogoBox.vue'
import SignWithOptions from '@/views/auth/components/SignWithOptions.vue'
</script>
