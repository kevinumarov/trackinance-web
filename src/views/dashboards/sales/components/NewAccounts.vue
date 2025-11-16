<template>
  <b-card no-body>
    <b-card-header class="d-flex justify-content-between align-items-center">
      <b-card-title tag="h4">New Accounts</b-card-title>
      <a href="#!" class="btn btn-sm btn-light"> View All </a>
    </b-card-header>

    <b-card-body class="pb-1">
      <b-table-simple hover responsive class="mb-0 table-centered">
        <b-thead>
          <b-tr>
            <b-th v-for="(header, idx) in newAccountsTableData.header" :key="idx" class="py-1">{{ header }}</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="(item, idx) in newAccountsTableData.body" :key="idx">
            <b-td>{{ item.id }}</b-td>
            <b-td>{{ item.date }}</b-td>
            <b-td>
              <img :src="item.user.avatar" alt="avatar-2" class="img-fluid avatar-xs rounded-circle" />
              <span class="align-middle ms-1">{{ item.user.name }}</span>
            </b-td>
            <b-td>
              <b-badge :class="item.account === 'verified' ? 'badge-soft-success text-success' : item.account === 'pending' ? 'badge-soft-warning text-warning' : 'badge-soft-danger text-danger'">
                {{ toSentenceCase(item.account) }}
              </b-badge>
            </b-td>
            <td>{{ item.username }}</td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { newAccountsTableData } from '@/views/dashboards/sales/components/data'
import { toSentenceCase } from '@/helpers/change-casing'
</script>
