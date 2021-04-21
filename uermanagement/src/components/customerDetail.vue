<template>
  <div class="detail container">
    <router-link to="/" class="btn btn-default">返回</router-link>
    <h1 class="page-header">
      {{custmers.name}}
      <span class="pull-right">
        <router-link class="btn btn-primary" :to="'/edit/'+custmers.id">编辑</router-link>
        <button class="btn btn-danger" @click="deleteCustmer(custmers.id)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-search">{{custmers.phone}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-search">{{custmers.email}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "customersDetail",
  data() {
    return {
      custmers: ""
    };
  },
  methods: {
    fetchCustomers(id) {
      this.$http
        .get("http://localhost:3000/user/" + id)
        .then(function(response) {
          // console.log(response);
          this.custmers = response.body;
        });
    },
    deleteCustmer(id) {
      this.$http
        .delete("http://localhost:3000/user/" + id)
        .then(function() {
          this.$router.push({
            path: "/",
            query: { alert: "删除信息成功" }
          });
        });
    }
  },
  created() {
    this.fetchCustomers(this.$route.params.id);
  }
};
</script>

<style>
</style>