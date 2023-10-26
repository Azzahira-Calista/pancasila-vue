<template>
  <div
    class="flex w-[33.25rem] px-8 mt-8 items-center justify-between absolute"
  >
    <img src="@/assets/icon/logo_web.svg" alt="Logo Web" />
    <div class="flex justify-between w-[21rem]">
      <router-link to="/">
        <h2 class="text-[#DBEDDA] font-bold font-prompt text-2xl">Home</h2>
      </router-link>

      <router-link to="/about">
        <h2 class="text-[#454545] font-normal font-prompt text-2xl">Tentang</h2>
      </router-link>

      <router-link to="/">
        <h2 class="text-[#454545] font-normal font-prompt text-2xl">Wisata</h2>
      </router-link>

      
    </div>
  </div>
</template>

<script>
// import index from "@/router/index";
export default {
  // setup() {
  //   const router = index();
  //   const goToAbout = () => {
  //     router.push("/about");
  //   };
  //   const goToHome = () => {
  //     router.push("/");
  //   };
  //   return {
  //     goToAbout,
  //     goToHome,
  //   };
  // },
};
</script>
