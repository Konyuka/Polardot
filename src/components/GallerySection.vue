<template>
  <div>
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-baseline sm:justify-between">
          <h2 class="text-4xl font-extrabold tracking-tight text-gray-900">
            Polardot Pro Gallery
          </h2>
        </div>

        <div class="mt-4 container grid grid-cols-1 gap-2 mx-auto">
          <div class="w-full rounded border-polar-red border-4 mb-2">
            <img
              src="@/assets/3.jpg"
              alt="image"
              class="p-4"
              w-full
              h-full
              object-center
              object-cover
            />
          </div>
          <div class="w-full rounded border-polar-red border-4 mb-2">
            <img
              src="@/assets/4.jpg"
              alt="image"
              class="p-4"
              w-full
              h-full
              object-center
              object-cover
            />
          </div>
          <div class="w-full rounded border-polar-red border-4 mb-2">
            <img
              src="@/assets/5.png"
              alt="image"
              class="p-4 w-full h-full object-center object-cover mb-2"
            />
          </div>
          <div class="w-full rounded border-polar-red border-4">
            <img
              src="@/assets/6.jpg"
              alt="image"
              class="p-4 w-full h-full object-center object-cover mb-2"
            />
          </div>
          <div class="w-full rounded border-polar-red border-4">
            <img
              src="@/assets/7.jpg"
              alt="image"
              class="p-4 w-full h-full object-center object-cover mb-2"
            />
          </div>
          <div class="w-full rounded border-polar-red border-4">
            <img
              src="@/assets/8.png"
              alt="image"
              class="p-4 w-full h-full object-center object-cover mb-2"
            />
          </div>
          <div class="w-full rounded border-polar-red border-4">
            <img
              src="@/assets/9.jpg"
              alt="image"
              class="p-4 w-full h-full object-center object-cover mb-2"
            />
          </div>
          <div class="w-full rounded border-polar-red border-4">
            <img
              src="@/assets/10.png"
              alt="image"
              class="p-4 w-full h-full object-center object-cover mb-2"
            />
          </div>
          <div class="w-full rounded border-polar-red border-4">
            <img
              src="@/assets/10.png"
              alt="image"
              class="p-4 w-full h-full object-center object-cover mb-2"
            />
          </div>
          <div class="w-full rounded border-polar-red border-4">
            <img
              src="@/assets/11.png"
              alt="image"
              class="p-4 w-full h-full object-center object-cover mb-2"
            />
          </div>
          <div class="w-full rounded border-polar-red border-4">
            <img
              src="@/assets/12.png"
              alt="image"
              class="p-4 w-full h-full object-center object-cover mb-2"
            />
          </div>
          <div class="w-full rounded border-polar-red border-4 mb-2">
            <img
              src="@/assets/13.jpg"
              alt="image"
              class="p-4 w-full h-full object-center object-cover"
            />
          </div>
          <div class="w-full rounded border-polar-red border-4 mb-2">
            <img
              src="@/assets/14.jpg"
              alt="image"
              class="p-4 w-full h-full object-center object-cover"
            />
          </div>
          <div class="w-full rounded border-polar-red border-4 mb-2">
            <img
              src="@/assets/15.jpg"
              alt="image"
              class="p-4 w-full h-full object-center object-cover"
            />
          </div>
          <div class="w-full rounded border-polar-red border-4 mb-2">
            <img
              src="@/assets/16.jpg"
              alt="image"
              class="p-4 w-full h-full object-center object-cover"
            />
          </div>
          <div class="w-full rounded border-polar-red border-4 mb-2">
            <img
              src="@/assets/17.jpg"
              alt="image"
              class="p-4 w-full h-full object-center object-cover"
            />
          </div>
          <div class="w-full rounded border-polar-red border-4 mb-2">
            <img
              src="@/assets/monitor.jpg"
              alt="image"
              class="p-4 w-full h-full object-center object-cover"
            />
          </div>
          <div class="w-full rounded border-polar-red border-4 mb-2">
            <img
              src="@/assets/vegetation.jpg"
              alt="image"
              class="p-4 w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div class="mt-5 flex justify-center">
          <button
            @click="gallery"
            class="p-3 bg-polar-red hover:bg-polar-gray text-bold text-white"
          >
            Close Gallery
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GallerySection",
    props: {},
    methods: {
      gallery() {
        this.$parent.gallery = false;
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
