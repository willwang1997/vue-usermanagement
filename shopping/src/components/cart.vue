<template>
  <div>
    <div v-if="list.length" class="shouw">
      <el-col :span="6">商品信息</el-col>
      <el-col :span="3">尺码/颜色</el-col>
      <el-col :span="3">吊牌价</el-col>
      <el-col :span="3">数量</el-col>
      <el-col :span="3">折扣</el-col>
      <el-col :span="3">总金额</el-col>
      <el-col :span="3">操作</el-col>
      <div v-for="item in list" :key="item.id">
        <el-col :span="6">
          <el-checkbox
            v-model="selectList"
            :label="item.id"
            @change="item.checked=!item.checked"
          >{{item.name}}</el-checkbox>
          {{item.name}}
        </el-col>
        <el-col :span="3">{{item.size}}/{{item.color}}}</el-col>
        <el-col :span="3">{{item.price}}</el-col>
        <el-col :span="3" class="cloth-count">
          <span @click="count(item)">-</span>
          {{item.count}}
          <span @click="addcount(item)">+</span>
        </el-col>
        <el-col :span="3">{{item.active}}</el-col>
        <el-col :span="3">{{item.price*item.count}}</el-col>
        <el-col :span="3">
          <button @click="deleCloth(item)">删除</button>
        </el-col>
      </div>
    </div>
    <div v-if="!list.length">没有购物车s商品</div>
    <div class="tatalCount">
      <div class="checkAll">
        <el-checkbox v-model="allCheck" @change="getAllChange"></el-checkbox>全选
      </div>
      <div class="totaPrice">合计：{{totaPric}}</div>
      <div class="clothCount">已选商品：{{totaCount}}</div>
    </div>
  </div>
</template>

<script>
import bus from "@/assets/bus";
export default {
  data() {
    return {
      allCheck: false,
      selectList: [],
      list: [],
      totaPric: "",
      totaCount: ""
    };
  },
  created() {
    this.getlist();
  },
  watch: {
    selectList() {
      this.getTodtalCount();
      if (this.selectList.length == this.list.length) {
        this.allCheck = true;
      }
    },
    list: {
      handler: function() {
        let count = 0;
        this.list.forEach(item => {
          count += parseInt(item.count);
        });
        // bus.$emit("buycarChange", count);
        // vuex同步案例
        // this.$store.commit("buycarChange", count);
        // vuex异步案例
        this.$store.dispatch('asyncChange',count);
      },
      deep: true
    }
  },
  methods: {
    getAllChange(val) {
      let selectList = [];
      if (val) {
        this.list.forEach(item => {
          item.checked = true;
          selectList.push(item.id);
        });
        this.selectList = selectList;
      } else {
        this.list.forEach(item => {
          item.checked = false;
        });
        this.selectList = [];
      }
      this.getTodtalCount();
    },
    getTodtalCount() {
      let totaPric = 0;
      let totaCount = 0;
      this.list.forEach(item => {
        if (item.checked) {
          totaCount = totaCount + parseInt(item.count);
          totaPric =
            totaPric +
            parseFloat(item.price).toFixed(2) *
              item.count *
              parseFloat(item.active);
        }
      });
      this.totaCount = totaCount;
      this.totaPric = totaPric;
    },
    getlist() {
      let arr = [
        {
          name: "款式1",
          count: "2",
          size: "s",
          color: "红色",
          price: "22",
          active: "0.5",
          id: "1"
        },
        {
          name: "款式2",
          count: "2",
          size: "s",
          color: "红色",
          price: "22",
          active: "0.5",
          id: "2"
        },
        {
          name: "款式3",
          count: "2",
          size: "s",
          color: "红色",
          price: "22",
          active: "0.5",
          id: "3"
        },
        {
          name: "款式4",
          count: "2",
          size: "s",
          color: "红色",
          price: "22",
          active: "0.5",
          id: "4"
        }
      ];
      arr.forEach(element => {
        element.checked = false;
      });
      this.list = arr;
    },
    addcount(item) {
      item.count++;
      this.getTodtalCount();
    },
    count(item) {
      if (item.count === 0) return;
      item.count--;
      this.getTodtalCount();
    },
    deleCloth(item) {
      let index = this.list.findIndex(cloth => {
        return cloth.id === item.id;
      });
      this.list.splice(index, 1);
      this.getTodtalCount();
    }
  }
};
</script>

<style scoped lang="less" >
.el-col {
  border-radius: 4px;
}
</style>