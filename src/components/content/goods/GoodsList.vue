<template>
  <div class="goods">

    <goods-list-item v-for="item in goods" :goods-item="item"/>

  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  import GridView from "../../common/gridView/GridView";
 export default {
    name: "GoodsList",
    components: {
      GoodsListItem,
    },
   created() {
     console.log('okkkkk');
     console.log(this.goods)
      },
   props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }


</style>
