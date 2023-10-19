<template>
  <div class="bg-primary">
    <LandingCompOne />
    <LandingCompProfileGorvVue />
    <LandingCompProvVue />
    <LandingCompGeographyVue />
    <LandingCompServiceVue />
    <LandingCompWisataVue />
    <FooterComponent />
  </div>
</template>

<script>
import LandingCompOne from "@/components/Landing Component/LandingCompHero/LandingCompHero.vue";
import LandingCompGeographyVue from "@/components/Landing Component/LandingCompGeography/LandingCompGeography.vue";
import LandingCompProfileGorvVue from "@/components/Landing Component/LandingCompProfileGorv/LandingCompProfileGorv.vue";
import LandingCompServiceVue from "@/components/Landing Component/LandingCompService/LandingCompService.vue";
import LandingCompWisataVue from "@/components/Landing Component/LandingCompWisata/LandingCompWisata.vue";
import LandingCompProvVue from "@/components/Landing Component/LandingCompProv/LandingCompProv.vue";
import FooterComponent from "@/components/Global Component/FooterComponent.vue";

export default {
  components: {
    LandingCompOne,
    LandingCompGeographyVue,
    LandingCompProfileGorvVue,
    LandingCompServiceVue,
    LandingCompWisataVue,
    LandingCompProvVue,
    FooterComponent,
  },
};
</script>

<style></style>
