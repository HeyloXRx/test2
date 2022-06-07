<template>
  <div class="shop">
    <img
      src="http://www.dell-lee.com/imgs/vue3/near.png"
      class="shop_img"
    />
    <div class="shop_content">
      <div class="shop_content_title">{{ item.title }}</div>
      <div class="shop_content_tags">
        <span
          class="shop_content_tag"
          v-for="(innerItem, innerIndex) in item.tags"
          :key="innerIndex"
          >{{ innerItem }}</span
        >
      </div>
      <p class="shop_content_highlight">vip尊享优惠，还不快快上贡感恩戴德</p>
      <div class="shop_content_title"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
  props:['item'],
};
</script>

<style lang="scss" scoped>
.shop {
  display: flex;
  padding-top: .12rem;
  &_img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }
  &_content {
    padding-bottom: 0.12rem;
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
      margin-top: 0.08rem;
    }
    &_tag {
      margin-right: 0.16rem;
    }
    &_highlight {
      color: red;
    }
  }
}
</style>
