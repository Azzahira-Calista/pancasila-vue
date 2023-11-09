<template>
  <div class="relative w-[20.5rem] h-[24.25rem]">
    <div
      class="w-72 h-80 bg-[#94A684] rounded-3xl px-7 pt-11 absolute bottom-0"
    >
      <div class="w-full h-full flex flex-col justify-evenly">
        <h2 class="font-poppins font-medium text-2xl text-[#F7FFE5] w-36">
          {{ title }}
        </h2>
        <p class="font-poppins font-normal text-base leading-7 text-white">
          {{ description }}
        </p>
      </div>
    </div>

    <div
      class="w-44 h-44 rounded-full absolute right-0 overflow-auto border-8 border-[#F7FFE5]"
    >
      <img class="object-cover w-full h-full" :src="image" :alt="image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
