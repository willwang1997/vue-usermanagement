<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/home/cart">购物车{{this.$store.state.buycarChange}}</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="/home/about">about</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="#" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>
    <button @click="oclick">nav的按钮</button>
    <div>{{getUserInfo}}</div>
  </div>
</template>

<script>
import bus from "@/assets/bus";
// 映射函数 支持结构赋值。
import { mapGetters } from "vuex";

export default {
  name: "nav",
  props: {
    navName: String
  },
  computed: {
    ...mapGetters(["getUserInfo"])
  },
  created() {
    //   非vuex通信
    // bus.$on("buycarChange", num => {
    //   this.buycart = num;
    // });
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      buycart: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {},
    oclick() {
      this.$emit("oclick", this.activeIndex);
    }
  }
};
</script>

<style>
</style>