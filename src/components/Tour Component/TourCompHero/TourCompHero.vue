<template>
  <div class="w-screen h-screen relative">
    <img class="absolute w-screen h-screen" :src="backgroundImage" />
    <div class="absolute w-full h-full bg-black opacity-[0.35]" />
    <div
      class="descript absolute w-screen h-screen flex flex-col justify-center items-center"
    >
      <h1 class="font-poppins font-bold text-4xl text-[#F1F1F1] mb-5">
        Travel without limits
      </h1>
      <p class="font-inter font-normal text-base text-[#F1F1F1] mb-14 w-96 text-center">
        Jelajahi lebih lanjut tentang makanan dan wisata khas NTT
      </p>

      <div class="v-col flex space-x-6">
        <div
        class="w-48 h-12 bg-slate-50 rounded-3xl flex items-center justify-center"
      >
        <a
          href=""
          class="flex items-center text-2xl font-poppins font-bold text-[#626262]"
          >Wisata</a
        >
      </div>
      <div
        class="w-48 h-12 bg-slate-50 rounded-3xl flex items-center justify-center"
      >
        <a
          href=""
          class="flex items-center text-2xl font-poppins font-bold text-[#626262]"
          >Makanan</a
        >
      </div>
      </div>
      
    </div>
    <NavbarComponentVue />
  </div>
</template>

<script>
import NavbarComponentVue from "../../Global Component/NavbarComponent.vue";

export default {
  data() {
    return {
      backgroundImage: require("@/assets/images/bg_tour_hero.png"),
    };
  },
  components: {
    NavbarComponentVue,
  },
};
</script>
