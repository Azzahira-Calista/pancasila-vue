<template>
  <div class=" w-[29.6rem] h-80 bg-[#94A684] flex flex-col items-center align-middle rounded-2xl ">
    <h1 class=" font-poppins text-white font-bold text-3xl mt-6">{{ tittleCard }}</h1>
    <p class=" font-inter text-white text-base mx-10 mt-4">{{ descriptionCard }}</p>
  </div>
</template>

<script>
export default {
    props: {
    tittleCard: {
      type: String,
      required: true,
    },

    descriptionCard: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>

</style>