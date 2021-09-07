<template>
  <el-row :gutter="24">
    <el-col :xs="8" :sm="12" :md="8" :lg="6" :xl="2"
      ><div class="grid-content bg-purple"></div
    ></el-col>
    <el-col :xs="16" :sm="12" :md="16" :lg="18" :xl="20"
      ><div class="grid-content bg-purple-light"></div
    ></el-col>
  </el-row>
</template>

<script>
export default {
  name: "Home",
  components: {},
  mounted() {
    console.log(this.$t("me"));
  },
};
</script>
<style lang="scss" scoped>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
