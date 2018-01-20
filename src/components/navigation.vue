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
        url: '/',
        display: 'Home'
      }, {
        url: '/work',
        display: 'Work'
      }, {
        url: '/about',
        display: 'About'
      }, {
        url: '/contact',
        display: 'Contact'
      }]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
  a {
    font-weight: bold;
    color: #42b983;
  }
}

</style>
