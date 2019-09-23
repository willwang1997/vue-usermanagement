<template>
  <div class="edit container">
    <dilog v-if="dilog" :msg="dilog"></dilog>
    <h1 class="page-header">编辑用户</h1>
    <form @submit="editCustomer">
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
        <button type="submit" class="btn btn-primary">edit</button>
      </div>
    </form>
  </div>
</template>

<script>
import dilog from './dilog'
export default {
  name: "edit",
  data() {
    return {
      customer: {},
      dilog:""
    };
  },
  methods: {
    fetchCustmer(id) {
      this.$http
        .get("http://localhost:3000/user/" + id)
        .then(function(response) {
          this.customer = response.body;
        });
    },
    editCustomer(e) {
      e.preventDefault();
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        this.dilog="请填写完所有信息";
      } else {
        let editCustomers = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email
        };
        this.$http
          .put(
            "http://localhost:3000/user/" + this.$route.params.id,
            editCustomers
          )
          .then(function() {
            this.$router.push({
              path: "/",
              query: { alert: "编辑个人信息成功" }
            });
          });
        e.preventDefault();
      }
    }
  },
  created() {
    this.fetchCustmer(this.$route.params.id);
  },
   components:{
    dilog
  }
};
</script>

<style>
</style>