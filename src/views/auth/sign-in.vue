<template>
  <AuthLayout>
    <b-col xl="12">
      <b-card no-body class="auth-card">
        <b-card-body class="p-0">
          <b-row class="align-items-center g-0">
            <b-col lg="6" class="d-none d-lg-inline-block border-end">
              <div class="auth-page-sidebar">
                <img :src="signInImg" alt="auth" class="img-fluid" />
              </div>
            </b-col>
            <b-col lg="6">
              <div class="p-4">
                <div class="mx-auto mb-4 text-center auth-logo">
                  <LogoBox />
                </div>

                <h2 class="fw-bold text-center fs-18">Sign In</h2>
                <p class="text-muted text-center mt-1 mb-4">Enter your email address and password to access admin panel.</p>

                <b-row class="justify-content-center">
                  <b-col md="8" cols="12">
                    <b-form @submit.prevent="handleSignIn" class="authentication-form">
                      <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>

                      <b-form-group label="Email" class="mb-3">
                        <b-form-input type="email" id="example-email" name="email" v-model="v.email.$model" placeholder="Enter your email" />
                        <div v-if="v.email.$error" class="text-danger">
                          <span v-for="(err, idx) in v.email.$errors" :key="idx">
                            {{ err.$message }}
                          </span>
                        </div>
                      </b-form-group>

                      <b-form-group label="Password" class="mb-3">
                        <b-form-input type="password" id="example-password" name="password" v-model="v.password.$model" placeholder="Enter your password" />
                        <div v-if="v.password.$errors" class="text-danger">
                          <span v-for="(err, idx) in v.password.$errors" :key="idx">
                            {{ err.$message }}
                          </span>
                        </div>
                      </b-form-group>

                      <div class="mb-3">
                        <b-form-checkbox>Remember me</b-form-checkbox>
                      </div>

                      <div class="mb-3 d-flex justify-content-center">
                        <router-link :to="{ name: 'auth.reset-password' }" class="text-muted text-unline-dashed"> Reset password </router-link>
                      </div>

                      <div class="mb-1 text-center d-grid">
                        <b-button variant="primary" type="submit"> Sign In </b-button>
                      </div>
                    </b-form>

                    <p class="mt-3 fw-semibold no-span">OR sign with</p>

                    <SignWithOptions />
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <p class="text-white mb-0 text-center">
        Don't have an account?
        <router-link :to="{ name: 'auth.sign-up' }" class="text-white fw-bold ms-1">Sign Up</router-link>
      </p>
    </b-col>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import LogoBox from '@/components/LogoBox.vue'
import signInImg from '@/assets/images/sign-in.svg'
import SignWithOptions from '@/views/auth/components/SignWithOptions.vue'

import { required, email } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

import { ref, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'

import HttpClient from '@/helpers/http-client'
import { useAuthStore } from '@/stores/auth'

import type { AxiosResponse } from 'axios'
import type { User } from '@/types/auth'
import router from '@/router'

const credentials = reactive({
  email: 'user@email.com',
  password: 'password'
})

const vuelidateRules = computed(() => ({
  email: { required, email },
  password: { required }
}))

const v = useVuelidate(vuelidateRules, credentials)

const useAuth = useAuthStore()
const route = useRoute()
const query = route.query

const error = ref('')
const checked = ref(false)

const handleSignIn = async () => {
  const result = await v.value.$validate()

  if (result) {
    try {
      const res: AxiosResponse<User> = await HttpClient.post('/sign-in', credentials)

      if (res.data.token) {
        useAuth.saveSession({
          ...res.data,
          token: res.data.token
        })
        redirectUser()
      }
    } catch (e: any) {
      if (e.response?.data?.error) {
        if (error.value.length == 0) error.value = e.response?.data?.error
      }
    }
  }
}

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`)
  }
  return router.push('/')
}
</script>
