<template>
  <DefaultLayout>
    <PageBreadcrumb title="Clipboard" subtitle="Form" />

    <b-row>
      <b-col xl="9">
        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor" id="copy-from-element">
              Copy text from another element
              <a class="anchor-link" href="#copy-from-element">#</a>
            </b-card-title>

            <b-row>
              <b-col lg="6">
                <div class="mt-3">
                  <div class="input-group">
                    <b-form-input id="clipboard_example" type="text" placeholder="name@example.com" v-model="inputEle" />
                    <b-button variant="primary" class="btn-copy-clipboard" @click="(e) => doCopy(inputEle, e)"> Copy </b-button>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor" id="copy-from-element">
              Copy text from textarea
              <a class="anchor-link" href="#copy-from-element">#</a>
            </b-card-title>

            <b-row>
              <b-col lg="6">
                <div class="d-flex gap-2 align-items-start mt-3">
                  <b-form-textarea v-model="textareaEle" cols="62" rows="6" />
                  <b-button variant="primary" @click="(e) => doCopy(textareaEle, e)"> Copy </b-button>
                </div>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor" id="copy-from-attribute">
              Copy text from attribute
              <a class="anchor-link" href="#copy-from-attribute">#</a>
            </b-card-title>

            <b-row>
              <b-col lg="6">
                <div class="mt-3">
                  <b-button variant="primary" @click="(e) => doCopy(`Just because you can doesn't mean you should — clipboard.js`, e)"> Copy to clipboard </b-button>
                </div>
              </b-col>
            </b-row>
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
import { copyText } from 'vue3-clipboard'
import { ref } from 'vue'

const inputEle = ref('name@example.com')
const textareaEle = ref('Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.')

const doCopy = (text: string, e: any) => {
  copyText(text, undefined, (error: string) => {
    if (error) {
      console.log(error)
      return
    } else {
      const text = e.srcElement.innerText
      e.srcElement.innerText = 'Copied!'
      setTimeout(() => {
        e.srcElement.innerText = text
      }, 3000)
    }
  })
}

const anchorNavigation = [
  {
    id: 'copy-from-element',
    title: 'Copy text from another element'
  },
  {
    id: 'copy-from-element',
    title: 'Copy text from textarea'
  },
  {
    id: 'copy-from-attribute',
    title: 'Copy text from attribute'
  }
]
</script>
