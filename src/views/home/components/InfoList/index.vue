<template>
  <div>
    <div v-for="item in 40" :key="item">
      <ListItem>消息内容消息内容消息内容消息内容消息内容消息内容</ListItem>
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
export default {
  name: "InfoView",
  components: {
    ListItem,
  },
  setup() {},
};
</script>

<style scoped></style>
