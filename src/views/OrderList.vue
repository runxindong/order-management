<!-- <template>
  <div class="about">
    <h1>This is an order list page</h1>
  </div>
</template> -->

<style>
/* @media (min-width: 1024px) { */
  .order-list {
    /* min-height: 100vh; */
    display: flex;
    align-items: center;
    /* margin: 100px auto 10px auto; */
    /* flex-direction: column;
    gap: 5px;
    font-weight: 300;
    width: 400px;
    padding: 10px;
    text-align: center;
    margin: 0 auto 10px auto;
    background: #eceef0;
    border-radius: 10px; */
  }
  .order-item {
    margin-bottom: 200px;
  }
/* } */
</style>

<template>
  <div class="order-list" v-for="order in orders" :key="order.id">
    <div class="order-item">#{{ order.id }} | {{order.order_no}} | {{order.username}} | {{order.total}}</div>
  </div>
  <InfiniteLoading @infinite="load" />
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import InfiniteLoading from 'v3-infinite-loading'
  import 'v3-infinite-loading/lib/style.css'

  let orders = ref([])
  let page = 1
  const load = async ($state: { complete: () => void; loaded: () => void; error: () => void; }) => {
    console.log('loading...')

    try {
      const response = await fetch(
        'http://localhost:3000/orders?_limit=3&_page=' + page
      )
      const json = await response.json()
      if (json.length < 3) $state.complete()
      else {
        orders.value.push(...json)
        $state.loaded()
      }
      page++
    } catch (error) {
      $state.error()
    }
  }
</script>