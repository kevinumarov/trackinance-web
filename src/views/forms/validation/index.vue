<template>
  <DefaultLayout>
    <PageBreadcrumb title="Validation" subtitle="Form" />

    <b-row>
      <b-col xl="9">
        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor" id="yup"> Yup<a class="anchor-link">#</a> </b-card-title>

            <div class="mt-3">
              <YupForm />
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor" id="vuelidate"> Vuelidate<a class="anchor-link">#</a> </b-card-title>

            <div class="mt-3">
              <VuelidateForm />
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor" id="vue-bootstrap">Vue Bootstrap<a class="anchor-link">#</a> </b-card-title>

            <div class="mt-3">
              <VBForm />
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor" id="server-side"> Supported elements<a class="anchor-link" href="#server-side">#</a> </b-card-title>

            <div class="mt-3">
              <form class="row g-3">
                <b-col md="4">
                  <label for="validationServer01" class="form-label">First name</label>
                  <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required />
                  <div class="valid-feedback">Looks good!</div>
                </b-col>
                <b-col md="4">
                  <label for="validationServer02" class="form-label">Last name</label>
                  <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required />
                  <div class="valid-feedback">Looks good!</div>
                </b-col>
                <b-col md="4">
                  <label for="validationServerUsername" class="form-label">Username</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend3">@</span>
                    <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                    <div id="validationServerUsernameFeedback" class="invalid-feedback">Please choose a username.</div>
                  </div>
                </b-col>
                <b-col md="6">
                  <label for="validationServer03" class="form-label">City</label>
                  <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                  <div id="validationServer03Feedback" class="invalid-feedback">Please provide a valid city.</div>
                </b-col>
                <b-col md="3">
                  <label for="validationServer04" class="form-label">State</label>
                  <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                  </select>
                  <div id="validationServer04Feedback" class="invalid-feedback">Please select a valid state.</div>
                </b-col>
                <b-col md="3">
                  <label for="validationServer05" class="form-label">Zip</label>
                  <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required />
                  <div id="validationServer05Feedback" class="invalid-feedback">Please provide a valid zip.</div>
                </b-col>
                <b-col cols="12">
                  <div class="form-check">
                    <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
                    <label class="form-check-label" for="invalidCheck3"> Agree to terms and conditions </label>
                    <div id="invalidCheck3Feedback" class="invalid-feedback">You must agree before submitting.</div>
                  </div>
                </b-col>
                <b-col cols="12">
                  <b-button variant="primary" type="submit"> Submit form </b-button>
                </b-col>
              </form>
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor" id="supported-elements"> Supported elements<a class="anchor-link" href="#supported-elements">#</a> </b-card-title>

            <div class="mt-3">
              <form class="was-validated">
                <div class="mb-3">
                  <label for="validationTextarea" class="form-label">Textarea</label>
                  <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                  <div class="invalid-feedback">Please enter a message in the textarea.</div>
                </div>

                <div class="form-check mb-3">
                  <input type="checkbox" class="form-check-input" id="validationFormCheck1" required />
                  <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
                  <div class="invalid-feedback">Example invalid feedback text</div>
                </div>

                <div class="form-check">
                  <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
                  <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
                </div>
                <div class="form-check mb-3">
                  <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
                  <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
                  <div class="invalid-feedback">More example invalid feedback text</div>
                </div>

                <div class="mb-3">
                  <select class="form-select" required aria-label="select example">
                    <option value="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <div class="invalid-feedback">Example invalid select feedback</div>
                </div>

                <div class="mb-3">
                  <input type="file" class="form-control" aria-label="file example" required />
                  <div class="invalid-feedback">Example invalid form file feedback</div>
                </div>

                <div class="mb-3">
                  <b-button variant="primary" type="submit"> Submit form </b-button>
                </div>
              </form>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col xl="3">
        <AnchorNavigation :elements="anchorNavigation" />
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'

import YupForm from '@/views/forms/validation/components/YupForm.vue'
import VuelidateForm from '@/views/forms/validation/components/VuelidateForm.vue'
import VBForm from '@/views/forms/validation/components/VBForm.vue'

const anchorNavigation = [
  {
    id: 'yup',
    title: 'Yup'
  },
  {
    id: 'vuelidate',
    title: 'Vuelidate'
  },
  {
    id: 'vue-bootstrap',
    title: 'Vue Bootstrap'
  },
  {
    id: 'supported-elements',
    title: 'Supported Elements'
  }
]
</script>
