<template>
  <DefaultLayout>
    <PageBreadcrumb title="Editors" subtitle="Form" />

    <b-row>
      <b-col xl="12">
        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="anchor" id="quill-snow-editor"> Snow Editor<a class="anchor-link" href="#quill-snow-editor">#</a> </b-card-title>

            <div class="mt-3">
              <QuillEditor theme="snow" :toolbar="toolbar1" style="height: 300px" :content="taskDetail" content-type="html" />
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="anchor" id="quill-bubble-editor"> Bubble Editor<a class="anchor-link" href="#quill-bubble-editor">#</a> </b-card-title>

            <div class="mt-3">
              <QuillEditor theme="bubble" style="height: 300px" :toolbar="toolbar2" :content="taskDetail" content-type="html" />
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { QuillEditor } from '@vueup/vue-quill'
import { ref } from 'vue'

const content = ref('')

const toolbar1 = [[{ font: [] }, { size: [] }], ['bold', 'italic', 'underline', 'strike'], [{ color: [] }, { background: [] }], [{ script: 'super' }, { script: 'sub' }], [{ header: [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'], [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }], ['direction', { align: [] }], ['link', 'image', 'video'], ['clean']]
const toolbar2 = [
  ['bold', 'italic', 'link'],
  [{ header: '1' }, { header: '2' }, 'blockquote']
]

const taskDetail = `<h3><span class="ql-size-large">Hello World!</span></h3>
      <h3>This is a simple editable area.</h3>
      - Select a text to reveal the toolbar.
      - Edit rich document on-the-fly, so elastic!
      <span ><b>End of simple area</b></span>`
</script>
