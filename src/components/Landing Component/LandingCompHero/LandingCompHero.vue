<template>
  <div class="relative w-screen h-screen">
    <img class="absolute w-full h-full" :src="backgroundImage" :alt="backgroundImageText">
    <div class="absolute w-full h-full bg-black opacity-[0.35]"></div>
    <NavbarComponentVue/>
    <div class="pl-40 flex flex-col justify-center h-full w-full absolute">
      <h1 class="font-poppins font-bold text-4xl text-[#F1F1F1]">{{ titleOne }}</h1>
      <br>
      <h1 class="font-poppins font-bold text-4xl text-[#F1F1F1] mb-5">{{ titleTwo }}</h1>

      <p class="font-inter text-base font-normal w-[37.37rem] text-[#F1F1F1]">
        {{ description }}
      </p>
    </div>

    
  </div>
</template>

<script>
import NavbarComponentVue from '../../Global Component/NavbarComponent.vue'

export default {
  data() { 
    return {
      backgroundImage: require('@/assets/images/bg_landing_hero.png'),
      backgroundImageText: "Background Landing Hero",
      titleOne: "Nusa Tenggara",
      titleTwo: "Timur (NTT)",
      description: "Provinsi yang terletak di bagian timur Indonesia, terdiri dari sejumlah pulau besar dan kecil, termasuk Pulau Timor. Ibu kotanya adalah Kupang. NTT memiliki keanekaragaman etnis, budaya, dan bahasa yang kaya. Keindahan alamnya meliputi pantai-pantai eksotis, gunung-gunung, dan taman nasional yang mengundang wisatawan."
    }
  },
  components: {
    NavbarComponentVue
  }
}
</script>

<style>

</style>