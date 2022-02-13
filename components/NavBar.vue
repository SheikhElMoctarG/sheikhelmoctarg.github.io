<template>
<div>
  <!-- ar -->
  <div v-if="checkLang() == 'ar'" class="flex container mx-auto md:px-24 my-3 flex-row-reverse font-tajawal justify-between items-center lg:px-52">
      <h1 class="font-bold sm:text-sm mr-2 md:mr-0 md:text-lg text-gray-600">{{$t('logoName')}}</h1>
      <button class="bg-gradient-to-b from-yellow-300 to-yellow-500 py-1 px-4 text-white rounded-full ml-2 md:ml-0 shadow-lg" @click="changeLang()">{{$t('lang')}}</button>
  </div>
  <!-- en -->
  <div v-if="checkLang() == 'en'" class="flex container mx-auto md:px-24 my-3 font-tajawal justify-between items-center lg:px-52">
      <h1 class="font-bold sm:text-sm mr-2 md:mr-0 md:text-lg text-gray-600">{{$t('logoName')}}</h1>
      <button class="bg-gradient-to-b from-yellow-300 to-yellow-500 py-1 px-4 text-white rounded-full ml-2 md:ml-0 shadow-lg" @click="changeLang()">{{$t('lang')}}</button>
  </div>
</div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    changeLang(){
      if (localStorage.getItem("lang") == "ar") {
        localStorage.setItem('lang', 'en')
        this.$i18n.setLocale(localStorage.getItem("lang"))
      } else{
        localStorage.setItem('lang', 'ar')
        this.$i18n.setLocale(localStorage.getItem("lang"))
      }
    },
    checkLang(){
      if (process.browser) {
        return localStorage.getItem("lang")
      }
    }
  },
  created(){
    if (process.browser) {
        if (localStorage.getItem("lang") == null) {
        localStorage.setItem("lang", "ar")
        this.$i18n.setLocale(localStorage.getItem("lang"))
      } else {
        this.$i18n.setLocale(localStorage.getItem("lang"))
      }
    }
    
  }
}
</script>

<style>
</style>