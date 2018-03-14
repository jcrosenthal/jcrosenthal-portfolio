<template>
  <section class="about-me">
    <div class="large-6 small-12 columns">
      <h2>About Me</h2>
      <p>Web design and development is my bread &amp; butter. HTML, SCSS, PHP, and JavaScript (Angular, VueJs, jQuery, Node) are the languages I use day to day. I get unreasonably excited about front end dev.</p>
    </div>

    <div class="large-6 small-12 columns text-right">
      <img src="https://res.cloudinary.com/jcrosenthal/image/upload/about-me_q3byu4.jpg" alt="James Rosenthal - Web Designer / Developer">
    </div>
  </section>
</template>

<script>
export default {
    name: 'about',
    data() {
        return {}
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import './core.scss';
</style>
