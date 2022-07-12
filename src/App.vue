<template>
  <div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        gallery: false,
      };
    },
    computed: {},
    mounted() {},
  };
</script>

<style>
  @font-face {
    font-family: "MenuFont";
    src: local("MenuFont"),
      url(./fonts/luxi-sans.regular.ttf) format("truetype");
  }
</style>
