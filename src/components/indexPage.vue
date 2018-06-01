<template>
  <div class="container">
    <div class="left-fall">
      <div class="fall-block">
        <article class="title-content">
          <header>
            <h2><span>avana</span> A Brand new Agency.</h2>
          </header>
          <p>This is the story of Avana, a minimal Bootstrap template for creative agency.</p>
        </article>
      </div>
    </div>
    <div class="right-fall">

    </div>
  </div>
</template>

<script>
export default {
  name: "indexPage",
  data() {
    return {
      articleList: [{
        name: 'article1',
        url: 'article/normal/1',
        backPic: '/public/imgs/asdf.png'
      }],
      leftList: [],
      rightList: []
    };
  },
  methods: {
    pushIntoFall: function(){

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    margin: 0 auto;
    width: 80%;
    min-width: 1200px;
    text-align: center;
    overflow: auto;
  }
  .left-fall {
    float: left;
    width: 48%;
  }
  .right-fall {
    float: right;
    width: 48%;
  }
  .fall-block {
    box-shadow: 0px 1px 3px rgb(124, 124, 124);
  }
  .title-content {
    padding-left: 41px;
  }
  .title-content header {
    padding-bottom: 19px;
    padding-top: 83px;
  }
  .title-content header h2 {
    font-size: 46px;
    line-height: 53px;
    color: #404040;
    font-weight: 800;
  }
  .title-content header h2 span {
    display: block;
    font-size: 80px;
    color: #fb5353;
    padding-bottom: 15px;
  }
  .title-content p {
    font-size: 20px;
    line-height: 30px;
    color: #454545;
  }
</style>
