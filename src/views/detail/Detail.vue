<template>
  <div id="detail">
    <detail-nav-bar class="detailbar" @tabItemClick="tabItemClick"></detail-nav-bar>
    <scroll class="scontent" :pull-up-load="true" :probe-type="3" ref="scroll">
      <detail-swiper :top-imgs="topImgs" @imgload="imgload"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @allLoad="allLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
  </div>
</template>

<script>


import Scroll from "components/common/scroll/Scroll";

import {debounce} from "common/utils";
import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "network/detail";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "components/content/goods/GoodsList";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,

  },
  data() {
    return {
      iid: 0,
      topImgs: [],
      goods: {},
      shop: {},
      paramInfo: {},
      refresh: function () {
      },
      isLoadSwiper: false,
      detailInfo: {},
      commentInfo: {},
      recommends: [],
      themetopY: [0, 0, 0, 0]
    }
  },
  created() {
    // 获取ID
    this.iid = this.$route.query.iid
    // 请求详情数据
    getDetail(this.iid).then(res => {
      let data = res.result
      this.topImgs = data.itemInfo.topImages

      this.detailInfo = data.detailInfo
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    })
    // 请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })
  },
  mounted() {
    this.refresh = this.$refs.scroll.refresh;
    let refresh = debounce(this.refresh, 100)
    this.$bus.$on('detailload', () => {
      refresh()

    })
  },

  methods: {
    imgload() {
      if (!this.isLoadSwiper) {
        this.refresh()
        this.isLoadSwiper = true

      }
    },
    allLoad() {
      console.log('详情加载完毕')
      this.refresh()
      this.themetopY = [0];
      this.themetopY.push(this.$refs.params.$el.offsetTop - 44)
      this.themetopY.push(this.$refs.comment.$el.offsetTop - 44)
      this.themetopY.push(this.$refs.recommend.$el.offsetTop - 44)

      console.log(this.themetopY)

    },
    tabItemClick(index) {

      this.$refs.scroll.scrollTo(0, -this.themetopY[index], 100)
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh

}

.detailbar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.scontent {
  height: calc(100% - 44px);
}
</style>
