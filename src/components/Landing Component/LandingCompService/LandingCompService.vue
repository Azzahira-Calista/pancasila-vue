<template>
    <div class="flex justify-between items-center w-screen bg-[#94A684] h-[29.25rem] px-[10rem] py-[3.56rem]">
        <img class="rotate-180  w-8 h-8 mr-28" :src="iconPath" :alt="alt">

        <div class="flex flex-col justify-between items-center h-full">
        <h1 class="font-poppins font-bold text-4xl text-white">{{ heading }}</h1>

        <p class="font-poppins text-base font-normal text-white text-center">{{ description }}</p>

        <div class="w-24 h-24 bg-gray-500 rounded-full">
        </div>

        <p class="font-poppins text-base font-medium text-white ">{{ person }}</p>

        </div>

        <img class=" w-8 h-8 ml-28" :src="iconPath" :alt="alt">
    </div>
    
</template>

<script>
export default {
    data() { 
        return {
            iconPath: require("@/assets/icon/double_arrow.svg"),
            alt: "Double Arrow",
            heading: "Layanan digital",
            description: "Kawasan perbatasan Laut Wilayah NTT dengan RDTL meliputi 4 Kabupaten, 5 Kecamatan : Kabupaten Kupang : Kecamatan Amfong Utara; Kabupaten Belu : Kecamatan Tasifeto Barat, Kecamatan Kobalima; Kabupaten TTU : Kecamatan Insana Utara; Kabupaten Alor : Kecamatan Alor Barat Daya.",
            person: "Nama"
        }
    }
}
</script>