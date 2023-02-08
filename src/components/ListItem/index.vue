<template>
  <div class="list_item_root">
    <div class="list_item_root_left">
      <van-image
        round
        width="100%"
        height="100%"
        fit="cover"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
    </div>
    <div class="list_item_root_center">
      <div class="list_item_root_center_left">
        <div class="list_item_root_center_left_user">用户名</div>
        <div class="list_item_root_center_left_message">
          <slot></slot>
        </div>
      </div>
      <div class="list_item_root_center_right" v-if="showRight">
        <div>12月12日</div>
        <div class="list_item_root_center_right_info">1245</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    showRight: {
      type: Boolean,
      default: true,
    },
  },
  setup() {},
};
</script>

<style lang="less" scoped>
.list_item_root {
  height: 100px;
  display: flex;
  & > .list_item_root_left {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    padding: 10px;
  }
  & > .list_item_root_center {
    display: flex;
    flex: 1;
    box-sizing: border-box;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    & .list_item_root_center_left {
      flex: 1;
      width: 0;
      .list_item_root_center_left_user {
        font-size: 30px;
        font-weight: bold;
      }
      .list_item_root_center_left_message {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    & .list_item_root_center_right {
      width: 160px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding-right: 10px;
      color: rgb(150, 150, 150);
      .list_item_root_center_right_info {
        background-color: rgb(200, 200, 200);
        height: 36px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        border-radius: 40px;
        font-size: 12px;
        color: #fff;
      }
    }
  }
}
</style>
