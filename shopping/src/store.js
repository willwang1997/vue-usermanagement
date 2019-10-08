import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    buycarChange: 10,
    userInfo:{
      username:'ww',
      age:'12'
    }
  },
  mutations: {
    buycarChange(state, num) {
      state.buycarChange = num;
    }
  },
  actions: {
    // 定义异步的方法
    asyncChange(content, number) {
      setTimeout(() => {
        content.commit('buycarChange', number);
      }, 1000)
    }
  },
  getters:{
    getUserInfo(state){
      return state.userInfo.username;
    }
  }
});
