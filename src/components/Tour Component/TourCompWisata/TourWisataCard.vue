<!-- <template>
  <div class="rounded-2xl h-72 relative flex flex-col">
    <div class="bg-slate-700 absolute"></div> -->
<!-- <img class="w-full h-[17.25rem] absolute" :src="imageCard" :alt="title"> -->
<!-- <h1 class="text-black text-3xl font-poppins font-normal absolute">
      {{ titleCard }}
    </h1>
  </div>
</template> -->

<!-- <script>
export default {
  props: {
    // imageCard: {
    //   type: String,
    //   required: true,
    // },

    titleCard: {
      type: String,
      required: true,
    },
  },
};
</script> -->

<template>
  <div class="bg-black rounded-3xl w-[25rem] h-60 relative overflow-hidden">
    <img class="w-full h-full object-cover rounded-3xl" :src="imageCard" :alt="title" />
    <div class="absolute bottom-0 left-0 right-0 p-5">
      <p class="font-inter text-2xl font-semibold text-white">
        {{ titleCard }}
      </p>
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
