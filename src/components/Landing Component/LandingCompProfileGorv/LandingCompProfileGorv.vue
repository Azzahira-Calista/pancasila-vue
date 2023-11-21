<template>
  <div
    class="w-screen h-[32.25rem] px-[10.3rem] pt-[2rem] pb-[3.56rem] bg-white"
  >
    <div class="flex w-full">
      <div class="flex flex-col mr-10">
        <h1 class="font-poppins font-bold text-4xl text-[#454545] mb-7">
          {{ heading }}
        </h1>
        <div class="w-[18.5rem] h-[21.12rem] bg-[#db6666] flex items-center justify-center">
  <img :src="imgs" alt="" class="w-full h-full object-cover" />
</div>

      </div>

      <div class="flex flex-col">
        <h1 class="font-inter font-bold text-3xl text-[#626262] mb-7">
          {{ subheading }}
        </h1>
        <div class="flex flex-col w-[38.18rem]">
          <p class="font-inter font-normal text-base text-[#6F6E6E]">
            {{ description1 }}
          </p>

          <br />

          <p class="font-inter font-normal text-base text-[#6F6E6E]">
            {{ description2 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: "Profile Gurbernur",
      subheading: "Dr. Viktor Bungtilu Laiskodat, S.H., M.Si. (17 Februari 1965)",
      description1:
        "Viktor Bungtilu Laiskodat dikenal sebagai politikus senior dari Partai Nasional Demokrat yang pada 5 September 2018 dilantik sebagai Gubernur Nusa Tenggara Timur bersama wakilnya Josef Nae Soi untuk periode 2018-2023.",
      description2: "Pria yang lahir di Oenesu, Kupang Barat pada 17 Februari 1965 ini menghabiskan masa kecil hingga remaja di Kupang. Setelah lulus dari Sekolah Tinggi Ilmu Hukum, Viktor berprofesi sebagai seorang konsultan hukum dan pernah mendirikan lembaga bantuan hukum dengan namanya sendiri, Viktor B. Laiskodat Law Firm.",
      imgs: require("@/assets/images/gubernur.png"),
    };
  },
};
</script>
