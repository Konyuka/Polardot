<template>
  <div>
    <MainMenu />
    <HeroSection />
  </div>
</template>

<script>
  import MainMenu from "./components/MainMenu.vue";
  import HeroSection from "./components/HeroSection.vue";

  export default {
    name: "App",
    components: {
      MainMenu,
      HeroSection,
    },
  };
</script>

<style>
  @font-face {
    font-family: "MenuFont";
    src: local("MenuFont"),
      url(./fonts/luxi-sans.regular.ttf) format("truetype");
  }
</style>
