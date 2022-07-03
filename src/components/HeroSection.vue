<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white">
      <div class="mt-10 bg-white pb-12 lg:mt-18 lg:pb-6">
        <div class="relative z-0">
          <div class="absolute inset-0 h-screen bg-white lg:h-5/6"></div>
          <div class="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative lg:grid lg:grid-cols-7">
              <div
                class="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3"
              >
                <div
                  class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg"
                >
                  <div class="flex-1 flex flex-col">
                    <div class="bg-polar-red px-2 py-10">
                      <div>
                        <div class="mt-4 flex items-center justify-center">
                          <span
                            class="px-3 flex items-start text-3xl tracking-tight text-white"
                          >
                            <span class="mt-2 mr-5 text-4xl font-medium">
                              <i class="fas fa-caret-right"></i>
                            </span>
                            <span class="mt-2 font-extrabold">
                              3D/2D Visualization
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="flex-1 flex flex-col justify-between p-6 bg-polar-red sm:p-10 lg:p-6 xl:p-10"
                    >
                      <ul role="list" class="space-y-4">
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check -->
                            <svg
                              class="flex-shrink-0 h-6 w-6 text-gray-300"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base font-medium text-white">
                            High resolution drone maps
                          </p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check -->
                            <svg
                              class="flex-shrink-0 h-6 w-6 text-gray-300"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base font-medium text-white">
                            3D Point clouds
                          </p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check -->
                            <svg
                              class="flex-shrink-0 h-6 w-6 text-gray-300"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base font-medium text-white">
                            Drone images
                          </p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check -->
                            <svg
                              class="flex-shrink-0 h-6 w-6 text-gray-300"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base font-medium text-white">
                            3D Contours
                          </p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check -->
                            <svg
                              class="flex-shrink-0 h-6 w-6 text-gray-300"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base font-medium text-white">
                            3d Models
                          </p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check -->
                            <svg
                              class="flex-shrink-0 h-6 w-6 text-gray-300"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base font-medium text-white">
                            Card Design as Built Data
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4"
              >
                <div class="relative z-10 rounded-lg shadow-xl">
                  <div
                    class="pointer-events-none absolute inset-0 rounded-lg border-4 border-polar-gray"
                    aria-hidden="true"
                  ></div>
                  <div
                    class="absolute inset-x-0 top-0 transform translate-y-px"
                  ></div>
                  <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <div class="mt-4 flex items-center justify-center">
                        <span
                          class="px-3 flex items-start text-3xl tracking-tight text-black"
                        >
                          <span class="mt-2 mr-5 text-4xl font-medium">
                            <i class="fas fa-caret-right"></i>
                          </span>
                          <span class="mt-2 font-extrabold">
                            Data Integration
                          </span>
                        </span>
                      </div>
                      <h3
                        class="my-12 text-center text-3xl font-semibold text-gray-900 sm:-mx-6"
                        id="tier-growth"
                      ></h3>
                    </div>
                  </div>
                  <div
                    class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-white sm:px-10 sm:py-10"
                  >
                    <ul role="list" class="space-y-4">
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <!-- Heroicon name: outline/check -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-black">
                          2D/3D CAD design or as built data.
                        </p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <!-- Heroicon name: outline/check -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-black">
                          GPS/survey equipment data
                        </p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <!-- Heroicon name: outline/check -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-black">
                          High resolution drone maps
                        </p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <!-- Heroicon name: outline/check -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-black">
                          Drone survey products
                        </p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <!-- Heroicon name: outline/check -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-black">
                          Revit 3D models
                        </p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <!-- Heroicon name: outline/check -->
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-black">
                          Lidar Data
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3"
              >
                <div
                  class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg"
                >
                  <div class="flex-1 flex flex-col">
                    <div class="bg-polar-red px-6 py-10">
                      <div>
                        <div class="mt-4 flex items-center justify-center">
                          <span
                            class="px-3 flex items-start text-3xl tracking-tight text-white"
                          >
                            <span class="mt-2 mr-5 text-4xl font-medium">
                              <i class="fas fa-caret-right"></i>
                            </span>
                            <span class="mt-2 font-extrabold">
                              AI Powered Automated Insights & Drone Data
                              Analytics
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="flex-1 flex flex-col justify-between p-6 bg-polar-red sm:p-10 lg:p-6 xl:p-10"
                    >
                      <ul role="list" class="space-y-4">
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check -->
                            <svg
                              class="flex-shrink-0 h-6 w-6 text-gray-300"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base font-medium text-white">
                            Automating Drone Data Analysis Pipelines
                          </p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check -->
                            <svg
                              class="flex-shrink-0 h-6 w-6 text-gray-300"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base font-medium text-white">
                            Automate Point Cloud Classification such as
                            classifying trees and buildings from lidar data.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 sm:px-4 lg:px-4 lg:pt-4">
        <div class="text-center flex justify-center">
          <img class="" src="@/assets/pro.png" alt="" />
          <!-- <p class="text-3xl font-extrabold text-black sm:text-4xl lg:text-4xl">
            Unlock the power location intelligence. <br />
            Geospatial Data Inspired Decision Making.
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeroSection",
    props: {},
  };
</script>

<style scoped></style>
