<template>
  <div class="bg-[#E4E4D0] w-screen h-[37.5rem] flex flex-col items-center px-[8.75rem] py-[5.375rem]">
    <h1 class="font-poppins font-bold text-[#626262] text-4xl mb-14">{{ heading }}</h1>
    <div class="flex justify-between w-full  h-full">
        <img :src= "emblemImage" :alt= "heading">
        <div class="bg-white w-[40.37rem] h-[18.75rem] rounded-xl">
            <div class="flex flex-col">
                <PointTextVue v-for="text in emblemData" :key="text.id"
                :pointColor="text.pointColor" 
                :pointText="text.pointText" 
                :descriptionText="text.descriptionText"
                />

            </div>
        </div>
    </div>

  </div>
</template>

<script>
import PointTextVue from './PointText.vue';

export default {
    name: 'AboutCompEmblemAreaVue',
    data () {
        return {
            heading: 'Lambang Daerah',
            emblemImage: require('@/assets/images/logo_ntt.png'),
            emblemData: [
                {
                    id: 1,
                    pointText: 'Komodo',
                    pointColor: '#D78934',
                    descriptionText: 'Melambangkan Kekayaan Alam Khas NTT'
                },
                {
                    id: 2,
                    pointText: 'Tombak',
                    pointColor: '#D78934',
                    descriptionText: 'Melambangkan Keagungan dan Kejayaan'
                },
                {
                    id: 3,
                    pointText: 'Pohon Beringin',
                    pointColor: '#FFFFFF',
                    descriptionText: 'Melambangkan Persatuan Dan Kesatuan'
                },
                {
                    id: 4,
                    pointText: 'Bintang',
                    pointColor: '#FED100',
                    descriptionText: 'Melambangkan Ketuhanan Yang Maha Esa'
                },
                {
                    id: 5,
                    pointText: 'Padi Dan Kapas',
                    pointColor: '#00BB3E',
                    descriptionText: 'Melambangkan Kemakmuran'
                }
            ]
        }
    },
    components: {
        PointTextVue
    }
};
</script>
