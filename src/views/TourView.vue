<template>
  <div>
    <TourCompHeroVue/>
    <TourComponentCoulinerVue/>
    <FooterComponentVue/>

  </div>
</template>

<script>
import TourComponentCoulinerVue from '@/components/Tour Component/TourComponentCouliner/TourComponentCouliner.vue'
import FooterComponentVue from '@/components/Global Component/FooterComponent.vue'
import TourCompHeroVue from '@/components/Tour Component/TourCompHero/TourCompHero.vue'



export default {
  components: {
    TourComponentCoulinerVue,
    FooterComponentVue,
    TourCompHeroVue
  }
}
</script>

<style>

</style>