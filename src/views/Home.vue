/* eslint-disable quotes */ /* eslint-disable vue/multi-word-component-names */
<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position_icon">&#xe8ff;</span>
      合肥工业大学
      <span class="iconfont position_notice">&#xe8c0;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe7b3;</span>
      黑心商店优惠商品
    </div>
    <div class="banner">
      <img
        class="banner_img"
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      />
      <p class="icons_item_desc">超市便利</p>
    </div>
    <div class="icons">
      <div class="icons_item">
        <img
          class="icons_item_img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img
          class="icons_item_img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img
          class="icons_item_img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img
          class="icons_item_img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img
          class="icons_item_img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img
          class="icons_item_img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img
          class="icons_item_img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img
          class="icons_item_img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img
          class="icons_item_img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img
          class="icons_item_img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons_item_desc">超市便利</p>
      </div>
    </div>
    <div class="gap"></div>
    <Nearby />
  </div>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :key="item.icon"
      :class="{ docker_item: true, docker_item_active: index === 0 }"
      class="docker_item"
    >
      <div class="iconfont" v-html="item.icon" />
      <div class="docker_title">{{ item.text }}</div>
    </div>
  </div>
</template>
<script>
import Nearby from './Nearby.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components:{Nearby},
  setup() {
    const dockerList = [
      { icon: "&#xe88b;", text: "首页" },
      { icon: "&#xe600;", text: "购物车" },
      { icon: "&#xe737;", text: "订单" },
      { icon: "&#xe75e;", text: "我的" },
    ];
    const nearbyList = [
      { title: "黑心商店1", tags: ["月售1万+", "起送零元", "超多好评"] },
      { title: "黑心商店2", tags: ["月售2万+", "起送零元", "超多好评"] },
      { title: "黑心商店3", tags: ["月售3万+", "起送零元", "超多好评"] },
    ];
    return { dockerList, nearbyList };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
}
.position {
  padding: 0.16rem 0;
  font-size: 0.16rem;
  margin-right: 0.24rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  .position_icon {
    font-size: 0.2rem;
  }
  .position_notice {
    font-size: 0.2rem;
    position: absolute;
    right: 0.1rem;
  }
}
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  font-size: 0.14rem;
  border-radius: 0.16rem;
  .iconfont {
    font-size: 0.2rem;
    display: inline-block;
    padding: 0 0.12rem 0 0.16rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &_img {
    width: 100%;
  }
}
.icons {
  display: flex;
  margin-top: 0.16rem;
  flex-wrap: wrap;
  &_item {
    width: 20%;
    &_img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &_desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: #333;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: 0.16rem;
  background: #f1f1f1;
}

.docker {
  display: flex;
  position: absolute;
  box-sizing: border-box;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  &_item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &_active {
      color: rgb(7, 180, 248);
    }
  }
}
</style>
