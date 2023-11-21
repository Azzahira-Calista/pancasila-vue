<template>
  <div class="flex justify-center items-center">
    <div class="card overflow-hidden h-[31.8rem] w-[62.5rem] rounded-2xl relative">
      <img :src="imageCard" class="absolute object-cover w-full h-full" />
      <div class="flex flex-col ml-[2.1rem] justify-end h-full mb-[2.5rem] absolute">
        <h2 class="font-poppins font-bold text-4xl text-[#ffffff]">{{ titleCard }}</h2>
        <p class="mb-9 font-inter text-base text-[#ffffff] w-96">
          {{ descriptionCard }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageCard: {
      type: String,
      required: true,
    },
    titleCard: {
      type: String,
      required: true,
    },
    descriptionCard: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
