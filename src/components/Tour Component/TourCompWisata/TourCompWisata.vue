<template>
  <div
    class=" bg-slate-50 w-screen flex flex-col justify-center items-center px-36 py-24 relative"
  >
    <h1 class="font-poppins font-bold text-[#626262] text-4xl mb-4">
      {{ title }}
    </h1>
    <div class="flex space-x-40 mt-[4.7rem]">
      <div class="flex flex-col space-y-20">
        <TourWisataCardVue
          :imageCard="data[0].imageCard"
          :titleCard="data[0].titleCard"
        /><TourWisataCardVue
          :imageCard="data[1].imageCard"
          :titleCard="data[1].titleCard"
        />
        <TourWisataCardVue
          :imageCard="data[2].imageCard"
          :titleCard="data[2].titleCard"
        /><TourWisataCardVue
          :imageCard="data[3].imageCard"
          :titleCard="data[3].titleCard"
        />
        <TourWisataCardVue
          :imageCard="data[4].imageCard"
          :titleCard="data[4].titleCard"
        />
      </div>
      <div class="flex flex-col space-y-20">
        <TourWisataCardVue
          :imageCard="data[5].imageCard"
          :titleCard="data[5].titleCard"
        /><TourWisataCardVue
          :imageCard="data[6].imageCard"
          :titleCard="data[6].titleCard"
        />
        <TourWisataCardVue
          :imageCard="data[7].imageCard"
          :titleCard="data[7].titleCard"
        /><TourWisataCardVue
          :imageCard="data[8].imageCard"
          :titleCard="data[8].titleCard"
        />
        <TourWisataCardVue
          :imageCard="data[9].imageCard"
          :titleCard="data[9].titleCard"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TourWisataCardVue from "./TourWisataCard.vue";

export default {
  components: {
    TourWisataCardVue,
  },

  data() {
    return {
      title: "Rekomendasi Wisata",
      data: [
        {
          imageCard: require("@/assets/images/wisata_komodoisland.png"),
          titleCard: "Komodo Island",
        },
        {
          imageCard: require("@/assets/images/wisata_pinkbeach.png"),
          titleCard: "Pink Beach",
        },
        {
          imageCard: require("@/assets/images/wisata_floresisland.png"),
          titleCard: "Flores Island",
        },
        {
          imageCard: require("@/assets/images/wisata_sumba.png"),
          titleCard: "Sumba",
        },
        {
          imageCard: require("@/assets/images/wisata_waterfall.png"),
          titleCard: "Oehaka Waterfall",
        },
        {
          imageCard: require("@/assets/images/wisata_labuanbajo.png"),
          titleCard: "Labuan Bajo",
        },
        {
          imageCard: require("@/assets/images/wisata_danaukalimutu.png"),
          titleCard: "Danu kalimutu",
        },
        {
          imageCard: require("@/assets/images/wisata_kokabeach.png"),
          titleCard: "Koka Beach",
        },
        {
          imageCard: require("@/assets/images/wisata_ineriemount.png"),
          titleCard: "Inerie Mountain",
        },
        {
          imageCard: require("@/assets/images/wisata_cave.png"),
          titleCard: "Liang Bua Cave",
        },
      ],
    };
  },
};
</script>

<style></style>
