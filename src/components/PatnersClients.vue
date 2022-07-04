<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-gray-50">
      <div
        class="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8"
      >
        <h2 class="text-3xl font-extrabold text-gray-900">Projects</h2>
        <div class="mt-8">
          <dl class="divide-y divide-gray-200">
            <div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
              <dt class="text-base font-medium text-gray-900 md:col-span-5">
                Nairobi Central Railway Station
              </dt>
              <dd class="mt-2 md:mt-0 md:col-span-7">
                <p class="text-base text-gray-500">
                  3D Drone and lidar based topographical survey of the Nairobi
                  Central Railway Station for Howard Humpreys Engineering &
                  Atkins UK Engineering
                </p>
              </dd>
            </div>

            <div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
              <dt class="text-base font-medium text-gray-900 md:col-span-5">
                Kamanga Airstrip Samburu
              </dt>
              <dd class="mt-2 md:mt-0 md:col-span-7">
                <p class="text-base text-gray-500">
                  Construction progress monitoring and stockpile volume
                  calculations using drones of Kamanga Airstrip, Samburu for
                  Handisi Systems.
                </p>
              </dd>
            </div>

            <div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
              <dt class="text-base font-medium text-gray-900 md:col-span-5">
                Kithimani Machakos County
              </dt>
              <dd class="mt-2 md:mt-0 md:col-span-7">
                <p class="text-base text-gray-500">
                  Dam Topographical Survey and stockpile volume calculations of
                  200 acres, Kithimani, Machakos County for Greenlife Crop
                  Protection Africa.
                </p>
              </dd>
            </div>

            <div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
              <dt class="text-base font-medium text-gray-900 md:col-span-5">
                Syokimau Nairobi
              </dt>
              <dd class="mt-2 md:mt-0 md:col-span-7">
                <p class="text-base text-gray-500">
                  Developing a custom web and android GIS solution to ensure
                  effective fiber network asset management, asset monitoring and
                  maintenance scheduling for Syokinet Ltd.
                </p>
              </dd>
            </div>

            <!-- More questions... -->
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PatnersClients",
    props: {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
