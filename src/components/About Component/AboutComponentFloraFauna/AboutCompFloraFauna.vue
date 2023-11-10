<template>
  <div
    class="bg-white w-screen h-screen flex flex-col justify-center items-center"
  >
    <h1 class="font-poppins font-bold text-4xl text-[#454545] mb-10">
      Flora & Fauna
    </h1>
    <div class="flex justify-center items-center">
      <swiper
        class="w-screen h-full"
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
      >
        <swiper-slide v-for="(card, index) in data" :key="index">
          <CardFlore
            :imageCard="card.imageCard"
            :titleCard="card.titleCard"
            :descriptionCard="card.descriptionCard"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CardFlore from "./CardFlore.vue";

export default {
  components: {
    CardFlore,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  data() {
    return {
      iconPath: require("@/assets/icon/double_arrow_black.svg"),
      data: [
        {
          imageCard: require("@/assets/images/fauna_kuskus.png"),
          titleCard: "kuskus",
          descriptionCard:
            "Kuskus adalah mamalia berkantung nokturnal termasuk dalam famili Phalangeridae. Kelompok hewan ini persebarannya terbatas di Indonesia bagian timur.",
        },
        {
          imageCard: require("@/assets/images/fauna_komodo.png"),
          titleCard: "Komodo",
          descriptionCard:
            "Komodo merupakan hewan karnivora yang mempunyai kecepatan berlari 20 km/jam. Gigitannya mengandung infeksi, disebabkan air liurnya mengandung 60 jenis bakteri.",
        },
        {
          imageCard: require("@/assets/images/fauna_kera.png"),
          titleCard: "Kera Macaca",
          descriptionCard:
            "Macaca Maura adalah seekor monyet makak dengan bulu tubuh berwarna cokelat/hitam dengan bercak pucat di bagian pantat dan kulit yang tidak berbulu berwarna merah muda di bagian pantat. Monyet ini memiliki kutil iskial, yang berbentuk oval.",
        },
        {
          imageCard: require("@/assets/images/flora_cendana.png"),
          titleCard: "Cendana Wangi",
          descriptionCard:
            "cendana wangi (Santalum album), merupakan pohon penghasil kayu cendana dan minyak cendana.",
        },
        {
          imageCard: require("@/assets/images/flora_ampupu.png"),
          titleCard: "Pohon Ampupu",
          descriptionCard:
            "Pohon ampupu merupakan tanaman endemik dari Nusa Tenggara Timur",
        },
        
      ],
    };
  },
};
</script>
