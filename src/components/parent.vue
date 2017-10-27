<style scoped>
</style>
<template>
  <div>
    <p>本示例提供了2个子组件 modal和alert提示框。</p>
    <v-modal modalTitle="提示" @onOk="ok" @onCancel="cancel"></v-modal>

    <v-modal modalTitle="提示" @onOk="ok" @onCancel="cancel">
      <template slot="modal-content">
        <div>slot元素作为组件模板之中的内容分发插槽。slot元素自身将被替换。</div>
        <div>最初在slot标签中的任何内容都被视为备用内容。备用内容在子组件的作用域内编译，并且只有在宿主元素为空，且没有要插入的内容时才显示备用内容。</div>
      </template>
      <div slot="modal-footer">
        <el-button type="primary" @click="ok">确认</el-button>
        <el-button @click="reset">重置</el-button>
        <el-button @click="back">返回</el-button>
      </div>
    </v-modal>

    <v-alert
      title="默认info提示"
      :closeable="true"
      :showicon="false"
      @close-click="closeHandle">
    </v-alert>

    <v-alert
      type="warning"
      title="warning提示"
      :closeable="true"
      :showicon="true"
      @close-click="closeHandle">
    </v-alert>

    <v-alert
      type="success"
      title="success提示"
      :showicon="true"
      @close-click="closeHandle">
    </v-alert>

    <v-alert
      type="error"
      title="error提示"
      :showicon="true"
      :closeable="true"
      @close-click="closeHandle">
    </v-alert>

    <v-alert
      styleCustom="background:yellow"
      @close-click="closeHandle">
    </v-alert>
  </div>
</template>

<script type="text/ecmascript-6">
  import vModal  from './modal.vue'
  import vAlert  from './alert.vue'
    export default {
        data() {
            return {
              title:"我是提示"
            }
        },
        components:{
          'v-modal':vModal,
          'v-alert':vAlert
        },
      methods:{
        ok(){
          alert('点击ok!')
        },
        cancel(){
          alert("点击cancel!")
        },
        reset(){
          alert("点击重置!")
        },
        back(){
          alert("点击返回!")
        },
        closeHandle(){
          alert('关闭后做一些事情');
        }

      }

    }
</script>

