<template>
  <div id="detail">
    <detail-nav-bar class="detailbar"></detail-nav-bar>
    <scroll class="scontent" :pull-up-load="true" :probe-type="3" ref="scroll">
      <detail-swiper :top-imgs="topImgs" @imgload="imgload"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @allLoad="allLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    </scroll>
  </div>
</template>

<script>


import Scroll from "components/common/scroll/Scroll";

import {getDetail, Goods, Shop,GoodsParam} from "network/detail";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
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
    DetailCommentInfo

  },
  data() {
    return {
      iid: 0,
      topImgs: [],
      goods: {},
      shop: {},
      paramInfo:{},
      refresh: function () {
      },
      isLoadSwiper: false,
      detailInfo: {},
      commentInfo:{}
    }
  },
  created() {
    this.iid = this.$route.query.iid
    getDetail(this.iid).then(res => {
      let data = res.result
      this.topImgs = data.itemInfo.topImages

      this.detailInfo = data.detailInfo
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    })
  },
  mounted() {
    this.refresh = this.$refs.scroll.refresh;

  }
  ,
  methods: {
    imgload() {
      if (!this.isLoadSwiper) {
        console.log(this.refresh)
        this.refresh()

        this.isLoadSwiper = true
      }
    },
    allLoad() {
      this.refresh()
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
