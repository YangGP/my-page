<template>
  <aside class="aside">
    <ul>
      <li v-for="(menu,key) in sideMenu" :key="key"  @click="sideEvt(menu)">
        <font-awesome-icon :icon="['fas', menu]"/>
      </li>
    </ul>
  </aside>
</template>

<script>

export default {
  data: function(){
    return {
      sideMenu: ['arrow-left', 'arrow-up']
    }
  },
  methods: {
    sideEvt: function(key){
      console.log(key);
    }
  }
}
</script>

<style scoped>
  .aside {
    width: 50px;
    position: fixed;
    top: 300px;
    right: 100px;
    background-color: rgb(186, 114, 253);
  }
  .aside ul {
    padding: 0;
    margin: 5px 0;
  }
  .aside li {
    list-style: none;
    margin-bottom: 5px;
    background-color: white;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
</style>
