<template>
  <div class="wrapper">
    <div class="test"></div>
    <div class="search">
      <router-link to="/">
      <div class="search_back iconfont">&#xe679;</div>
      </router-link>
      <div class="search_content">
        <span class="search_content_icon iconfont">&#xe7b3;</span>
        <input class="search_content_input" />
      </div>
    </div>
    <Shop :item="item" />
  </div>
</template>

<script>
import Shop from "../components/Shop.vue";
export default {
  name: "ShopInfo",
  components: { Shop },
  setup() {
    const item = {
      title: "黑心商店1",
      tags: ["月售1万+", "起送零元", "超多好评"],
    };
    return { item };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 0.18rem;
}
.search {
  margin: 0.2rem 0 0.16rem 0;
  display: flex;
  line-height: 0.32rem;
  &_back {
    width: 0.3rem;
    line-height: 0.32rem;
    font-size: 0.2rem;
  }
  &_content {
    display: flex;
    flex: 1;
    line-height: 0.32rem;
    background: #f5f5f5;
    border-radius: 0.16rem;
    &_icon {
      width: 0.44rem;
      text-align: center;
    }
    &_input {
      display: block;
      width: 100%;
      padding-right: 0.2rem;
      border: none;
      outline: none;
      background: none;
      height: 0.32rem;
    }
  }
}
a{
  text-decoration: none;
}
</style>
