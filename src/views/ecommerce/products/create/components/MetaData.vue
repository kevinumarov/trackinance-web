<template>
  <b-form id="metaDataForm" method="post" action="#">
    <h5 class="mb-3 mt-0">Fill all information below</h5>
    <b-row>
      <b-col md="6">
        <div class="mb-3">
          <b-form-group label="Meta Title" label-for="metaTitle">
            <b-form-input type="text" id="metaTitle" placeholder="Enter Meta Title" />
          </b-form-group>
        </div>
      </b-col>
      <b-col md="6">
        <div class="mb-3">
          <b-form-group label="Meta Keywords" label-for="metaKeywords">
            <b-form-input type="text" id="metaKeywords" placeholder="Enter Meta Keywords" />
          </b-form-group>
        </div>
      </b-col>
    </b-row>
    <div class="mb-3">
      <b-form-group label="Meta Description" label-for="metaDescription">
        <b-form-textarea type="text" id="metaDescription" :rows="3" />
      </b-form-group>
    </div>
  </b-form>
</template>
<script setup lang="ts"></script>
