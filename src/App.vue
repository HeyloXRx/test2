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
      <img class="banner_img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
      <p class="icons_item_desc">超市便利</p>
    </div>
    <div class="icons">
      <div class="icons_item">
        <img class="icons_item_img" src="http://www.dell-lee.com/imgs/vue3/超市.png" />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img class="icons_item_img" src="http://www.dell-lee.com/imgs/vue3/超市.png" />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img class="icons_item_img" src="http://www.dell-lee.com/imgs/vue3/超市.png" />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img class="icons_item_img" src="http://www.dell-lee.com/imgs/vue3/超市.png" />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img class="icons_item_img" src="http://www.dell-lee.com/imgs/vue3/超市.png" />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img class="icons_item_img" src="http://www.dell-lee.com/imgs/vue3/超市.png" />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img class="icons_item_img" src="http://www.dell-lee.com/imgs/vue3/超市.png" />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img class="icons_item_img" src="http://www.dell-lee.com/imgs/vue3/超市.png" />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img class="icons_item_img" src="http://www.dell-lee.com/imgs/vue3/超市.png" />
        <p class="icons_item_desc">超市便利</p>
      </div>
      <div class="icons_item">
        <img class="icons_item_img" src="http://www.dell-lee.com/imgs/vue3/超市.png" />
        <p class="icons_item_desc">超市便利</p>
      </div>
    </div>
    <div class="gap"></div>
    <div class="nearby">
      <h3 class="nearby_title">附近店铺</h3>
      <div class="nearby_item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" class="nearby_item_img" />
        <div class="nearby_content">
          <div class="nearby_content_title">黑心超市</div>
          <div class="nearby_content_tags">
            <span class="nearby_content_tag">月售1万+</span>
            <span class="nearby_content_tag">月售1万+</span>
            <span class="nearby_content_tag">月售1万+</span>
          </div>
          <p class="nearby_content_highlight">vip尊享优惠，还不快快上贡感恩戴德</p>
          <div class="nearby_content_title"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="docker">
    <span class="docker_item docker_item_active">
      <div class="iconfont">&#xe88b;</div>
      <div class="docker_title">首页</div>
    </span>
    <span class="docker_item">
      <div class="iconfont">&#xe600;</div>
      <div class="docker_title">购物车</div>
    </span>
    <span class="docker_item">
      <div class="iconfont">&#xe737;</div>
      <div class="docker_title">订单</div>
    </span>
    <span class="docker_item">
      <div class="iconfont">&#xe75e;</div>
      <div class="docker_title">我的</div>
    </span>
  </div>
</template>

<style lang="scss">
.wrapper {
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
.nearby {
  &_title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    color: #333;
    font-weight: normal;
  }
  &_item {
    display: flex;
    &_img {
      margin-right: 0.16rem;
      padding-top: 0.12rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &_content {
    flex: 1;
    &_title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: #333;
    }
    &_tags {
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #333;
      margin-top: .08rem;
    }
    &_tag {
      margin-right: 0.16rem;
    }
    &_highlight{
      color: red;
    }
  }
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
