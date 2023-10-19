<template>
  <div
    class="w-screen h-[20.6rem] flex flex-col items-center justify-center relative"
  >
    <div class="flex flex-row space-x-24">
      <div class="flex flex-col">
        <h1 class="text-3xl font-poppins font-bold mb-5">provinsi</h1>
        <ItemLandingCompProvVue
          :imageCard="data[0].imageCard"
          :descriptionCard="data[0].descriptionCard"
        />
        <ItemLandingCompProvVue
          :imageCard="data[1].imageCard"
          :descriptionCard="data[1].descriptionCard"
        />
      </div>
      <div class="flex flex-row space-x-24">
        <div class="flex flex-col">
          <h1 class="text-3xl font-poppins font-bold mb-5">provinsi</h1>
          <div class="flex flex-row">
            <ImageSquare :imageSquareCard="data[2].ImageSquareCard" />
            <ImageSquare :imageSquareCard="data[2].ImageSquareCard" />
            <ImageSquare :imageSquareCard="data[2].ImageSquareCard" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemLandingCompProvVue from "./ItemLandingCompProv.vue";
import ImageSquare from "./ImageSquare.vue";

export default {
  components: {
    ItemLandingCompProvVue,
    ImageSquare,
  },
  data() {
    return {
      data: [
        {
          imageCard: require("@/assets/images/bg_landing_geography.png"),
          descriptionCard: "Provinsi yang terletak di bagian timur Indonesia",
        },
        {
          imageCard: require("@/assets/images/bg_landing_geography.png"),
          descriptionCard: "Provinsi satu lagi",
        },
        {
          ImageSquareCard: require("@/assets/images/bg_landing_geography.png"),
        },
      ],
    };
  },
};
</script>

<style></style>
