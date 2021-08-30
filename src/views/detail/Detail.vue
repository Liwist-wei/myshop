<template>
  <div id="detail">
    <detail-nav-bar class="detailbar" @tabItemClick="tabItemClick" ref="contentnavbar"></detail-nav-bar>
    <scroll class="scontent" :pull-up-load="true" :probe-type="3" ref="scroll" @scroll="contentScroll">
      <detail-swiper :top-imgs="topImgs" @imgload="imgload"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @allLoad="allLoad" @oneload="goodsimgload"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>

    <detail-bottom-bar class="bottom-bar"></detail-bottom-bar>
    <back-top @click.native="btnClick" v-show="isShowBack"></back-top>
  </div>
</template>

<script>


import Scroll from "components/common/scroll/Scroll";


import {backTopMixin} from "common/mixin";
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
import DetailBottomBar from "./childComps/DetailBottomBar";

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
    DetailBottomBar

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
      themetopY: [0, 0, 0, 0],
      currentindex: 0
    }
  },
  mixins:[backTopMixin],
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
    //推荐部分加载完成
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
    goodsimgload() {
      //加载一次刷新一次，这里没有用防抖
      this.refresh()
      this.themetopY = [0];
      this.themetopY.push(this.$refs.params.$el.offsetTop - 44)
      this.themetopY.push(this.$refs.comment.$el.offsetTop - 44)
      this.themetopY.push(this.$refs.recommend.$el.offsetTop - 44)
      this.themetopY.push(Number.MAX_VALUE)
      console.log(this.themetopY)
    },
    allLoad() {
      console.log('详情加载完毕')
      this.refresh()

      console.log(this.themetopY)

    },
    tabItemClick(index) {

      this.$refs.scroll.scrollTo(0, -this.themetopY[index], 100)
    },
    contentScroll(position) {
      this.isShowBack=-position.y>=1000
      for (let i = 0; i < this.themetopY.length; i++) {
        if (this.currentindex != i && -position.y >= this.themetopY[i] && -position.y < this.themetopY[i + 1]) {
          this.currentindex = i
          this.$refs.contentnavbar.currentindex = i
          console.log(i)
        }
      }
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

.bottom-bar {
  height: 49px;
  position: fixed;

  text-align: center;
  background-color: #fff;

}
</style>
