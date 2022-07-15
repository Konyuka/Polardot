<template>
  <DashLayout>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:flex-col sm:align-center">
          <h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">
            Subscription Plans
          </h1>
          <p class="mt-5 text-xl text-gray-500 sm:text-center">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
          <div
            class="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8"
          >
            <button
              type="button"
              class="relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
            >
              Monthly billing
            </button>
            <button
              type="button"
              class="ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
            >
              Yearly billing
            </button>
          </div>
        </div>
        <div
          class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4"
        >
          <div
            class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
          >
            <div class="p-6">
              <h2 class="text-lg leading-6 font-medium text-gray-900">Hobby</h2>
              <p class="mt-4 text-sm text-gray-500">
                All the basics for starting a new business
              </p>
              <p class="mt-8">
                <span class="text-4xl font-extrabold text-gray-900"
                  >KES 12</span
                >
                <span class="text-base font-medium text-gray-500">/mo</span>
              </p>
              <a
                href="#"
                class="mt-8 block w-full bg-polar-red border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >Buy Hobby</a
              >
            </div>
            <div class="pt-6 pb-8 px-6">
              <h3
                class="text-xs font-medium text-gray-900 tracking-wide uppercase"
              >
                What's included
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li class="flex space-x-3">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500"
                    >Potenti felis, in cras at at ligula nunc.</span
                  >
                </li>

                <li class="flex space-x-3">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500"
                    >Orci neque eget pellentesque.</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <div
            class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
          >
            <div class="p-6">
              <h2 class="text-lg leading-6 font-medium text-gray-900">
                Freelancer
              </h2>
              <p class="mt-4 text-sm text-gray-500">
                All the basics for starting a new business
              </p>
              <p class="mt-8">
                <span class="text-4xl font-extrabold text-gray-900"
                  >KES 24</span
                >
                <span class="text-base font-medium text-gray-500">/mo</span>
              </p>
              <a
                href="#"
                class="mt-8 block w-full bg-polar-red border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >Buy Freelancer</a
              >
            </div>
            <div class="pt-6 pb-8 px-6">
              <h3
                class="text-xs font-medium text-gray-900 tracking-wide uppercase"
              >
                What's included
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li class="flex space-x-3">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500"
                    >Potenti felis, in cras at at ligula nunc.
                  </span>
                </li>

                <li class="flex space-x-3">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500"
                    >Orci neque eget pellentesque.</span
                  >
                </li>

                <li class="flex space-x-3">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500"
                    >Donec mauris sit in eu tincidunt etiam.</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <div
            class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
          >
            <div class="p-6">
              <h2 class="text-lg leading-6 font-medium text-gray-900">
                Startup
              </h2>
              <p class="mt-4 text-sm text-gray-500">
                All the basics for starting a new business
              </p>
              <p class="mt-8">
                <span class="text-4xl font-extrabold text-gray-900"
                  >KES 32</span
                >
                <span class="text-base font-medium text-gray-500">/mo</span>
              </p>
              <a
                href="#"
                class="mt-8 block w-full bg-polar-red border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >Buy Startup</a
              >
            </div>
            <div class="pt-6 pb-8 px-6">
              <h3
                class="text-xs font-medium text-gray-900 tracking-wide uppercase"
              >
                What's included
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li class="flex space-x-3">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500"
                    >Potenti felis, in cras at at ligula nunc.
                  </span>
                </li>

                <li class="flex space-x-3">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500"
                    >Orci neque eget pellentesque.</span
                  >
                </li>

                <li class="flex space-x-3">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500"
                    >Donec mauris sit in eu tincidunt etiam.</span
                  >
                </li>

                <li class="flex space-x-3">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500"
                    >Faucibus volutpat magna.</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <div
            class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
          >
            <div class="p-6">
              <h2 class="text-lg leading-6 font-medium text-gray-900">
                Enterprise
              </h2>
              <p class="mt-4 text-sm text-gray-500">
                All the basics for starting a new business
              </p>
              <p class="mt-8">
                <span class="text-4xl font-extrabold text-gray-900"
                  >KES 48</span
                >
                <span class="text-base font-medium text-gray-500">/mo</span>
              </p>
              <a
                href="#"
                class="mt-8 block w-full bg-polar-red border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >Buy Enterprise</a
              >
            </div>
            <div class="pt-6 pb-8 px-6">
              <h3
                class="text-xs font-medium text-gray-900 tracking-wide uppercase"
              >
                What's included
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li class="flex space-x-3">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500"
                    >Potenti felis, in cras at at ligula nunc.
                  </span>
                </li>

                <li class="flex space-x-3">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500"
                    >Orci neque eget pellentesque.</span
                  >
                </li>

                <li class="flex space-x-3">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500"
                    >Donec mauris sit in eu tincidunt etiam.</span
                  >
                </li>

                <li class="flex space-x-3">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500"
                    >Faucibus volutpat magna.</span
                  >
                </li>

                <li class="flex space-x-3">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500"
                    >Id sed tellus in varius quisque.</span
                  >
                </li>

                <li class="flex space-x-3">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500"
                    >Risus egestas faucibus.</span
                  >
                </li>

                <li class="flex space-x-3">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500"
                    >Risus cursus ullamcorper.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal start -->
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
        >
          <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
          <div
            class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6"
          >
            <div>
              <div
                class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
              >
                <!-- Heroicon name: outline/check -->
                <svg
                  class="h-6 w-6 text-green-600"
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
              <div class="mt-3 text-center sm:mt-5">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Payment successful
                </h3>
                <!-- v-slot="{ elements, instance }" -->
                <StripeElements
                  v-if="stripeLoaded"
                  v-slot="{ elements }"
                  ref="elms"
                  :stripe-key="stripeKey"
                  :instance-options="instanceOptions"
                  :elements-options="elementsOptions"
                >
                  <StripeElement
                    ref="card"
                    :elements="elements"
                    :options="cardOptions"
                  />
                </StripeElements>
                <button type="button" @click="pay">Pay</button>
              </div>
            </div>
            <div
              class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"
            >
              <button
                type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
              >
                Deactivate
              </button>
              <button
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal end -->
  </DashLayout>
