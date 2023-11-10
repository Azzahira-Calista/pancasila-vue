<template>
  <div
    class="w-screen h-[32.5rem] flex flex-col align-middle items-center mt-10 relative"
  >
    <h1 class="font-poppins font-bold text-4xl text-[#6F6E6E] mb-10">Visi & Misi</h1>
    <div class="flex space-x-12" absolute>
      <cardVisiMisiVue
        :tittleCard="data[0].titleCard"
        :descriptionCard="data[0].descriptionCard"
      />
      <cardVisiMisiVue
        :tittleCard="data[1].titleCard"
        :descriptionCard="data[1].descriptionCard"
      />
    </div>
  </div>
</template>

<script>
import CardVisiMisiVue from "./CardVisiMisi.vue";
export default {
  components: {
    CardVisiMisiVue,
  },
  data() {
    return {
      data: [
        {
          titleCard: "Visi",
          descriptionCard:
            "NTT bangkit mewujudkan masyarakat sejahtera dalam bingkai negara kesatuan republik indonesia",
        },
        {
          titleCard: "Misi",
          descriptionCard:
            "1. Mewujudkan Masyarakat Sejahtera, Mandiri, dan Adil 2. Membangun NTT Sebagai Salah Satu Gerbang dan Pusat Pengembangan Pariwisata Nasional (Ring of Beauty) 3. Meningkatkan Ketersediaan dan Kualitas lnfrastruktur untuk Mempercepat Pembangunan 4. Meningkatkan Kualitas Sumber Daya Manusia 5. Mewujudkan Reformasi Birokrasi Pemerintahan untuk Meningkatkan Kualitas Pelayanan Publik.",
        },
      ],
    };
  },
};
</script>

<style></style>
