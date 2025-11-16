<template>
  <AuthLayout>
    <b-col xl="5">
      <b-card no-body class="auth-card">
        <b-card-body class="px-3 py-5">
          <div class="mx-auto mb-4 text-center auth-logo">
            <LogoBox />
          </div>

          <h2 class="fw-bold text-center fs-18">Reset Password</h2>
          <p class="text-muted text-center mt-1 mb-4">Enter your email address and we'll send you an email with instructions to reset your password.</p>

          <div class="px-4">
            <b-form class="authentication-form">
              <b-form-group label="Email" class="mb-3">
                <b-form-input type="email" id="example-email" placeholder="Enter your email" />
              </b-form-group>

              <div class="mb-1 text-center d-grid">
                <b-button variant="primary" type="submit"> Reset Password </b-button>
              </div>
            </b-form>
          </div>
        </b-card-body>
      </b-card>

      <p class="text-white mb-0 text-center">
        Back to
        <router-link :to="{ name: 'auth.sign-in-2' }" class="text-white fw-bold ms-1">Sign In</router-link>
      </p>
    </b-col>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import LogoBox from '@/components/LogoBox.vue'
</script>
