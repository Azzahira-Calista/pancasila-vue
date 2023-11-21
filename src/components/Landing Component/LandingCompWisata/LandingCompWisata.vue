<template>
  <div
    class="w-screen h-[45rem] flex flex-col items-center justify-center relative"
  >
    <div
      class="flex flex-col items-center justify-center absolute mx-[10.1rem]"
    >
      <h1 class="font-poppins font-bold text-4xl text-subTittle mt-8">
        wisata Nusa Tenggara Timur
      </h1>
      <p class="my-8 text-center text-subTittle">
        "Menemukan Pesona Alami Tak Terlupakan: Petualangan Wisata di Nusa Tenggara Timur yang Luar Biasa Indah"
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
          imageCard: require("@/assets/images/wisata_komodoisland.png"),
          descriptionCard:
            "Pulau Komodo dikenal sebagai habitat asli hewan komodo.",
        },
        {
          imageCard: require("@/assets/images/wisata_sumba.png"),
          descriptionCard:
            "Pulau Sumba memiliki bentang alam yang didominasi padang rumput dan kaya akan keragaman hayati.",
        },
        {
          imageCard: require("@/assets/images/wisata_labuanbajo.png"),
          descriptionCard:
            "Labuan Bajo merupakan sebuah surga tersembunyi yang ada di Indonesia bagian timur.",
        },
        {
          imageCard: require("@/assets/images/wisata_pinkbeach.png"),
          descriptionCard:
            "Pantai Pink ini memiliki pasir berwarna pink yang indah dan menjadi salah satu keunikan yang jarang ditemukan di dunia.",
        },
      ],
    };
  },
};
</script>

<style></style>
