<template>
  <div class="home_root">
    <!--  头部  -->
    <div class="home_root_head">
      <HeadBox
        @leftCallback="leftCallback"
        @rightCallback="rightCallback"
        left-icon="icon-menu"
        right-icon="icon-sousu"
      >
        {{ title }}
      </HeadBox>
    </div>
    <!--  信息列表  -->
    <div class="home_root_infoList">
      <InfoList />
    </div>
    <div class="home_root_add">
      <van-icon name="plus" />
    </div>
    <van-overlay :show="showSidebar" @click="openOfClose(false)">
      <div class="home_root_wrapper">
        <div class="home_root_wrapper_menu" @click.stop>菜单项</div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import HeadBox from "./components/Head/Head.vue";
import InfoList from "./components/InfoList";
export default {
  name: "homeView",
  components: {
    HeadBox,
    InfoList,
  },
  setup() {
    // 路由实例
    const router = useRouter();
    // 页面标题
    let title = ref("正在连接");
    // 是否显示打开侧边栏
    const showSidebar = ref(false);

    // 打开/关闭侧边栏
    const openOfClose = (val) => {
      showSidebar.value = val;
    };
    // 左边按钮事件
    const leftCallback = () => {
      openOfClose(true);
    };
    // 右边按钮事件
    const rightCallback = () => {
      router.push("/search");
    };

    return {
      title,
      showSidebar,
      openOfClose,
      leftCallback,
      rightCallback,
    };
  },
};
</script>

<style lang="less">
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
  .home_root_wrapper {
    height: 100vh;
    .home_root_wrapper_menu {
      height: 100vh;
      width: 50vw;
      background-color: #fff;
    }
  }
}
</style>
