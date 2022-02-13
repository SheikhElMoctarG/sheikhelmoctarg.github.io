<template>
<div class="border-t-2 border-b-2">
  <div class="dire container mx-auto font-tajawal bg-white text-center">
      <div>
          <h1 class="font-bold text-2xl">{{$t('skills1')}}</h1>
          <h1 class="font-bold text-2xl my-2 text-yellow-400">{{$t('skills2')}}</h1>
      </div>
      <!-- cards -->
      <div class="flex justify-center">
          <div class="md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
          <div v-for="(card, id) in skillsIn" :key="id" class="w-52 h-72 m-3 bg-gray-50 rounded-md shadow hover:bg-green-500 cursor-pointer">
              <!-- <img :src="card.src"> -->
              <div class="flex justify-center p-2">
                    <img v-if="card.src == 1" src="../assets/images/programming.png" class="flex justify-center">
                    <img v-if="card.src == 2" src="../assets/images/SS.png">
                    <img v-if="card.src == 3" src="../assets/images/RE.png">
                    <img v-if="card.src == 4" src="../assets/images/SE.png">
              </div>
              <h1 class="font-semibold text-2xl p-2">{{card.title}}</h1>
              <p class="font-normal text-sm p-2">{{card.description}}</p>
          </div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    name: "MySkills",
    data(){
        return{
            skillsIn: [
                {title: this.$t('programming.title'), description: this.$t('programming.description'), src: this.$t('programming.src')},
                {title: this.$t('sienceSpace.title'), description: this.$t('sienceSpace.description'), src: this.$t('sienceSpace.src')},
                {title: this.$t('reverseEngeenir.title'), description: this.$t('reverseEngeenir.description'), src: this.$t('reverseEngeenir.src')},
                {title: this.$t('missileEng.title'), description: this.$t('missileEng.description'), src: this.$t('missileEng.src')}
            ]
        }
    },
    created(){
        // console.log(this.skillsIn)
    }
}
</script>

<style>
.dire{
    direction: rtl;
}
</style>