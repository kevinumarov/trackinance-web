<template>
  <DefaultLayout>
    <PageBreadcrumb title="Checkbox & Radio" subtitle="Forms" />

    <b-row>
      <b-col xl="9">
        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor" id="checkbox-basic"> Checkbox<a class="anchor-link" href="#checkbox-basic">#</a> </b-card-title>

            <b-form-group class="mt-3">
              <b-form-checkbox>Check this custom checkbox</b-form-checkbox>
              <b-form-checkbox>Check this custom checkbox</b-form-checkbox>
            </b-form-group>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor mb-3" id="inline-checkbox"> Inline Checkbox<a class="anchor-link" href="#inline-checkbox">#</a> </b-card-title>

            <b-form-group class="mt-3">
              <b-form-checkbox inline>Check this custom checkbox</b-form-checkbox>
              <b-form-checkbox inline>Check this custom checkbox</b-form-checkbox>
            </b-form-group>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor mb-3" id="disabled-checkbox"> Disabled Checkbox<a class="anchor-link" href="#disabled-checkbox">#</a> </b-card-title>

            <b-form-group class="mt-3">
              <b-form-checkbox v-model="checked" inline disabled>Check this custom checkbox</b-form-checkbox>
              <b-form-checkbox inline disabled>Check this custom checkbox</b-form-checkbox>
            </b-form-group>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor mb-3" id="colors-checkbox"> Colors Checkbox<a class="anchor-link" href="#colors-checkbox">#</a> </b-card-title>

            <div class="mt-3">
              <div class="form-check mb-2">
                <input type="checkbox" class="form-check-input" id="customCheckcolor1" checked />
                <label class="form-check-label" for="customCheckcolor1">Default Checkbox</label>
              </div>
              <div class="form-check form-checkbox-success mb-2">
                <input type="checkbox" class="form-check-input" id="customCheckcolor2" checked />
                <label class="form-check-label" for="customCheckcolor2">Success Checkbox</label>
              </div>
              <div class="form-check form-checkbox-info mb-2">
                <input type="checkbox" class="form-check-input" id="customCheckcolor3" checked />
                <label class="form-check-label" for="customCheckcolor3">Info Checkbox</label>
              </div>
              <div class="form-check form-checkbox-secondary mb-2">
                <input type="checkbox" class="form-check-input" id="customCheckcolor6" checked />
                <label class="form-check-label" for="customCheckcolor6">Secondary Checkbox</label>
              </div>
              <div class="form-check form-checkbox-warning mb-2">
                <input type="checkbox" class="form-check-input" id="customCheckcolor4" checked />
                <label class="form-check-label" for="customCheckcolor4">Warning Checkbox</label>
              </div>
              <div class="form-check form-checkbox-danger mb-2">
                <input type="checkbox" class="form-check-input" id="customCheckcolor5" checked />
                <label class="form-check-label" for="customCheckcolor5">Danger Checkbox</label>
              </div>
              <div class="form-check form-checkbox-dark">
                <input type="checkbox" class="form-check-input" id="customCheckcolor7" checked />
                <label class="form-check-label" for="customCheckcolor7">Dark Checkbox</label>
              </div>
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor" id="radio-basic"> Radio<a class="anchor-link" href="#radio-basic">#</a> </b-card-title>

            <b-form-group class="mt-3">
              <b-form-radio name="radioDefault" value="1">Default radio</b-form-radio>
              <b-form-radio name="radioDefault" value="2">Default checked radio</b-form-radio>
            </b-form-group>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor mb-3" id="inline-radio"> Inline Radio<a class="anchor-link" href="#inline-radio">#</a> </b-card-title>

            <b-form-radio-group class="mt-3">
              <b-form-radio name="radio-inline" value="1">Check this custom checkbox</b-form-radio>
              <b-form-radio name="radio-inline" value="2">Check this custom checkbox</b-form-radio>
            </b-form-radio-group>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor mb-3" id="disabled-radio"> Disabled Radio<a class="anchor-link" href="#disabled-radio">#</a> </b-card-title>

            <b-form-radio-group class="mt-3">
              <b-form-radio name="radio-disable" value="1" disabled>Check this custom checkbox </b-form-radio>
              <b-form-radio name="radio-disable" value="2" disabled>Check this custom checkbox</b-form-radio>
            </b-form-radio-group>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor mb-3" id="colors-radio"> Colors Radio<a class="anchor-link" href="#colors-radio">#</a> </b-card-title>

            <div class="mt-3">
              <div class="form-check mb-2">
                <input type="radio" id="customRadiocolor1" name="customRadiocolor1" class="form-check-input" checked />
                <label class="form-check-label" for="customRadiocolor1">Default Radio</label>
              </div>
              <div class="form-check form-radio-success mb-2">
                <input type="radio" id="customRadiocolor2" name="customRadiocolor2" class="form-check-input" checked />
                <label class="form-check-label" for="customRadiocolor2">Success Radio</label>
              </div>
              <div class="form-check form-radio-info mb-2">
                <input type="radio" id="customRadiocolor3" name="customRadiocolor3" class="form-check-input" checked />
                <label class="form-check-label" for="customRadiocolor3">Info Radio</label>
              </div>
              <div class="form-check form-radio-secondary mb-2">
                <input type="radio" id="customRadiocolor6" name="customRadiocolor6" class="form-check-input" checked />
                <label class="form-check-label" for="customRadiocolor6">Secondary Radio</label>
              </div>
              <div class="form-check form-radio-warning mb-2">
                <input type="radio" id="customRadiocolor4" name="customRadiocolor4" class="form-check-input" checked />
                <label class="form-check-label" for="customRadiocolor4">Warning Radio</label>
              </div>
              <div class="form-check form-radio-danger mb-2">
                <input type="radio" id="customRadiocolor5" name="customRadiocolor5" class="form-check-input" checked />
                <label class="form-check-label" for="customRadiocolor5">Danger Radio</label>
              </div>
              <div class="form-check form-radio-dark">
                <input type="radio" id="customRadiocolor7" name="customRadiocolor7" class="form-check-input" checked />
                <label class="form-check-label" for="customRadiocolor7">Dark Radio</label>
              </div>
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor" id="switch-basic"> Switch<a class="anchor-link" href="#switch-basic">#</a> </b-card-title>

            <b-form-group class="mt-3">
              <b-form-checkbox switch>Default switch checkbox input</b-form-checkbox>
              <b-form-checkbox switch v-model="checked">Checked switch checkbox input</b-form-checkbox>
              <b-form-checkbox switch disabled>Disabled switch checkbox input</b-form-checkbox>
              <b-form-checkbox switch v-model="checked" disabled>Disabled checked switch checkbox input </b-form-checkbox>
            </b-form-group>
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
import { ref } from 'vue'

const checked = ref(true)

const anchorNavigation = [
  {
    id: 'checkbox-basic',
    title: 'Checkbox'
  },
  {
    id: 'inline-checkbox',
    title: 'Inline Checkbox'
  },
  {
    id: 'disabled-checkbox',
    title: 'Disabled Checkbox'
  },
  {
    id: 'colors-checkbox',
    title: 'Colors Checkbox'
  },
  {
    id: 'radio-basic',
    title: 'Radio'
  },
  {
    id: 'inline-radio',
    title: 'Inline Radio'
  },
  {
    id: 'disabled-radio',
    title: 'Disabled Radio'
  },
  {
    id: 'colors-radio',
    title: 'Colors Radio'
  },
  {
    id: 'switch-basic',
    title: 'Switch'
  }
]
</script>
