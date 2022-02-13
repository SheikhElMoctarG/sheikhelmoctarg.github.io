<template>
  <div>
    <nav-bar></nav-bar>
    <header-private></header-private>
    <my-skills></my-skills>
    <my-footer></my-footer>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import HeaderPrivate from '../components/HeaderPrivate.vue';
import MySkills from '../components/mySkills.vue';
import MyFooter from "../components/MyFooter.vue"
export default {
  name: 'IndexPage',
  components: {
    NavBar,
    HeaderPrivate,
    MySkills,
    MyFooter
  },
  data(){
    return{
      title: this.$t('logoName')
    }
  },
  head: {
    title: "الشيخ المختار الشنقيطي",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "مرحبا بك في موقع المهندس الشيخ المختار الشنقيطي، هنا يمكنك الاطلاع على بعض المعلومات عني"
      },
    ]
  } 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap');
body{
  font-family: 'Tajawal', sans-serif;
}
</style>