import Vue from 'vue'
import Vuex from 'vuex'
import { Loading } from 'element-ui';
Vue.use(Vuex);
let loadingInstance
const store = new Vuex.Store({
  state:{
    isLoading: null,
    storageNum:0,
    storageNum2:20,
    storageNum3:30
  },
  getters:{
    getLoading(state){
      return state.isLoading
    },
    getStorageNum(state){
      return state.storageNum
    },
    getStorageNum2(state){
      return state.storageNum2
    },
    getStorageNum3(state){
      return state.storageNum3
    }
  },
  mutations: {
    setLoading: function (state, loading) {
      state.isLoading = loading;
    },
    storageNumDel(state){
      state.storageNum--;
    },
    storageNumAdd(state){
      state.storageNum++;
    },
    storageNumDel2(state,num){
      state.storageNum2 = state.storageNum2-num
    },
    storageNumAdd2(state,num){
      state.storageNum2 = state.storageNum2 + num;
    },
    storageNum3(state,num){
      state.storageNum3 = num;
    },
  },
  actions: {
    loadingShow(state){
     loadingInstance = Loading.service({fullscreen: true});
    },
    loadingHide(state) {
      loadingInstance.close();
    },
    storageNumDel3Action(state){
      var num3 = state.getters.getStorageNum3;
      state.commit('storageNum3',num3-1)
    },
    storageNumAdd3Action(state){
      var num3 = state.getters.getStorageNum3;
      state.commit('storageNum3',num3+1)
    }
  }
});
export default store
