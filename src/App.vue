<style src="./styles/simple-grid.scss" lang="scss"></style>

<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>
