<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <router-link to="/shopinfo">
    <Shop v-for="item in nearbyList" :key="item._id" :item="item" />
  </router-link>
  </div>
</template>

<script>
import Shop from "../components/Shop.vue";

export default {
  name: "Nearby",
  components: { Shop },
  setup() {
    const nearbyList = [
      { title: "黑心商店1", tags: ["月售1万+", "起送零元", "超多好评"] },
      { title: "黑心商店2", tags: ["月售2万+", "起送零元", "超多好评"] },
      { title: "黑心商店3", tags: ["月售3万+", "起送零元", "超多好评"] },
    ];
    return { nearbyList };
  },
};
</script>

<style lang="scss">
.nearby {
  &_title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    color: #333;
    font-weight: normal;
  }
}
a{
  text-decoration: none;
}
</style>
