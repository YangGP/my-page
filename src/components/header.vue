<template>
  <header class="header">
    <p>MW</p>
    <div class="menu" :class="{'menu-active': isActive}" @click="menuEvt">
      <div class="menu-ctx" :class="[isActive ? 'menu-ctx-active' : '']">
        <p v-for="(page, key) in menu" :key="key">{{page}}</p>
      </div>
      <i></i>
      <i></i>
      <i></i>
    </div>
  </header>
</template>

<script>
export default {
  data: function(){
    return {
      menu: ['Main Page', 'Article', 'About'],
      isActive: false
    }
  },
  methods: {
    menuEvt: function(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style scoped>
  .header {
    width: 100%;
    padding: 80px 50px 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
  .header>p {
    font-size: 50px;
    margin: 0;
  }
  .menu {
    width: 31px;
    height: 19px;
    position: relative;
  }
  .menu>i {
    display: block;
    position: absolute;
    width: 31px;
    height: 3px;
    top: 5px;
    left: 0;
    background-color: black;
    transition: all .25s linear;
  }
  .menu>i:nth-child(2){
    top: 0px;
  }
  .menu>i:nth-child(3){
    top: 7px;
  }
  .menu>i:nth-child(4){
    top: 14px;
  }
  .menu-active>i:nth-child(2) {
    top: 10px;
    transform: rotate(135deg);
  }
  .menu-active>i:nth-child(3) {
    left: -100%;
    opacity: 0;
  }
  .menu-active>i:nth-child(4) {
    top: 10px;
    transform: rotate(-135deg);
  }
  .menu-ctx {
    position: fixed;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    background-color: rgb(255, 255, 255);
    font-size: 50px;
    transition: all .5s linear;
    text-align: center;
    opacity: 0;
    overflow: hidden;
  }
  .menu-ctx-active {
    background-color: rgba(255, 255, 255, 0.8);
    opacity: 1;
    height: 100%;
  }
  .menu-ctx>p:nth-child(1){
    margin-top: 50px;
  }
</style>
