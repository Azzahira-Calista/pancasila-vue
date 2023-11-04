<template>
  <div class=" w-[29.6rem] h-[33.5rem] bg-white rounded-2xl flex flex-col align-middle items-center p-7">
    <h1 class=" font-poppins font-bold text-3xl text-center text-[#6F6E6E]">{{ titleCard }}</h1>
    <p class=" font-inter text-base text-[#6F6E6E] mt-2 text-justify">{{ descriptionCard }}</p>
  </div>
</template>

<script>
export default {
    props: {
        titleCard: {
            type: String,
            require: true,
        },
        descriptionCard: {
            type: String,
            require: true
        }
    }

}
</script>

<style>

</style>