<template>
  <div>
    <MainMenu />
    <HeroSection />
    <HighLights />
    <UseCases />
    <BenefitsSolutions />
    <PatnersClients />
    <ContactUs />
  </div>
</template>

<script>
  import MainMenu from "./components/MainMenu.vue";
  import HeroSection from "./components/HeroSection.vue";
  import HighLights from "./components/HighLights.vue";
  import UseCases from "./components/UseCases.vue";
  import BenefitsSolutions from "./components/BenefitsSolutions.vue";
  import PatnersClients from "./components/PatnersClients.vue";
  import ContactUs from "./components/ContactUs.vue";

  export default {
    name: "App",
    components: {
      MainMenu,
      HeroSection,
      HighLights,
      UseCases,
      BenefitsSolutions,
      PatnersClients,
      ContactUs,
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
