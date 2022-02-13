<template>
<div>
  <!-- ar -->
  <div v-if="checkLang() == 'ar'" dir="rtl" class=" container mx-auto md:px-16 lg:px-48 items-center my-2 font-tajawal text-center lg:text-right lg:flex lg:justify-between lg:mt-2">
      <div class="mx-4">
        <div class="flex justify-center items-center lg:hidden "><img src="../assets/images/img-header.png" class="w-2/3 h-80 m-0"/></div>
        <h1 class="text-4xl font-extrabold text-black lg:my-2">{{$t('helloIam')}}</h1>
        <h1 class="text-4xl font-extrabold text-yellow-400 mb-2 lg:my-2">{{$t('sheikhEl')}}</h1>
        <p class="text-base text-gray-600 lg:w-80">{{$t('description')}}</p>
        <button class="bg-gradient-to-b from-yellow-300 to-yellow-500 py-1 px-4 text-white rounded-full my-2 shadow-lg lg:my-3" @click="send()">{{$t('sendM')}}</button>
      </div>
      <div class="hidden justify-center items-center lg:flex lg:w-60 lg:h-48"><img src="../assets/images/img-header.png" class="m-0"/></div>

  </div>

  <!-- en -->
  <div v-if="checkLang() == 'en'" dir="ltr" class=" container mx-auto md:px-16 lg:px-48 items-center my-2 font-tajawal text-left lg:text-right lg:flex lg:justify-between lg:mt-2">
      <div class="mx-4 text-left">
        <div class="flex justify-center items-center lg:hidden"><img src="../assets/images/img-header.png" class="w-2/3 h-80 m-0"/></div>
        <h1 class="text-4xl font-extrabold text-black lg:my-2">{{$t('helloIam')}}</h1>
        <h1 class="text-4xl font-extrabold text-yellow-400 mb-2 lg:my-2">{{$t('sheikhEl')}}</h1>
        <p class="text-base text-gray-600 lg:w-80">{{$t('description')}}</p>
        <button class="bg-gradient-to-b from-yellow-300 to-yellow-500 py-1 px-4 text-white rounded-full my-2 shadow-lg lg:my-3" @click="send()">{{$t('sendM')}}</button>
      </div>
      <div class="hidden justify-center items-center lg:flex lg:w-60 lg:h-48"><img src="../assets/images/img-header.png" class="m-0"/></div>

  </div>
</div>
</template>

<script>
export default {
    name: "Header",
    methods: {
      checkLang(){
      if (process.browser) {
        return localStorage.getItem("lang")
      }
      },
      send(){
        alert("لا تتوفر هذه الخدمة حاليا!")
      }
    }
}
</script>

<style>
.dire{
  direction: rtl;
}
</style>