<template>
  <b-form id="generalDetailForm" method="post" action="#">
    <b-row>
      <b-col lg="6">
        <div class="mb-3">
          <b-form-group label="Product Name" label-for="productName">
            <b-form-input type="text" id="productName" placeholder="Enter Product Name" />
          </b-form-group>
        </div>
      </b-col>
      <b-col lg="6">
        <div class="mb-3">
          <b-form-group label="Reference" label-for="referenceName">
            <b-form-input type="text" id="referenceName" placeholder="Enter Reference Name" />
          </b-form-group>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <div class="mb-3">
          <label class="form-label">Product Description</label>
          <QuillEditor theme="snow" :toolbar="toolbar" style="height: 195px" content="" content-type="html" />
        </div>
      </b-col>
      <b-col lg="6">
        <div class="mb-3">
          <b-form-group label="Product Summary" label-for="productSummary">
            <b-form-textarea type="text" id="productSummary" :rows="5" />
          </b-form-group>
        </div>
      </b-col>
      <b-col lg="6">
        <div class="mb-3">
          <b-form-group label="Categories" label-for="productSummary">
            <b-form-select>
              <b-form-select-option :value="null">Select</b-form-select-option>
              <b-form-select-option-group label="Shopping">
                <b-form-select-option value="shopping1">Shopping 1</b-form-select-option>
                <b-form-select-option value="shopping2">Shopping 2</b-form-select-option>
                <b-form-select-option value="shopping3">Shopping 3</b-form-select-option>
                <b-form-select-option value="shopping4">Shopping 4</b-form-select-option>
              </b-form-select-option-group>
              <b-form-select-option-group label="CRM">
                <b-form-select-option value="CRM1">CRM 1</b-form-select-option>
                <b-form-select-option value="CRM2">CRM 2</b-form-select-option>
              </b-form-select-option-group>
            </b-form-select>
          </b-form-group>
        </div>
        <div class="mb-3">
          <b-form-group label="Price" label-for="price">
            <b-form-input type="text" id="price" placeholder="Enter amount" />
          </b-form-group>
        </div>
      </b-col>
    </b-row>
    <div class="mb-3">
      <label class="form-label">Status</label><br />
      <b-form-radio-group v-model="inlineStackedSelected" :options="inlineStackedOptions" name="radio-inline" />
    </div>
    <div class="mb-3">
      <b-form-group label="Comment" label-for="comment">
        <b-form-textarea type="text" id="comment" :rows="3" />
      </b-form-group>
    </div>
  </b-form>
</template>
<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import { ref } from 'vue'

const toolbar = [[{ font: [] }, { size: [] }], ['bold', 'italic', 'underline', 'strike'], [{ color: [] }, { background: [] }], [{ script: 'super' }, { script: 'sub' }], [{ header: [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'], [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }], ['direction', { align: [] }], ['link', 'image', 'video'], ['clean']]

const inlineStackedOptions = [
  { text: 'Online', value: 'online' },
  { text: 'Offline', value: 'offline' },
  { text: 'Draft', value: 'draft' }
]

const inlineStackedSelected = ref('online')
</script>
