<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>
    <ul>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
      <li>利弊</li>
    </ul>

  </div>
</template>

<script>
import {getHomeMultidata} from "network/home";
import NavBar from "components/common/navbar/Navbar";
import HomeSwiper from "./Childcomps/HomeSwiper";
import HomeRecommendView from "./Childcomps/HomeRecommendView";
import FeatureView from "./Childcomps/FeatureView";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.recommends = res.data.recommend.list;
      this.banners = res.data.banner.list;
    })
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9;
}
#home{
  padding-top: 44px;
}

</style>
