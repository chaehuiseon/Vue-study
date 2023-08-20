<!--컴포넌트 사용하는 방법
1.일단, 만들고(ex: HeeSeonCoder.vue)
2.사용할 곳 script에 등록
  2-1. import~~ 
  2-2. export default{ components: { HeeSeonCoder }}
-->
<template> <!--html code-->
<!--view component는 제일 위에 하나의 테그가 존재해야한다. 따라서, div ~-->
  <div>
    <h1>This is Home page!! HeeSeon Coder</h1>
    <!--views는 페이지 컴포넌트다 보통. 여기 안에서 잘게 쪼개시키면 components에 쪼개서 넣어주면 된다.-->
    <HeeSeonCoder title = 'homepage'/> <!--HeeSeonCoder component 불러와서 그림-->
  </div>
  
</template>
<script> 
import HeeSeonCoder from '@/components/HeeSeonCoder.vue'; //1. 불러옴. @ --> src를 가라킴.

// option들 (data, methods, watch, components 등....)들어감.
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
