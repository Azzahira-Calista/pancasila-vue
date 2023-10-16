<template>
  <div
    class="bg-white w-[17.5rem] h-[18.75rem] rounded-2xl px-4 py-9 flex flex-col items-center justify-evenly"
  >
    <h1 class="font-poppins font-medium text-xl text-[#191825] text-center">
      {{ titleCard }}
    </h1>
    <p
      class="font-inter text-xs font-normal text-[#191825] opacity-75 text-center"
    >
      {{ descriptionCard }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
        titleCard: {
          type: String,
          required: true
        },

        descriptionCard: {
            type: String,
            required: true
        }

},
};
</script>

<style></style>
