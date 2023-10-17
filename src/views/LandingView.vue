<template>
  <div>
    <LandingCompOne />
    <LandingCompGeographyVue />
    <LandingCompProfileGorvVue />
    <LandingCompServiceVue />
  </div>
</template>

<script>
import LandingCompOne from "@/components/Landing Component/LandingCompHero/LandingCompHero.vue";
import LandingCompGeographyVue from "@/components/Landing Component/LandingCompGeography/LandingCompGeography.vue";
import LandingCompProfileGorvVue from "@/components/Landing Component/LandingCompProfileGorv/LandingCompProfileGorv.vue";
import LandingCompServiceVue from "@/components/Landing Component/LandingCompService/LandingCompService.vue";

export default {
  components: {
    LandingCompOne,
    LandingCompGeographyVue,
    LandingCompProfileGorvVue,
    LandingCompServiceVue
  },
};
</script>

<style></style>
