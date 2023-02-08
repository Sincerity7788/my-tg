<template>
  <div class="head_root">
    <div class="head_root_left">
      <i @click="$emit('leftCallback')" :class="`iconfont ${leftIcon}`"></i>
    </div>
    <div class="head_root_center">
      <slot>正在连接</slot>
    </div>
    <div class="head_root_right">
      <i @click="$emit('rightCallback')" :class="`iconfont ${rightIcon}`"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadView",
  props: {
    leftIcon: String, // 左边的图标
    rightIcon: String, // 右边的图标
  },
};
</script>

<style lang="less" scoped>
.head_root {
  height: 100%;
  background-color: rgb(82, 124, 162);
  display: flex;
  & > .head_root_left,
  & > .head_root_right {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > i {
      font-size: 38px;
      font-weight: bold;
      color: #fff;
    }
  }
  & > .head_root_right {
    & > i {
      font-size: 34px;
    }
  }
  & > .head_root_center {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
  }
}
</style>
