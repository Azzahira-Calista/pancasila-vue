<template>
  <div class=" w-screen flex flex-col justify-center items-center px-36 py-24 ">
    <h1 class="font-poppins font-bold text-[#626262] text-4xl mb-4">{{ title }}</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
    <div v-for="(card, index) in cardData" :key="index">
      <CoulinerCard :image="card.image" :title="card.title" :description="card.description"/>
    </div>
  </div>
  </div>
</template>

<script>
import CoulinerCard from "./CoulinerCard.vue";
export default {
    data() { 
        return {
            title: "Makanan Asal NTT",
            cardData: [
                {
                    image: require("@/assets/images/couliner_bubur_manado.png"),
                    title: "Bubur Manado",
                    description: "Bubur Manado adalah bubur pedas yang terbuat dari sagu dan bumbu pedas. Ini biasanya disajikan dengan ikan atau daging."
                },
                {
                    image: require("@/assets/images/couliner_tumis_kangkung.png"),
                    title: "Tumis Kangkung",
                    description: "Kangkung adalah sayuran yang sering dimasak dengan berbagai bumbu tradisional. Tumis kangkung adalah hidangan sayuran yang populer di NTT."
                },
                {
                    image: require("@/assets/images/couliner_ikan_kuah_asam.png"),
                    title: "Ikan Kuah Asam",
                    description: "Ikan kuah asam adalah hidangan ikan yang dimasak dengan bumbu asam. Hidangan ini memiliki rasa segar dan asam yang khas."
                },
                {
                    image: require("@/assets/images/couliner_sate_ulat_sagu.png"),
                    title: "Sate Ulat Sagu",
                    description: "Makanan ini unik karena terbuat dari ulat sagu yang dibakar dan disajikan dengan bumbu kacang."
                },
                {
                    image: require("@/assets/images/couliner_sagu_lempeng.png"),
                    title: "Sagu Lempeng",
                    description: "Sagu adalah bahan makanan pokok di NTT. Sagu lempeng adalah kue tipis yang terbuat dari sagu. Kue ini sering disajikan dengan ikan atau daging."
                },
                {
                    image: require("@/assets/images/couliner_sate_kuda.png"),
                    title: "Sate Kuda",
                    description: "Di beberapa daerah di NTT, sate kuda adalah hidangan yang populer. Potongan daging kuda dibakar dan disajikan dengan bumbu kacang."
                },
                {
                    image: require("@/assets/images/couliner_mie_titi.png"),
                    title: "Mie Titi",
                    description: "Mie Titi adalah hidangan mie khas NTT yang biasanya disajikan dengan irisan daging sapi, udang, dan bumbu pedas."
                },
                {
                    image: require("@/assets/images/couliner_ikan_rica.png"),
                    title: "Ikan Rica-Rica",
                    description: "Ikan rica-rica adalah hidangan ikan yang dimasak dengan bumbu pedas khas NTT. Rica-rica adalah campuran bumbu yang memberikan rasa pedas dan segar."
                },
                {
                    image: require("@/assets/images/couliner_belut_goreng.png"),
                    title: "Belut Goreng",
                    description: "Belut adalah hidangan yang populer di beberapa daerah di NTT. Belut sering digoreng hingga kering dan garing, lalu disajikan dengan sambal atau saus pedas."
                },
                
            ]
        }
    },
    components: {
        CoulinerCard
    }
}
</script>
