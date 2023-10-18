<template>
  <div
    class="w-screen h-[40rem] flex flex-col items-center justify-center relative"
  >
    <div
      class="flex flex-col items-center justify-center absolute mx-[10.1rem]"
    >
      <h1 class="font-poppins font-bold text-4xl text-subTittle">
        wisata Nusa Tenggara Timur
      </h1>
      <p class="my-8 text-center text-subTittle">
        Provinsi yang terletak di bagian timur Indonesia, terdiri dari sejumlah
        pulau besar dan kecil, termasuk Pulau Timor. Ibu kotanya adalah Kupang.
        NTT memiliki keanekaragaman etnis, budaya, dan bahasa yang kaya.
      </p>
      <div class="grid grid-cols-2 gap-12">
        <CardWisata
          :imageCard="data[0].imageCard"
          :descriptionCard="data[0].descriptionCard"
        />
        <CardWisata
          :imageCard="data[1].imageCard"
          :descriptionCard="data[1].descriptionCard"
        />
        <CardWisata
          :imageCard="data[2].imageCard"
          :descriptionCard="data[2].descriptionCard"
        />
        <CardWisata
          :imageCard="data[3].imageCard"
          :descriptionCard="data[3].descriptionCard"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardWisata from "./CardWisata.vue";
export default {
  components: {
    CardWisata,
  },
  data() {
    return {
      data: [
        {
          imageCard: require("@/assets/images/bg_landing_geography.png"),
          descriptionCard:
            "Provinsi yang terletak di bagian timur Indonesia, ksajkouubdjs ijifdjdufhh dhojdhkjkjnjk ",
        },
        {
          imageCard: "lllll",
          descriptionCard:
            "Provinsi yang terletak di bagian timur Indonesia, ksajkouubdjs ijifdjdufhh dhojdhkjkjnjk ",
        },
        {
          imageCard: "lllll",
          descriptionCard:
            "Provinsi yang terletak di bagian timur Indonesia, ksajkouubdjs ijifdjdufhh dhojdhkjkjnjk ",
        },
        {
          imageCard: "lllll",
          descriptionCard:
            "Provinsi yang terletak di bagian timur Indonesia, ksajkouubdjs ijifdjdufhh dhojdhkjkjnjk ",
        },
      ],
    };
  },
};
</script>

<style></style>
