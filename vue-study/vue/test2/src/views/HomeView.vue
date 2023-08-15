<!--컴포넌트 사용하는 방법
1.일단, 만들고(ex: HeeSeonCoder.vue)
2.사용할 곳 script에 등록
  2-1. import~~ 
  2-2. export default{ components: { HeeSeonCoder }}
-->
<template> <!--html code-->
<!--view component는 제일 위에 하나의 테그가 존재해야한다.-->
  <div>
    <h1>This is Home page!! HeeSeon Coder</h1>
    <HeeSeonCoder/> <!--HeeSeonCoder component 불러와서 그림-->
  </div>
  
</template>
<script> // option들 (data, methods, watch, components 등....)
import HeeSeonCoder from '@/components/HeeSeonCoder.vue'; //1. 불러옴
export default{
    //2. 쓰려고 등록
  components:{
      HeeSeonCoder
  },
  data() {
    return {
      name : "HeeSeon Coder"
    }
  }

}
</script>
<!--scoped를 적어줘야 template에 있는 html에만 적용이 됨. 안넣으면 application 전체에 적용이 됨.-->
<style scoped>
h1 {
  color : red;
}

</style>
