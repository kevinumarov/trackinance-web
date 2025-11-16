<template>
  <DefaultLayout>
    <PageBreadcrumb title="Google Maps" subtitle="Maps" />

    <b-row>
      <b-col xl="9">
        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="anchor mb-3" id="basic"> Basic Example<a class="anchor-link" href="#basic">#</a> </b-card-title>

            <div class="mt-3">
              <GoogleMap :api-key="api" :center="center" :zoom="5" class="gmaps"></GoogleMap>
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="anchor mb-3" id="google_map"> Markers Google Map<a class="anchor-link" href="#google_map">#</a> </b-card-title>

            <div class="mt-3">
              <GoogleMap :api-key="api" :center="center" :zoom="3" class="gmaps">
                <Marker v-for="(m, index) in markers" :key="index" :options="m.markerOptions" :clickable="true" :draggable="true"></Marker>
              </GoogleMap>
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="anchor mb-3" id="polygon_editing"> Polygon Editing<a class="anchor-link">#</a> </b-card-title>

            <div class="mt-3">
              <GoogleMap :api-key="api" :center="{ lat: 24.886, lng: -70.268 }" :zoom="4" class="gmaps">
                <Polygon :options="polygonOption" :editable="true"></Polygon>
              </GoogleMap>
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="anchor mb-3" id="info_window"> Info Window<a class="anchor-link">#</a> </b-card-title>

            <div class="mt-3">
              <GoogleMap :api-key="api" :center="center" :zoom="10" class="gmaps">
                <InfoWindow :options="{ position: center, content: 'Hello viewer!' }" />
              </GoogleMap>
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="anchor mb-3" id="heatmap_layer"> Heatmap Layer<a class="anchor-link">#</a> </b-card-title>

            <div class="mt-3">
              <GoogleMap :api-key="api" :libraries="['visualization']" style="height: 300px" :center="{ lat: 37.774546, lng: -122.433523 }" :zoom="13">
                <HeatmapLayer :options="heatmapData" />
              </GoogleMap>
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
import { ref } from 'vue'

import 'https://maps.googleapis.com/maps/api/js'
import { GoogleMap, Marker, Polygon, HeatmapLayer, InfoWindow } from 'vue3-google-map'

const api = ref('')
const center = ref({ lat: -12.043333, lng: -77.028333 })
const markers = ref([{ markerOptions: { position: { lat: -12.04, lng: -77.0 }, label: 'Hi', title: 'Hello from marker' } }])

const polygonOption = {
  paths: [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 }
  ],
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35
}
const heatmapData = {
  data: [
    { location: { lat: 37.782, lng: -122.447 }, weight: 0.5 },
    { lat: 37.782, lng: -122.445 },
    { location: { lat: 37.782, lng: -122.443 }, weight: 2 },
    { location: { lat: 37.782, lng: -122.441 }, weight: 3 },
    { location: { lat: 37.782, lng: -122.439 }, weight: 2 },
    { lat: 37.782, lng: -122.437 },
    { location: { lat: 37.782, lng: -122.435 }, weight: 0.5 },

    { location: { lat: 37.785, lng: -122.447 }, weight: 3 },
    { location: { lat: 37.785, lng: -122.445 }, weight: 2 },
    { lat: 37.785, lng: -122.443 },
    { location: { lat: 37.785, lng: -122.441 }, weight: 0.5 },
    { lat: 37.785, lng: -122.439 },
    { location: { lat: 37.785, lng: -122.437 }, weight: 2 },
    { location: { lat: 37.785, lng: -122.435 }, weight: 3 }
  ]
}

const anchorNavigation = [
  {
    id: 'basic',
    title: 'Basic'
  },
  {
    id: 'google_map',
    title: 'Markers Google Map'
  },
  {
    id: 'polygon_editing',
    title: 'Polygon Editing'
  },
  {
    id: 'info_window',
    title: 'Info Window'
  },
  {
    id: 'heatmap_layer',
    title: 'Heatmap Layer'
  }
]
</script>
