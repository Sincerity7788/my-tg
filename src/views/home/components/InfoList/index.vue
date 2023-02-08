<template>
  <div>
    <div v-for="item in 40" :key="item"><ListItem /></div>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
export default {
  name: "InfoView",
  components: {
    ListItem,
  },
};
</script>

<style scoped></style>
