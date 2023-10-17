<template>
  <div
    class="w-screen h-[32.25rem] px-[10.3rem] pt-[2rem] pb-[3.56rem] bg-white"
  >
    <div class="flex w-full">

      <div class="flex flex-col  mr-10">
        <h1 class="font-poppins font-bold text-4xl text-[#454545] mb-7">
          {{ heading }}
        </h1>
        <div class="w-[18.5rem] h-[21.12rem] bg-[#EEEEEE]"></div>
        
      </div>

      <div class="flex flex-col">
        <h1 class="font-inter font-bold text-3xl text-[#626262] mb-7">
          {{ subheading }}
        </h1>
        <div class="flex flex-col w-[38.18rem]">
          <p class="font-inter font-normal text-base text-[#6F6E6E]">
            {{ description }}
          </p>

          <br>

          <p class="font-inter font-normal text-base text-[#6F6E6E]">
            {{ description }}
          </p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      heading: "Profile Gurbernur",
      subheading: "Provinsi yang terletak di bagian 1980-1980",
      description: "Provinsi yang terletak di bagian timur Indonesia, terdiri dari sejumlah pulau besar dan kecil, termasuk Pulau Timor. Ibu kotanya adalah Kupang. NTT memiliki keanekaragaman etnis, budaya, dan bahasa yang kaya. Keindahan alamnya meliputi pantai-pantai eksotis, gunung-gunung, dan taman nasional yang mengundang wisatawan."
    }
  }
};
</script>