<template>
  <div>
    <!-- Container for demo purpose -->
    <div class="container my-24 px-6 mx-auto">
      <!-- Section: Design Block -->
      <section class="mb-32 text-gray-800">
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover"
          style="
            background-position: 50%;
            background-image: url('https://downloader.la/temp/[Downloader.la]-62c2650a5933a.jpg');
            height: 300px;
          "
        ></div>
        <div class="container text-gray-800 px-4 md:px-12">
          <div
            class="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
            style="
              margin-top: -100px;
              background: hsla(0, 0%, 100%, 0.8);
              backdrop-filter: blur(30px);
            "
          >
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 mb-12">
              <div class="mb-12 lg:mb-0 text-center mx-auto">
                <i class="fas fa-paper-plane text-polar-red fa-2xl"></i>
                <h6 class="font-medium mt-2">info@polardot.co.ke</h6>
              </div>
              <div class="mb-12 md:mb-0 text-center mx-auto">
                <i class="fas fa-phone text-polar-red fa-2xl"></i>
                <h6 class="font-medium mt-2">+254 205 233 607</h6>
              </div>
              <div class="mb-12 lg:mb-0 text-center mx-auto">
                <i class="fas fa-location text-polar-red fa-2xl"></i>
                <h6 class="font-medium mt-2">
                  1870 Sliproad off Waiyaki Way Westlands
                </h6>
              </div>
            </div>
            <div class="max-w-[700px] mx-auto">
              <form>
                <div class="form-group mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group mb-6">
                  <input
                    type="email"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email address"
                  />
                </div>
                <div class="form-group mb-6">
                  <textarea
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="w-full px-6 py-2.5 bg-polar-red text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-polar-gray hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->
    </div>
    <!-- Container for demo purpose -->
  </div>
</template>

<script>
  export default {
    name: "ContactUs",
    props: {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
