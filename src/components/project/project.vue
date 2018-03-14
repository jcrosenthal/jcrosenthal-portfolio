<template>
  <section class="contents product-page">
    <div class="hero">
      <div class="project-title">
        <h1>{{ project.title }}</h1>
        <h2>{{ project.summary }}</h2>
        <div class="overlay"></div>
      </div>
    </div>

    <div class="project_details">
      <div class="row">
        <img :src="project.heroImg" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import projects from './projects'

export default {
  name: 'project',
  props: [
    'src'
  ],
  data() {

    console.log(this._props.src);

    let allProjects = projects();

    let project = allProjects.find(p => p.id === this._props.src);

    return {
      project
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import './core.scss';
</style>
