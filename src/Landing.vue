<template>
  <div>
    <MainMenu />
    <GallerySection v-if="gallery" />
    <HeroSection />
    <HighLights />
    <UseCases />
    <BenefitsSolutions />
    <PricingSection />
    <PatnersClients />
    <ContactUs />
  </div>
</template>

<script>
  import MainMenu from "./components/MainMenu.vue";
  import GallerySection from "./components/GallerySection.vue";
  import HeroSection from "./components/HeroSection.vue";
  import HighLights from "./components/HighLights.vue";
  import UseCases from "./components/UseCases.vue";
  import BenefitsSolutions from "./components/BenefitsSolutions.vue";
  import PricingSection from "./components/PricingSection.vue";
  import PatnersClients from "./components/PatnersClients.vue";
  import ContactUs from "./components/ContactUs.vue";

  export default {
    name: "App",
    data() {
      return {
        gallery: false,
      };
    },
    components: {
      MainMenu,
      GallerySection,
      HeroSection,
      HighLights,
      UseCases,
      BenefitsSolutions,
      PricingSection,
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
