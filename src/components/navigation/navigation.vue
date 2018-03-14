<template>
  <header>
    <nav v-for="link in links">
      <router-link :to="{ path: link.url }">{{ link.display }}</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      links: [{
        url: '/linkedin',
        display: 'linkedin'
      }, {
        url: '/behance',
        display: 'behance'
      }]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './core';
</style>
