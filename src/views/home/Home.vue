<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control"
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
    ></tab-control>
    <goods-list :goods="goodsList.pop.list"></goods-list>
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
import {getHomeMultidata,getHomeData} from "network/home";
import NavBar from "components/common/navbar/Navbar";
import HomeSwiper from "./Childcomps/HomeSwiper";
import HomeRecommendView from "./Childcomps/HomeRecommendView";
import FeatureView from "./Childcomps/FeatureView";

import TabControl from "components/content/TabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell':{page: 0, list: []}
      },
    }
  },
  created() {
    this.getMultidata();
    this.getHomeProducts('pop',this.page);
    this.getHomeProducts('new',this.page);
    this.getHomeProducts('sell',this.page);
  },
  methods:{
    // 事件监听
    tabClick(index){

    },



    getMultidata(){
      getHomeMultidata().then(res => {
      this.recommends = res.data.recommend.list;
      this.banners = res.data.banner.list;
    })},
    getHomeProducts(type) {
      let page=this.goodsList[type].page+1
      getHomeData(type,page).then(res=>{
       this.goodsList[type].list.push(...res.data.list)
      })
      this.goodsList[type].page+=1;
    }
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
