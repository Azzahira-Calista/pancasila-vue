<template>
  <div class="bg-primary">
    <TourCompHeroVue />
    <TourCompWisataVue />
    <TourComponentCoulinerVue />
    <FooterComponentVue />
  </div>
</template>

<script>
import TourComponentCoulinerVue from "@/components/Tour Component/TourComponentCouliner/TourComponentCouliner.vue";
import FooterComponentVue from "@/components/Global Component/FooterComponent.vue";
import TourCompHeroVue from "@/components/Tour Component/TourCompHero/TourCompHero.vue";
import TourCompWisataVue from "@/components/Tour Component/TourCompWisata/TourCompWisata.vue";

export default {
  components: {
    TourComponentCoulinerVue,
    TourCompHeroVue,
    TourCompWisataVue,
    FooterComponentVue,
  },
};
</script>

<style></style>
