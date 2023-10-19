<template>
  <img :src="imageSquareCard" class="w-[9.3rem] h-[9.3rem] mr-16" />
</template>

<script>
export default {
  props: {
    imageSquareCard: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
