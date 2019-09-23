<template>
  <div class="custerme container">
    <dilog v-if="cmsg" v-bind:msg="cmsg"></dilog>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="请搜索" v-model="filterInput" />
    <br />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="custmer in filterBy(custmers,filterInput)" :key="custmer.id">
          <td>{{custmer.name}}</td>
          <td>{{custmer.phone}}</td>
          <td>{{custmer.email}}</td>
          <td>
            <router-link class="btn btn-default" :to="'/customer/'+custmer.id">详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import dilog from "./dilog";
export default {
  name: "custerme",
  data() {
    return {
      custmers: [],
      cmsg: "",
      filterInput: ""
    };
  },
  methods: {
    // 模糊搜索功能
    filterBy(custmers, value) {
      return custmers.filter(function(custmer) {
        return custmer.name.match(value);
      });
    },
    fetchCustomers() {
      this.$http.get("http://localhost:3000/user/").then(function(response) {
        this.custmers = response.body;
      });
    }
  },
  created() {
    if (this.$route.query.alert) {
      this.cmsg = this.$route.query.alert;
    }
    this.fetchCustomers();
  },
  updated() {
    this.fetchCustomers();
  },
  components: {
    dilog
  }
};
</script>

<style lang="scss">
  // @import '../assets/public.scss';
</style>
