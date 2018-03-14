<template>
  <main class="contents">
    <div class="river">
      <div class="row name-hero">
        <span class="my-name-is">My name is</span>
        <span class="name">James Rosenthal</span>
        <span class="subtitle">web design / front end development / branding</span>
      </div>
    </div>
    <div class="portfolio-sections">
      <div class="row">
        <div id="web_design" class="section-link"><span>Web Design</span></div>
        <div id="branding" class="section-link"><span>Branding</span></div>
        <div id="illustration" class="section-link"><span>Illustration</span></div>
      </div>
    </div>
    <div class="portfolio-samples">

      <ul id="grid" class="main small-block-grid-2 large-block-grid-4">

        <li class="web_design">
          <router-link to="/almost66" title="Almost 6 6">
            <img src="https://res.cloudinary.com/jcrosenthal/image/upload/web%20design%20thumbs/almost_sixsix.jpg" alt="Almost Six Six">
          </router-link>
        </li>

        <li class="web_design">
          <router-link to="/craig-hanson" title="Craig Hanson">
            <img src="https://res.cloudinary.com/jcrosenthal/image/upload/web%20design%20thumbs/craig_hanson.jpg" alt="Craig Hanson">
          </router-link>
        </li>

        <li class="web_design branding">
          <router-link to="/mstream" title="mStream">
            <img src="https://res.cloudinary.com/jcrosenthal/image/upload/web%20design%20thumbs/mstream.jpg" alt="mStream">
          </router-link>
        </li>

        <li class="web_design branding">
          <router-link to="/brendan-berry" title="Brendan Berry">
            <img src="https://res.cloudinary.com/jcrosenthal/image/upload/web%20design%20thumbs/brendan_berry.jpg" alt="Brendan Berry">
          </router-link>
        </li>

        <li class="web_design">
          <router-link to="/craig-delorenzo" title="Craig Delorenzo">
            <img src="https://res.cloudinary.com/jcrosenthal/image/upload/web%20design%20thumbs/craigdelorenzo.jpg" alt="Craig Delorenzo">
          </router-link>
        </li>

        <li class="web_design branding illustration">
          <router-link to="/joe-nott-band" title="Joe Nott Band">
            <img src="https://res.cloudinary.com/jcrosenthal/image/upload/web%20design%20thumbs/joe_nott.jpg" alt="Joe Nott Band">
          </router-link>
        </li>

        <li class="branding">
          <router-link to="/jvw" title="JVW inc.">
            <img src="https://res.cloudinary.com/jcrosenthal/image/upload/v1494703665/jvw_qbmbgx.jpg" alt="JVW inc.">
          </router-link>
        </li>

        <li class="branding">
          <router-link to="/fogsnob" title="FogSnob">
            <img src="https://res.cloudinary.com/jcrosenthal/image/upload/v1494703466/fogsnob_rz6ug0.jpg" alt="FogSnob">
          </router-link>
        </li>

        <li class="illustration">
          <router-link to="/illustration" title="Camp St. Zombie">
            <img src="https://res.cloudinary.com/jcrosenthal/image/upload/v1494703632/campzombie_f8ziwi.jpg" alt="Camp St. Zombie">
          </router-link>
        </li>

        <li class="illustration">
          <router-link to="/illustration" title="Fire Eyes">
            <img src="https://res.cloudinary.com/jcrosenthal/image/upload/v1494703466/fire_eyes_thumb_tw6zw9.jpg" alt="Fire Eyes">
          </router-link>
        </li>

        <li class="illustration">
          <router-link to="/illustration" title="Screened">
            <img src="https://res.cloudinary.com/jcrosenthal/image/upload/v1494703561/screen_thumb_rk6p4t.jpg" alt="Screened">
          </router-link>
        </li>

        <li class="illustration">
          <router-link to="/illustration" title="Skull Couple">
            <img src="https://res.cloudinary.com/jcrosenthal/image/upload/v1494703466/skull_couple_thumb_smmdqb.jpg" alt="Skull Couple">
          </router-link>
        </li>

      </ul>

    </div>
    <about></about>
  </main>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import './core.scss';
</style>
