<template>
  <div id="app">
    <div class="box-outer">
      <div class="side-bar">
        <el-row>
          <el-col>
            <el-menu :default-active="activeIndex" :router="true" class="el-menu-vertical-demo">
              <el-submenu :index="menu.mid" v-for="menu in menuList" :key="menu.mid" >
                <template slot="title"><i class="el-icon-message"></i>{{menu.title}}</template>
                <el-menu-item  v-for="menuItem in menu.submenu" :key="menuItem.mid" :index="menuItem.path">{{menuItem.title}}</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="main">
        <v-header></v-header>
        <div class="content-box">
          <router-view class="modelView"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Head from './components/header'
  import store from './store/store'
  export default {
    store,
    name: 'app',
    data(){
      return {
        menuList:"",
        activeIndex:"1"
      }
    },
    created(){
      getMemuList(this);
    },
    components:{
      "v-header":Head
    }
  }
  function getMemuList(_this){
    _this.axios('get','static/jsonData/menu.json',{},function(response){
      _this.menuList = response.data;
    });
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  user-select: none;
  cursor: default;
}
.el-table thead th{
  /*text-align:center;*/
}
  .el-dialog--small{
    width:600px;
  }
  .el-form{
    width:300px;
  }
  .box-outer{
    display: flex;
    height:100%;
  }
  .side-bar{
    width:200px;
    position: relative;
    height:100%;
    background:#eef1f6;
  }
  .main{
    flex:1;
  }
  .content-box{
    padding:10px;
  }
</style>
