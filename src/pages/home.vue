<template>
    <div>
        This home page
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script lang="ts">
    import NavHeader from './../components/NavHeader.vue'
    import NavFooter from './../components/NavFooter.vue'
    export default{
        name: 'home',
        components: {
            NavHeader,
            NavFooter,
        }
    }
</script>