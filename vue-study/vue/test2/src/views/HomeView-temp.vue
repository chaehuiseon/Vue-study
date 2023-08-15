
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--여러 텍스트(사진아래 문구들..)가 있는데.. HelloWorld component를 사용하고 있는거-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
