<template>
  <div
    class="h-[80rem] bg-[#94A684] relative flex flex-col align-middle items-center"
  >
    <h1 class="font-poppins font-bold text-4xl my-10 text-white">Sejarah</h1>
    <div class="flex space-x-12">
      <CardHistoryVue
        :titleCard="data[0].titleCard"
        :descriptionCard="data[0].descriptionCard"
      />
      <CardHistoryVue
        :titleCard="data[0].titleCard"
        :descriptionCard="data[0].descriptionCard"
      />
    </div>
    <div class="flex space-x-12 mt-12">
      <CardHistoryVue
        :titleCard="data[0].titleCard"
        :descriptionCard="data[0].descriptionCard"
      />
      <CardHistoryVue
        :titleCard="data[0].titleCard"
        :descriptionCard="data[0].descriptionCard"
      />
    </div>
  </div>
</template>

<script>
import CardHistoryVue from "./CardHistory.vue";
export default {
  components: { CardHistoryVue },
  data() {
    return {
      data: [
        {
          titleCard: "Zaman kebangkitan nasional 1900 - 1942",
          descriptionCard:
            "Pada masa sesudah tahun 1900, kerajaan-kerajaan yang ada di Nusa Tenggara Timur pada umumnya telah berubah status menjadi status menjadi Swapraja. Swapraja-swapraja tersebut, 10 berada di Pulau Timor ( Kupang, Amarasi, Fatuleu, Amfoang, Molo, Amanuban, Amanatun, Mio mafo, Biboki, Insana) satu di pulau Rote, satu di pulau Sabu, 15 di pulau Sumba ( Kanatang, Lewa-Kanbera, Takundung, Melolo, Rendi Mangili, Wei jelu, Masukaren, Laura, Waijewa, Kodi-Laula, Membora, Umbu Ratunggay, Ana Kalang, Wanokaka, Lambaja), sembilan di pulau Flores (Ende, Lio, Larantuka, Adonara, Sikka, Angada, Riung, Nage Keo, Manggarai), tujuh di pulau Alor-Pantar (Alor, Baranusa, Pantar, Matahari Naik, Kolana, Batu lolang, Purema). Swapraja-swapraja tersebut terbagi lagi menjadi bagian-bagian yang wilayahnya lebih kecil. Wilayah-wilayah kecil itu disebut Kafetoran-kafetoran.",
        },
        {
          titleCard: "Zaman pendudukan jepang 1942 - 1945",
          descriptionCard:
            "Pada tanggal 8 Maret 1942 komando angkatan perang Belanda di Indonesia menyerah tanpa syarat kepada Jepang. Dengan demikian secara resmi Jepang menggantikan Belanda sebagai pemegang kekuasaan di Indonesia. Untuk Indonesia bagian timur termasuk wilayah Indonesia. Bagian Timur wilayah NTT berada di bawah kekuasaan angkatan laut Jepang (Kaigun) yang berkedudukan di Makasar. Adapun dalam rangka menjalankan pemerintahan di daerah yang diduduki Kaigun menyusun pemerintahannya. Untuk wilayah Indonesia bagian Timur dikepalai oleh Minseifu yang berkedudukan di Makasar. Di bawah Minseifu adalah Minseibu yang untuk daerah Nusa Tenggara Timur termasuk ke dalam Sjoo Sunda Shu (Sunda Kecil) yang berada di bawah pimpinan Minseifu Cokan Yang berkedudukan di Singaraja.",
        },
        {
          titleCard: "Zaman kemerdekaan 1945-1975",
          descriptionCard:
            "Setelah Jepang menyerah, Kepala Pemerintahan Jepang (Ken Kanrikan) di Kupang memutuskan untuk menyerahkan pemerintahan atas Kota Kupang kepada tiga orang yakni Dr.A.Gakeler sebagai walikota, Tom Pello dan I.H.Doko. Namun hal ini tidak berlangsung lama, karena pasukan NICA segera mengambil alih pemerintahan sipil di NTT, dimana susunan pemerintahan dan pejabat-pejabatnya sebagian besar adalah pejabat Belanda sebelum perang dunia II. Dengan demikian NTT menjadi daerah kekuasaan Belanda lagi, sistem pemerintahan sebelum masa perang ditegakkan kembali. Pada tahun 1945 kaum pergerakan secara sembunyi-sembunyi telah mengetahui perjuangan Republik Indonesia melalui radio. Oleh karena itu kaum pegerakan menghidupkan kembali Partai Perserikatan Kebangsaan Timor yang berdiri sejak tahun 1937 dan kemudian berubah menjadi Partai Demokrasi Indonesia (PDI).",
        },
        {
          titleCard: "Zzaman pemerintahan hindia belanda 1945",
          descriptionCard:
            "Wilayah Nusa Tenggara Timur pada waktu itu merupakan wilayah hukum dari keresidenan Timor dan daerah takluknya. Keresidenan Timor dan daerah bagian barat (Timor Indonesia pada waktu itu, Flores, Sumba, Sumbawa serta pulau-pulau kecil sekitarnya seperti Rote, Sabu, Alor, Pantar, Lomblen, Adonara, Solor). Keresidenan Timor dan daerah takluknya berpusat di Kupang, yang memiliki wilayah terdiri dari tiga affdeling (Timor, Flores, Sumba dan Sumbawa), 15 nderafdeeling dan 48 Swapraja. Afdeeling Timor dan pulau-pulau terdiri dari 6 onderafdeeling dengan ibukotanya di Kupang. Afdeeling Flores terdiri dari 5 onder afdeeling dengan ibukotanya di Ende. Yang ketiga adalah Afdeeling Sumbawa dan Sumba dengan ibukota di Raba (Bima). Afdeeling Sumbawa dan Sumba ini tediri dari 4 oder afdeeling.  Keresidenan Timor dan daerah takluknya dipimpin oleh seorang residen, sedangkan afdeeling di pimpin oleh seorang asisten residen. ",
        },
      ],
    };
  },
};
</script>

<style></style>
