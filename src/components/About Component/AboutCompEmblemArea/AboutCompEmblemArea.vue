<template>
  <div class="bg-[#E4E4D0] w-screen h-[37.5rem] flex flex-col items-center px-[8.75rem] py-[5.375rem]">
    <h1 class="font-poppins font-bold text-[#626262] text-4xl mb-14">{{ heading }}</h1>
    <div class="flex justify-between w-full  h-full">
        <img :src= "emblemImage" :alt= "heading">
        <div class="bg-white w-[40.37rem] h-[18.75rem] rounded-xl">
            
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name: 'AboutCompEmblemAreaVue',
    data () {
        return {
            heading: 'Lambang Daerah',
            emblemImage: require('@/assets/images/logo_ntt.png')
        }
    },
};
</script>
