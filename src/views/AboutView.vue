<template>
  <div class="bg-primary">
    <AboutCompHerovue />
    <AboutCompFloraFaunaVue />
    <AboutCompVisiVue />
    <AboutCompHistoryVue/>
    <AboutCompContributionVue/>
    <AboutCompEmblemAreaVue />
    <FooterComponent />
  </div>
</template>

<script>
import AboutCompEmblemAreaVue from "@/components/About Component/AboutCompEmblemArea/AboutCompEmblemArea.vue";
import FooterComponent from "@/components/Global Component/FooterComponent.vue";
import AboutCompHerovue from "@/components/About Component/AboutCompHero/AboutCompHero.vue";
import AboutCompVisiVue from "@/components/About Component/AboutCompVisiMisi/AboutCompVisi.vue";
import AboutCompFloraFaunaVue from '@/components/About Component/AboutComponentFloraFauna/AboutCompFloraFauna.vue';
import AboutCompHistoryVue from '@/components/About Component/AboutCompHistory/AboutCompHistory.vue';
import AboutCompContributionVue from '@/components/About Component/AboutCompContribution/AboutCompContribution.vue';

export default {
  components: {
    AboutCompEmblemAreaVue,
    FooterComponent,
    AboutCompFloraFaunaVue,
    AboutCompHerovue,
    AboutCompVisiVue,
    AboutCompHistoryVue,
    AboutCompContributionVue,
  },
};
</script>

