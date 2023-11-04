<template>
  <div
    class=" w-screen px-[8.75rem] py-[4rem] flex flex-col items-center"
  >
    <h1 class="text-[#626262] font-poppins text-4xl font-bold mb-4">
      {{ headerText }}
    </h1>
    <div class="flex flex-col w-full h-full">
      <ContributeCard class="mb-3"
        :title="contributeData[0].title"
        :width="contributeData[0].width"
        :image="contributeData[0].image"
      />
      <div class="flex mb-3">
        <ContributeCard
        :title="contributeData[1].title"
        :width="contributeData[1].width"
        :image="contributeData[1].image"
      />
      <div class="w-4"></div>
        <ContributeCard
        :title="contributeData[2].title"
        :width="contributeData[2].width"
        :image="contributeData[2].image"
      />
      </div>
      <div class="flex">
        <ContributeCard
        :title="contributeData[3].title"
        :width="contributeData[3].width"
        :image="contributeData[3].image"
      />
      <div class="w-4"></div>
        <ContributeCard
        :title="contributeData[4].title"
        :width="contributeData[4].width"
        :image="contributeData[4].image"
      />
      </div>
    </div>
  </div>
</template>

<script>
import ContributeCard from "./ContributeCard.vue";
export default {
  data() {
    return {
      headerText: "Kontribusi NTT Untuk Indonesia",
      contributeData: [
        {
          title: "Perikanan",
          image: require("@/assets/images/test_image.png"),
          width: "w-full",
          },
        {
          title: "Peternakan",
          image: require("@/assets/images/contribute_image_2.png"),
          width: "w-3/5",
          },
        {
          title: "Perhutanan",
          image: require("@/assets/images/contribute_image_3.png"),
          width: "w-2/5",
          },
        {
          title: "Pertanian",
          image: require("@/assets/images/contribute_image_4.png"),
          width: "w-2/5",
          },
        {
          title: "Pariwisata",
          image: require("@/assets/images/contribute_image_5.png"),
          width: "w-3/5",
        },
      ],
    };
  },
  components: {
    ContributeCard,
  },
};
</script>
