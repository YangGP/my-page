<template>
  <div @click="scrollTop">
    <Header/>
    <SideBar v-if="setBack" />
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/header";
import SideBar from "./components/sidebar";
import "./css/normalize.css";

export default {
  name: "App",
  data: function() {
    return {
      showBackTop: false
    };
  },
  components: {
    Header,
    SideBar
  },
  computed: {
    setBack() {
      return this.showBackTop = this.$store.state.global.showBackTop;
    }
  },
  methods: {
    scrollTop() {
      console.log(this.$store);
    },
    setScrollBar() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let offsetTop = 50;
      if (scrollTop > offsetTop) {
        if(!this.showBackTop){
          this.$store.dispatch('changeSidebar', true);
        }
      } else {
        this.$store.dispatch('changeSidebar', false);
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.setScrollBar);
  },
  destroyed() {
    window.removeEventListener('scroll', this.setScrollBar);
  }
  
};
</script>

<style>
.hidden {
  display: none;
}
</style>
