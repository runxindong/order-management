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
    margin-bottom: 20px;
  }
/* } */
</style>

<template>
  <div class="order-list" v-for="comment in comments" :key="comment.id">
    <div>{{ comment.email }}</div>
    <div>{{ comment.id }}</div>
  </div>
  <InfiniteLoading @infinite="load" />
</template>


<script setup lang="ts">
  import { ref } from 'vue'
  import InfiniteLoading from 'v3-infinite-loading'
  import 'v3-infinite-loading/lib/style.css'

  let comments = ref([])
  let page = 1
  const load = async ($state: { complete: () => void; loaded: () => void; error: () => void; }) => {
    console.log('loading...')

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments?_limit=10&_page=' +
          page
      )
      const json = await response.json()
      if (json.length < 10) $state.complete()
      else {
        comments.value.push(...json)
        $state.loaded()
      }
      page++
    } catch (error) {
      $state.error()
    }
  }
</script>