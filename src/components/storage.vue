<style scoped>
</style>

<template>
  <div>
      <p>请点击加减号 查看,此处用到vuex状态管理 state mutations 和 action</p>

      <p>第一种写法</p>
      <div>
        <span @click="storageNumDel">-</span>
        <span>{{getStorageNum}}</span>
        <span @click='storageNumAdd'>+</span>
      </div>


    <p>第二种写法</p>
      <div>
        <span @click="del">-</span>
        <span>{{getStorageNum2}}</span>
        <span @click='add'>+</span>
      </div>


    <p>第三种写法</p>
    <div>
      <span @click="del3">-</span>
      <span>{{getStorageNum3}}</span>
      <span @click='add3'>+</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import { mapMutations } from 'vuex'
  export default {
    data() {
      return {
        num:0
      }
    },
//    created(){
//        this.num = this.getStorageNum2;
//    },
    computed:{
      ...mapGetters([
        'getStorageNum',
        'getStorageNum2',
        'getStorageNum3'
      ])
    },
    methods:{
      ...mapMutations([
        'storageNumDel',
        'storageNumAdd'
      ]),
      del(){
        this.$store.commit("storageNumDel2",1);
        console.log(this.getStorageNum2)
      },
      add(){
        this.$store.commit("storageNumAdd2",1)
      },
      del3(){
        this.$store.dispatch('storageNumDel3Action');
      },
      add3(){
        this.$store.dispatch('storageNumAdd3Action');
      }
    }
  }
</script>

