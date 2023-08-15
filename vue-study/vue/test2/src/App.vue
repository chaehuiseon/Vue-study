<!--처음에 로딩되는 파일은 index.html 그 안에서 js로 "컴포넌트를 바꿔치기 하면서" 페이지가 바뀌는 것처럼 보여지는 것.
    따라서, 페이지가 바뀌는 것처럼 보여지지만 결국 single page application 이다.-->
<template>
  <div id="app">
    <nav>
      <!--페이지 왔다갔다-->
      <!-- router 사용 예: router-link to="path(index.js에서 지정한거)"-->
      <!-- router-link가 브라우저에서는 a hrer 로 바뀜 -->
      <!--ex) Home!을 누르면 route-view부분(아래에 있는거)을 HomeView component로 바꿔준다.-->
      <!-- HomeView 가봤더니 HelloWorld 컴포넌트 사용하고 있음. 그럼 router-view엔 HelloWorld 컴포넌트 보여지고 있는거 -->
      <router-link to="/">Home!</router-link>
      <!--ex) About!을 누르면 route-view부분(아래에 있는거)을 AboutView component로 바꿔준다.-->
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
