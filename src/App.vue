<template>
  <div @scroll="scrollTop">
    <Header/>
    <SideBar/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header';
import SideBar from './components/sidebar';
import './css/normalize.css';

export default {
  name: 'App',
  data: function(){
    return {
      showBackTop: false
    }
  },
  components: {
    Header,
    SideBar
  },
  methods: {
    scrollTop: function(){
      if(document.documentElement.scrollTop >= window.innerHeight){
        console.log(1)
      }
    }
  }
}
</script>

<style>
  .hidden {
    display: none;
  }
</style>
