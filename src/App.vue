<template>
  <TourView/>
  <AboutView/>
  <landingView/>
</template>

<script>
import LandingView from './views/LandingView.vue';
import AboutView from './views/AboutView.vue';
import TourView from './views/TourView.vue';

export default {
  components: {
    AboutView,
    LandingView,
    TourView
  }

}
</script>

<style>

</style>