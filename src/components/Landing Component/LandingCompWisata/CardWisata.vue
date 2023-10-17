<template>
  <div
    class="flex items-center justify-center bg-white w-[28.1rem] h-[11.2] rounded-2xl px-8 py-12 flex-row"
  >
    <img
      class="rounded-full w-24 h-24 mr-8"
      src="@/assets/images/bg_landing_geography.png"
      alt="img"
    />
    <p class="font-inter font-normal text-base text-[#6F6E6E] mr-[1.5]">
      {{ descriptionCard }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    imageCard: {
      type: String,
    },

    descriptionCard: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
