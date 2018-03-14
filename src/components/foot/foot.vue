<template>
  <footer class="container">
    <div class="row">
      <div class="col-4">
        <span>Portfolio</span>
        <nav>
          <a href="/">Home</a>
          <a href="/almost66">Web Design</a>
          <a href="/jvw">Branding</a>
          <a href="/illustration">Illustration</a>
        </nav>
      </div>
      <div class="col-4">
        <span>Let's Work Together!</span>
        <a href="mailto:jcrosenthal@gmail.com">jcrosenthal@gmail.com</a>
      </div>
      <div class="col-4">
        <div class="social-links">
          <a href="https://www.linkedin.com/in/jcrosenthal" title="James Rosenthal Linkedin" target="_blank" class="linkedin"></a>
          <a href="https://www.behance.net/JCROSENTHAd34b" title="James Rosenthal Behance" target="_blank" class="behance"></a>
        </div>
      </div>
      <div class="copyright col-12">
        Copyright &copy; James Rosenthal. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'foot',
    data() {
        return {

        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import './core.scss';
</style>
