<template>
  <div class="search_root">
    <div class="search_root_head">
      <HeadBox
        @leftCallback="leftCallback"
        @rightCallback="rightCallback"
        left-icon="icon-xitongfanhui"
        :right-icon="kwd && 'icon-close2'"
      >
        <input
          class="search_root_head_input"
          placeholder="搜索"
          v-model="kwd"
          type="text"
        />
      </HeadBox>
    </div>
    <div class="search_root_list">
      <ListItem :showRight="f">两种不同的消息</ListItem>
      <ListItem :showRight="f">
        <div style="color: #f0f">两种不同的消息</div>
      </ListItem>
      <ListItem :showRight="f">两种不同的消息</ListItem>
      <ListItem :showRight="f">两种不同的消息</ListItem>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import HeadBox from "@/views/home/components/Head/Head";
import ListItem from "@/components/ListItem";
export default {
  name: "SearchView",
  components: {
    HeadBox,
    ListItem,
  },
  setup() {
    const router = useRouter();
    const kwd = ref("");
    const f = ref(false);

    // 左边按钮事件
    const leftCallback = () => {
      router.back();
    };
    // 右边按钮事件
    const rightCallback = () => {
      kwd.value = "";
    };

    return {
      kwd,
      leftCallback,
      rightCallback,
      f,
    };
  },
};
</script>

<style lang="less">
.search_root {
  height: 100vh;
  .search_root_head {
    height: 80px;
    .search_root_head_input {
      height: 50px;
      border: none;
      outline: none;
      background-color: rgb(82, 124, 162);
      color: #fff;
      font-size: 30px;
      &::placeholder {
        color: #eee;
        font-size: 26px;
      }
    }
  }
  .search_root_list {
    height: calc(100vh - 80px);
    overflow-y: auto;
    .list_item_root:nth-last-child(1) > .list_item_root_center {
      border: none;
    }
  }
}
</style>
