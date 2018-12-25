<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style>
    body {
        font-family: 'PT Sans', sans-serif;
        background: #e0e0e0;
    }

    body, html, #app {
        height: 100%;
    }
</style>
<script>
export default {
  name: 'App',
};
</script>
