<template>
  <div class="bg-primary">
    <AboutCompHerovue />
    <FloraFaunaCompVue />
    <AboutCompVisiVue />
    <AboutCompEmblemAreaVue />
    <FooterComponent />
  </div>
</template>

<script>
import AboutCompEmblemAreaVue from "@/components/About Component/AboutCompEmblemArea/AboutCompEmblemArea.vue";
import FooterComponent from "@/components/Global Component/FooterComponent.vue";
import FloraFaunaCompVue from "@/components/About Component/FloraFaunaComponent/FloraFaunaComp.vue";
import AboutCompHerovue from "@/components/About Component/AboutCompHero/AboutCompHero.vue";
import AboutCompVisiVue from "@/components/About Component/AboutCompVisiMisi/AboutCompVisi.vue";

export default {
  components: {
    AboutCompEmblemAreaVue,
    FooterComponent,
    FloraFaunaCompVue,
    AboutCompHerovue,
    AboutCompVisiVue,
  },
};
</script>
