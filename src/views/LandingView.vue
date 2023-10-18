<template>
  <div class="bg-primary">
    <LandingCompOne />
    <LandingCompProfileGorvVue />
    <LandingCompProvVue />
    <LandingCompGeographyVue />
    <LandingCompWisataVue />
  </div>
</template>

<script>
import LandingCompOne from "@/components/Landing Component/LandingCompHero/LandingCompHero.vue";
import LandingCompGeographyVue from "@/components/Landing Component/LandingCompGeography/LandingCompGeography.vue";
import LandingCompProfileGorvVue from "@/components/Landing Component/LandingCompProfileGorv/LandingCompProfileGorv.vue";
import LandingCompWisataVue from "@/components/Landing Component/LandingCompWisata/LandingCompWisata.vue";
import LandingCompProvVue from "@/components/Landing Component/LandingCompProv/LandingCompProv.vue";

export default {
  components: {
    LandingCompOne,
    LandingCompGeographyVue,
    LandingCompProfileGorvVue,
    LandingCompWisataVue,
    LandingCompProvVue,
  },
};
</script>

<style></style>
