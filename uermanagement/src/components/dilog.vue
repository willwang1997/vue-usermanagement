<template>
  <div class="alert alert-warning alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "dilog",
  props: ["msg"],
  data() {
    return {};
  }
};
</script>

<style>
</style>