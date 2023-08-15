import Vue from 'vue' //vue패키지에서 가져와서 Vue에 넣어준다
import App from './App.vue' //App.vue 파일에서 가져와서 App으로 쓰겠다..
import router from './router'
import store from './store'

Vue.config.productionTip = false

//전역 component를 쓰고 싶으면 인스턴스 생성전 여기에다가 만들어서 쓰면됨
//Vue.component(tagName, options) 
//그런데, cli 이용해 프로젝트를 생성하면, vue file을 만들어서 그 안에다가 컴퍼넌트를 만드는게 일반적이다.
// 따라서, 옆에 .vue 라고되어 있는것은 보통 single file component다.

//인스턴스 생성
new Vue({
  router,
  store,
  //랜더 펑션임. App안에 들어 있는 template이 #app이라는 id를 가진 테그 안으로 들어가게 됨.(#app -> index.html div에 있음.)
  //== #id가 있는 테그안(index.html div )에 App.vue의 template (그니깐 화면)을 넣어주게 됨.
  render: h => h(App)
}).$mount('#app')
