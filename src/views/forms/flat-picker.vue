<template>
  <DefaultLayout>
    <PageBreadcrumb title="Flatpicker" subtitle="Form" />

    <b-row>
      <b-col xl="9">
        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-3 anchor" id="basic"> Basic<a class="anchor-link" href="#basic">#</a> </b-card-title>

            <b-row>
              <b-col lg="6">
                <FlatPicker id="basic-datepicker" placeholder="Basic datepicker" />
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-3 anchor" id="datetime"> DateTime<a class="anchor-link" href="#datetime">#</a> </b-card-title>

            <b-row>
              <b-col lg="6">
                <FlatPicker id="datetime-datepicker" placeholder="Date and Time" :options="{ enableTime: true, dateFormat: 'Y-m-d H:i' }" />
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-3 anchor" id="human-friendly-dates"> Human-friendly Dates<a class="anchor-link" href="#human-friendly-dates">#</a> </b-card-title>

            <b-row>
              <b-col lg="6">
                <FlatPicker id="humanfd-datepicker" placeholder="October 9, 2018" :options="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }" />
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="mb-3 anchor" id="minmax"> MinDate and MaxDate<a class="anchor-link" href="#minmax">#</a> </b-card-title>

            <b-row>
              <b-col lg="6">
                <FlatPicker id="minmax-datepicker" placeholder="mindate - maxdate" :options="{ minDate: '2020-01', maxDate: '2020-03' }" />
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="card-title mb-3 anchor" id="disable"> Disabling dates<a class="anchor-link" href="#disable">#</a> </b-card-title>

            <b-row>
              <b-col lg="6">
                <FlatPicker
                  id="disable-datepicker"
                  placeholder="Disabling dates"
                  :options="{
                    disable: ['2025-01-10', '2025-01-21', '2025-01-30', new Date(2025, 4, 9)],
                    dateFormat: 'Y-m-d'
                  }"
                />
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="card-title mb-3 anchor" id="multiple"> Selecting multiple dates<a class="anchor-link" href="#multiple">#</a> </b-card-title>

            <b-row>
              <b-col lg="6">
                <FlatPicker id="multiple-datepicker" placeholder="Multiple dates" :options="{ mode: 'multiple', dateFormat: 'Y-m-d' }" />
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="card-title mb-3 anchor" id="conjunction"> Selecting multiple dates - Conjunction<a class="anchor-link" href="#conjunction">#</a> </b-card-title>

            <b-row>
              <b-col lg="6">
                <FlatPicker id="conjunction-datepicker" placeholder="2018-10-10 :: 2018-10-11" :options="{ mode: 'multiple', dateFormat: 'Y-m-d', conjunction: ' :: ' }" />
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="card-title mb-3 anchor" id="range-calendar"> Range Calendar<a class="anchor-link" href="#range-calendar">#</a> </b-card-title>

            <b-row>
              <b-col lg="6">
                <FlatPicker id="range-datepicker" placeholder="2018-10-03 to 2018-10-10" :options="{ mode: 'range' }" />
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="card-title mb-3 anchor" id="inline-calendar"> Inline Calendar<a class="anchor-link" href="#inline-calendar">#</a> </b-card-title>

            <b-row>
              <b-col lg="6">
                <FlatPicker id="inline-datepicker" placeholder="Inline calendar" :options="{ inline: true }" />
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="card-title mb-3 anchor" id="timepicker-basic"> Basic Timepicker<a class="anchor-link" href="#timepicker-basic">#</a> </b-card-title>

            <b-row>
              <b-col lg="6">
                <FlatPicker id="basic-timepicker" placeholder="Basic timepicker" :options="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }" />
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="card-title mb-3 anchor" id="24hours"> 24-hour Time Picker<a class="anchor-link" href="#24hours">#</a> </b-card-title>

            <b-row>
              <b-col lg="6">
                <FlatPicker id="24hours-timepicker" placeholder="16:21" :options="{ enableTime: true, noCalendar: true, dateFormat: 'H:i', time_24hr: true }" />
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="card-title mb-3 anchor" id="timepicker-minmax"> Time Picker w/ Limits<a class="anchor-link" href="#timepicker-minmax">#</a> </b-card-title>

            <b-row>
              <b-col lg="6">
                <FlatPicker id="minmax-timepicker" placeholder="Limits" :options="{ enableTime: true, noCalendar: true, dateFormat: 'H:i', minDate: '16:00', maxDate: '22:30' }" />
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h5" class="card-title mb-3 anchor" id="preloading-time"> Preloading Time<a class="anchor-link" href="#preloading-time">#</a> </b-card-title>

            <b-row>
              <b-col lg="6">
                <FlatPicker id="preloading-timepicker" placeholder="Pick a time" :options="{ enableTime: true, noCalendar: true, dateFormat: 'H:i', defaultDate: '01:45' }" />
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
import FlatPicker from '@/components/FlatPicker.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'

const anchorNavigation = [
  {
    id: 'basic',
    title: 'Basic'
  },
  {
    id: 'datetime',
    title: 'DateTime'
  },
  {
    id: 'human-friendly-dates',
    title: 'Human-friendly Dates'
  },
  {
    id: 'minmax',
    title: 'MinDate and MaxDate'
  },
  {
    id: 'disable',
    title: 'Disabling dates'
  },
  {
    id: 'multiple',
    title: 'Selecting multiple dates'
  },
  {
    id: 'conjunction',
    title: 'Selecting multiple dates - Conjunction'
  },
  {
    id: 'range-calendar',
    title: 'Range Calendar'
  },
  {
    id: 'inline-calendar',
    title: 'Inline Calendar'
  },
  {
    id: 'timepicker-basic',
    title: 'Basic Timepicker'
  },
  {
    id: '24hours',
    title: '24-hour Time Picker'
  },
  {
    id: 'timepicker-minmax',
    title: 'Time Picker w/ Limits'
  },
  {
    id: 'preloading-time',
    title: 'Preloading Time'
  }
]
</script>