</template>

<script setup>
  import DashLayout from "@/layouts/DashLayout.vue";
  import { loadStripe } from "@stripe/stripe-js";
  import { ref, onBeforeMount } from "vue";
  import { StripeElements, StripeElement } from "vue-stripe-js";

  // components: {
  //   StripeElements,
  //   StripeElement,
  // },

  // onBeforeMount(() => {
  //     const stripeLoaded = ref(false);
  //     const stripePromise = loadStripe("your_key");
  //     stripePromise.then(() => {
  //       stripeLoaded.value = true;
  //     });
  // });

  const stripeKey = ref("pk_test_wRtooaqqYLA8Wlf3BFOksesO00z1idkYdN"); // test key
  const instanceOptions = ref({
    // https://stripe.com/docs/js/initializing#init_stripe_js-options
  });
  const elementsOptions = ref({
    // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
  });
  const cardOptions = ref({
    // https://stripe.com/docs/stripe.js#element-options
    value: {
      postalCode: "12345",
    },
  });
  const stripeLoaded = ref(false);
  const card = ref();
  const elms = ref();

  function pay() {
    // console.log(card.value);
    let cardDetail = card.value;
    let elmsDetail = elms.value;
    // Get stripe element
    const cardElement = cardDetail.stripeElement;
    // const cardElement = this.card.stripeElement;

    // Access instance methods, e.g. createToken()
    elmsDetail.instance.createToken(cardElement).then((result) => {
      // this.elms.instance.createToken(cardElement).then((result) => {
      // Handle result.error or result.token
      console.log(result);
    });
  }

  onBeforeMount(() => {
    const stripePromise = loadStripe(stripeKey.value);
    stripePromise.then(() => {
      stripeLoaded.value = true;
    });
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
