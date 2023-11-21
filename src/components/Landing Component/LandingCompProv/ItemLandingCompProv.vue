<template>
  <div class="flex flex-row mb-8 w-96">
    <img class="w-14 h-14 mr-4 rounded-xl" :src="imageCard" />
    <p class="font-inter font-normal text-base text-[#6F6E6E]">
      {{ descriptionCard }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    imageCard: {
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
