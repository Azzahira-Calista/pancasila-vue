<template>
  <div class="bg-black rounded-3xl w-[25rem] h-60 relative overflow-hidden transition duration-300 transform hover:scale-110">
    <img class="w-full h-full object-cover rounded-3xl" :src="imageCard" :alt="title" />
    <div class="absolute bottom-0 left-0 right-0 p-5">
      <p class="font-inter text-2xl font-semibold text-white">{{ titleCard }}</p>
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
  },
};
</script>

<style></style>
