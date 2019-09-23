<template>
  <div class="add container">
    <dilog v-if="dilog" :msg="dilog"></dilog>
    <h1 class="page-header">添加用户</h1>
    <form @submit="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label for>name</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name" />
        </div>
        <div class="form-group">
          <label for>phone</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone" />
        </div>
        <div class="form-group">
          <label for>email</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email" />
        </div>
        <div class="form-group">
          <label for>age</label>
          <input type="text" class="form-control" placeholder="age" v-model="customer.age" />
        </div>
        <div class="form-group">
          <label for>graduationSchool</label>
          <input
            type="text"
            class="form-control"
            placeholder="graduationSchool"
            v-model="customer.graduationSchool"
          />
        </div>
        <div class="form-group">
          <label for>profession</label>
          <input
            type="text"
            class="form-control"
            placeholder="profession"
            v-model="customer.profession"
          />
        </div>
        <div class="form-group">
          <label for>profile</label>
          <!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile" /> -->
          <textarea rows="10" class="form-control" v-model="customer.profile"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">add</button>
      </div>
    </form>
  </div>
</template>

<script>
import dilog from './dilog'
export default {
  name: "add",
  data() {
    return {
      customer: {},
      dilog:""
    };
  },
  methods: {
    addCustomer(e) {
      e.preventDefault();
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        this.dilog="请填写完所有信息";
      } else {
        let addCustomers = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email
        };
        this.$http
          .post("http://localhost:3000/user", addCustomers)
          .then(function() {
            this.$router.push({
              path: "/",
              query: { alert: "添加个人信息成功" }
            });
          });
        e.preventDefault();
      }
    }
  },
  components:{
    dilog
  }
};
</script>

<style>
</style>