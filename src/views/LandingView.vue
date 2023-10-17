<template>
  <div class=" bg-primary">
    <LandingCompOne />

    <LandingCompProfileGorvVue />
    <LandingCompGeographyVue />
    <LandingCompWisataVue/>
  </div>
</template>

<script>
import LandingCompOne from "@/components/Landing Component/LandingCompHero/LandingCompHero.vue";
import LandingCompGeographyVue from "@/components/Landing Component/LandingCompGeography/LandingCompGeography.vue";
import LandingCompProfileGorvVue from "@/components/Landing Component/LandingCompProfileGorv/LandingCompProfileGorv.vue";
import LandingCompWisataVue from '@/components/Landing Component/LandingCompWisata/LandingCompWisata.vue';

export default {
  components: {
    LandingCompOne,
    LandingCompGeographyVue,
    LandingCompProfileGorvVue,
    LandingCompWisataVue
  },
};
</script>

<style></style>
