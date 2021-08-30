import BackTop from "components/content/backTop/BackTop";
export const backTopMixin = {
  components:{
    BackTop
  },
  data: function () {
    return {
      isShowBack: false
    }
  },
  methods: {
    btnClick: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}
