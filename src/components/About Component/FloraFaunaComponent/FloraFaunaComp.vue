<template>
  <div
    class="background bg-white w-screen h-[44.6rem] flex flex-col justify-center items-center"
  >
    <h1 class="font-poppins font-bold text-4xl text-[#454545] mb-[2.3rem]">
      Flora & Fauna
    </h1>
    <div class="flex justify-center items-center">
      <img class="rotate-180 w-8 h-8 mr-28" :src="iconPath" :alt="alt" />

      <div
        class="card bg-slate-600 h-[31.8rem] w-[62.5rem] rounded-2xl relative"
      >
        <div class="flex flex-col ml-[2.1rem] justify-end h-full mb-[2.5rem]">
          <h2
            class="font-poppins font-bold text-4xl text-[#ffffff] "
          >
            Title
          </h2>
          <p class="">description</p>
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
    };
  },
};
</script>

<style></style>
