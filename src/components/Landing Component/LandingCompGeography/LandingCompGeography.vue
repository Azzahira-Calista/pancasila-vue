<template>
  <div class="w-screen h-[28.5rem] relative ">
    <img class="w-full h-full object-cover absolute" :src= "backgroundImage"  :alt= "backgroundImageText">
    <div class="absolute w-full h-full bg-black bg-opacity-[0.35]">
        <div class="w-full h-full px-[14.3rem] pt-[2.75rem] pb-[1.875rem] flex flex-col items-center">
            <h1 class="font-poppins font-bold text-4xl text-white mb-5">{{ heading }}</h1>
            <div class="flex flex-col w-full">
                <div class="flex justify-between w-full">

                <CardGeography :titleCard="data[0].titleCard" :descriptionCard="data[0].descriptionCard"/>
                <CardGeography :titleCard="data[1].titleCard" :descriptionCard="data[1].descriptionCard"/>
                <CardGeography :titleCard="data[2].titleCard" :descriptionCard="data[2].descriptionCard"/>

                </div>
            </div>
        </div>
        
    </div>
  </div>
</template>

<script>
import CardGeography from './CardGeography.vue'
export default {
    data() { 
        return {
            backgroundImage: require('@/assets/images/bg_landing_geography.png'),
            backgroundImageText: "Background Landing Geography",
            heading: "Geografis",
            data: [
                {
                    titleCard: 'Perbatasan Darat',
                    descriptionCard: 'Kawasan perbatasan darat Timor bagian barat dengan RDTL secara administrasi meliputi 10 Kecamatan : Kabupaten Kupang : Kecamatan Amfoang Utara; Kabupaten Timor Tengah Utara : Kecamatan Miomafo Barat, Miomafo Timur & Kecamatan Insana Utara; Kabupaten Belu : Kecamatan Malaka Timur, Tasifeto Barat, Tasifeto Timur, Lamaknen,Kecamatan Rehaat & Kecamatan Kobalima;'
                },
                {
                    titleCard: 'Perbatasan Laut',
                    descriptionCard: 'Kawasan perbatasan Laut Wilayah NTT dengan RDTL meliputi 4 Kabupaten, 5 Kecamatan : Kabupaten Kupang : Kecamatan Amfong Utara; Kabupaten Belu : Kecamatan Tasifeto Barat, Kecamatan Kobalima; Kabupaten TTU : Kecamatan Insana Utara; Kabupaten Alor : Kecamatan Alor Barat Daya.'
                },
                {
                    titleCard: 'Gambaran Fisik Garis Perbatasan',
                    descriptionCard: 'Perbatasan Negara di daratan di Timor Barat dengan RDTL meliputi 3 wilayah Kabupaten yaitu : Kabupaten Belu sepanjang 149,9 Km (dari Motaain di Utara sampai Mota Masin di Selatan); Perbatasan pada wilayah enclave Ambenu dengan Kabupaten Kupang sepanjang 15,2 Km; Kabupaten Timor Tengah Utara (TTU) sepanjang 114,9 Km.'
                },
            ]
        }
    },
    components: {
        CardGeography
    }
}
</script>


