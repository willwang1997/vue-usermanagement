<template>
  <div class="home">
    <Nav :navName="oname" @oclick="show"></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "./nav.vue";

export default {
  name: "home",
  components: {
    Nav
  },
  data() {
    return {
      oname: "dd"
    };
  },
  methods: {
    show(val) {
      alert(val);
    }
  }
};
</script>
