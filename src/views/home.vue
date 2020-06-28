<template>
  <div>
    <!-- 首页轮播图 -->
    <van-swipe :height="170" class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swipeList" :key="index">
        <img :src="item.image_src" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipeList: []
    }
  },
  created() {
    this.getSwipeList();
  },
  methods: {
    async getSwipeList() {
      const { data: res } = await this.$http.get("/home/swiperdata");
      if(res.meta.status != 200) {
        // 请求失败
        return this.$toast.fail(res.meta.msg);
      }
      this.swipeList = res.message
    }
  }
};
</script>

<style lang="less" scoped>
.van-swipe {
  .van-swipe-item {
    img {
      width: 100%;
    }
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>