<template>
  <div class="relative w-screen h-screen">
    <img class="absolute w-full h-full" src="@/assets/images/bg_landing_hero.png" alt="Background Landing Page">
    <div class="absolute w-full h-full bg-black opacity-[0.35]"></div>
    <NavbarComponentVue/>
    <div class="pl-40 flex flex-col justify-center h-full w-full absolute">
      <h1 class="font-poppins font-bold text-4xl text-[#F1F1F1]">Nusa Tenggara</h1>
      <br>
      <h1 class="font-poppins font-bold text-4xl text-[#F1F1F1] mb-5">Timur (NTT)</h1>

      <p class="font-inter text-base font-normal w-[37.37rem] text-[#F1F1F1]">Provinsi yang terletak di bagian timur Indonesia, terdiri dari sejumlah pulau besar dan kecil, termasuk Pulau Timor. Ibu kotanya adalah Kupang. NTT memiliki keanekaragaman etnis, budaya, dan bahasa yang kaya. Keindahan alamnya meliputi pantai-pantai eksotis, gunung-gunung, dan taman nasional yang mengundang wisatawan.</p>
    </div>

    
  </div>
</template>

<script>
import NavbarComponentVue from '../../Global Component/NavbarComponent.vue'

export default {
  components: {
    NavbarComponentVue
  }
}
</script>

<style>

</style>