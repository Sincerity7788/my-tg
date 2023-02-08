<template>
  <div class="home_root">
    <!--  头部  -->
    <div class="home_root_head">
      <HeadBox
        @leftCallback="leftCallback"
        @rightCallback="rightCallback"
        left-icon="icon-menu"
        right-icon="icon-sousu"
        >{{ title }}</HeadBox
      >
    </div>
    <!--  信息列表  -->
    <div class="home_root_infoList">
      <InfoList />
    </div>
    <div class="home_root_add">
      <van-icon name="plus" />
    </div>
  </div>
</template>

<script>
import HeadBox from "./components/Head/Head.vue";
import InfoList from "./components/InfoList";
export default {
  name: "homeView",
  components: {
    HeadBox,
    InfoList,
  },
  data() {
    return {
      title: "正在连接",
    };
  },
  methods: {
    // 左边按钮事件
    leftCallback() {},
    // 右边按钮事件
    rightCallback() {},
  },
};
</script>

<style lang="less" scoped>
.home_root {
  .home_root_head {
    height: 80px;
  }
  .home_root_infoList {
    height: calc(100vh - 80px);
    overflow-y: auto;
  }
  .home_root_add {
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 100px;
    height: 100px;
    background-color: rgb(102, 167, 222);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: #fff;
  }
}
</style>
