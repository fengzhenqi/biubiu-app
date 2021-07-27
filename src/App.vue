<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">相册</router-link>
      <span class="img-name">{{$store.state.active.name}}</span>
      <router-link to="/about">编辑</router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app,
.content,
html,
body {
  width: 100%;
  height: 100vh;
  max-width: 700px;
  margin: 0 auto;
}

#nav {
  width: 100vw;
  max-width: 700px;
  box-sizing: border-box;
  padding: 0px 18px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background: rgba(0, 0, 0, .8);
  height: 50px;
  line-height: 50px;
  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    
    &.router-link-exact-active {
      color: #66eeb1;
    }
  }
}
.content {
  padding-top: 50px;
  box-sizing: border-box;
}
.img-name {
  color: #fff;
}
@media screen and (max-width: 400px) {
  
}
</style>
