<template>
  <div>
    <LandingCompOne />
    <LandingCompGeographyVue />
    <LandingCompProfileGorvVue />
  </div>
</template>

<script>
import LandingCompOne from "@/components/Landing Component/LandingCompHero/LandingCompHero.vue";
import LandingCompGeographyVue from "@/components/Landing Component/LandingCompGeography/LandingCompGeography.vue";
import LandingCompProfileGorvVue from "@/components/Landing Component/LandingCompProfileGorv/LandingCompProfileGorv.vue";

export default {
  components: {
    LandingCompOne,
    LandingCompGeographyVue,
    LandingCompProfileGorvVue
  },
};
</script>

<style></style>
