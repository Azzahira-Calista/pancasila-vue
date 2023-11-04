<template>
  <div
    class="background bg-white w-screen h-[44.6rem] flex flex-col justify-center items-center"
  >
    <h1 class="font-poppins font-bold text-4xl text-[#454545] mb-[2.3rem]">
      Flora & Fauna
    </h1>
    <div class="flex justify-center items-center">
      <img class="rotate-180 w-8 h-8 mr-28" :src="iconPath" :alt="alt" />

      <div class="card h-[31.8rem] w-[62.5rem] rounded-2xl relative">
        <img :src="imagePath" class="absolute" />
        <div
          class="flex flex-col ml-[2.1rem] justify-end h-full mb-[2.5rem] absolute"
        >
          <h2 class="font-poppins font-bold text-4xl text-[#ffffff]">Kuskus</h2>
          <p class="mb-9 font-inter text-base text-[#ffffff] w-96">
            Kuskus adalah mamalia berkantung <i>(Marsupialia) </i> nokturnal
            termasuk dalam famili Phalangeridae. Kelompok hewan ini
            persebarannya terbatas di Indonesia bagian timur.
          </p>
        </div>
      </div>
      <img class="w-8 h-8 ml-28" :src="iconPath" :alt="alt" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconPath: require("@/assets/icon/double_arrow_black.svg"),
      imagePath: require("@/assets/images/fauna1.png"),
    };
  },
};
</script>

<style></style>
