<template>
  <DefaultLayout>
    <PageBreadcrumb title="Vector Maps" subtitle="Maps" />

    <b-row>
      <b-col xl="9">
        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor" id="world_vector_map"> World Vector Map<a class="anchor-link" href="#world_vector_map">#</a> </b-card-title>

            <div class="mt-3">
              <JsVectorMap id="world-map-markers" :height="360" :options="worldMapOptions" />
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor" id="canada_vector_map"> Canada Vector Map<a class="anchor-link" href="#canada_vector_map">#</a> </b-card-title>

            <div class="mt-3">
              <JsVectorMap id="canada-vector-map" :height="360" :options="canadaMap" />
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor" id="russia_vector_map"> Russia Vector Map<a class="anchor-link" href="#russia_vector_map">#</a> </b-card-title>

            <div class="mt-3">
              <JsVectorMap id="russia-vector-map" :height="360" :options="russiaMap" />
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor" id="iraq_vector_map"> Iraq Vector Map<a class="anchor-link" href="#iraq_vector_map">#</a> </b-card-title>

            <div class="mt-3">
              <JsVectorMap id="iraq-vector-map" :height="360" :options="iraqMap" />
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-1 anchor" id="spain_vector_map"> Spain Vector Map<a class="anchor-link" href="#spain_vector_map">#</a> </b-card-title>

            <div class="mt-3">
              <JsVectorMap id="spain-vector-map" :height="360" :options="spainMap" />
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
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'
import JsVectorMap from '@/components/JsVectorMap.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const worldMapOptions = {
  map: 'world',
  selector: '#world-map-markers',
  zoomOnScroll: false,
  zoomButtons: true,
  markersSelectable: true,
  markers: [
    { name: 'Greenland', coords: [72, -42] },
    { name: 'Canada', coords: [56.1304, -106.3468] },
    { name: 'Brazil', coords: [-14.235, -51.9253] },
    { name: 'Egypt', coords: [26.8206, 30.8025] },
    { name: 'Russia', coords: [61, 105] },
    { name: 'China', coords: [35.8617, 104.1954] },
    { name: 'United States', coords: [37.0902, -95.7129] },
    { name: 'Norway', coords: [60.472024, 8.468946] },
    { name: 'Ukraine', coords: [48.379433, 31.16558] }
  ],
  markerStyle: {
    initial: { fill: '#5B8DEC' },
    selected: { fill: '#ef5f5f' }
  },
  labels: {
    markers: {
      render: (marker: any) => marker.name
    }
  },
  regionStyle: {
    initial: {
      fill: 'rgba(169,183,197, 0.2)',
      fillOpacity: 1
    }
  }
}

const canadaMap = {
  map: 'canada',
  selector: '#canada-vector-map',
  zoomOnScroll: false,
  regionStyle: {
    initial: {
      fill: '#5B8DEC'
    }
  }
}

const russiaMap = {
  map: 'russia',
  selector: '#russia-vector-map',
  zoomOnScroll: false,
  regionStyle: {
    initial: {
      fill: '#5d7186'
    }
  }
}

const iraqMap = {
  map: 'iraq',
  selector: '#iraq-vector-map',
  zoomOnScroll: false,
  regionStyle: {
    initial: {
      fill: '#20c8e9'
    }
  }
}

const spainMap = {
  map: 'spain',
  selector: '#spain-vector-map',
  zoomOnScroll: false,
  regionStyle: {
    initial: {
      fill: '#ffe381'
    }
  }
}

const anchorNavigation = [
  {
    id: 'world_vector_map',
    title: 'World Vector Map'
  },
  {
    id: 'canada_vector_map',
    title: 'Canada Vector Map'
  },
  {
    id: 'russia_vector_map',
    title: 'Russia Vector Map'
  },
  {
    id: 'iraq_vector_map',
    title: 'Iraq Vector Map'
  },
  {
    id: 'spain_vector_map',
    title: 'Spain Vector Map'
  }
]
</script>
