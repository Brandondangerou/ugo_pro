<template>
  <div>
    <!-- 顶部的导航栏 -->
    <van-nav-bar title="黑马优购" />
    <!-- 内容区域用于展示tabbar的不同的页面 -->
    <router-view></router-view>
    <!-- 底部的tabbar区域 -->
    <van-tabbar v-model="active" active-color="#e91c07" inactive-color="#c2c2c2">
      <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="search">搜索</van-tabbar-item>
      <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: red;
  /deep/ .van-nav-bar__title {
    color: white;
  }
}
</style>