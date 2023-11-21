<template>
  <div
    class="w-screen h-[20.6rem] flex flex-col items-center justify-center relative"
  >
    <div class="flex flex-row space-x-24">
      <div class="flex flex-col">
        <h1 class="text-3xl font-poppins font-bold mb-5 text-[#626262]">Flora</h1>
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
          <h1 class="text-3xl font-poppins font-bold mb-5 text-[#626262]">Fauna</h1>
          <div class="flex flex-row">
            <ImageSquare :imageSquareCard="data[2].ImageSquareCard" />
            <ImageSquare :imageSquareCard="data[3].ImageSquareCard" />
            <ImageSquare :imageSquareCard="data[4].ImageSquareCard" />
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
          imageCard: require("@/assets/images/flora_cendana.png"),
          descriptionCard:
            "cendana wangi (Santalum album), merupakan pohon penghasil kayu cendana dan minyak cendana.",
        },
        {
          imageCard: require("@/assets/images/bg_landing_geography.png"),
          descriptionCard:
            "Pohon ampupu merupakan tanaman endemik dari Nusa Tenggara Timur",
        },
        {
          ImageSquareCard: require("@/assets/images/fauna_komodo.png"),
        },
        {
          ImageSquareCard: require("@/assets/images/fauna_kera.png"),
        },
        {
          ImageSquareCard: require("@/assets/images/fauna_kuskus.png"),
        },
      ],
    };
  },
};
</script>

<style></style>
