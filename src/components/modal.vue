<style scoped>
  .modal{
    width: 500px;
    float: left;
    margin:0 0 20px 20px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
    box-shadow: 0 3px 9px rgba(0,0,0,.5);

  }
  .modal-header {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
  }
  .modal-content div {
    padding: 20px;
  }
  .modal-footer {
    padding: 15px;
    text-align: right;
    border-top: 1px solid #e5e5e5;
  }
</style>

<template>
  <!--设置的props：-->
  <!--modalTitle 提醒信息 默认为 '这是一个模态框'-->
  <!--定制模板：-->
  <!--slot为modal-content  定制提醒信息模板-->
  <!--slot为modal-footer   定制底部模板-->
  <!--监控子组件状态变化：-->
  <!--事件名onOk        点击确定触发-->
  <!--事件名onCancel   点击取消触发-->
  <!---->
  <div class="modal">
      <div class="modal-header"><h4>{{modalTitle}}</h4></div>
      <div class="modal-content">
        <div>
            <slot name="modal-content">我是默认内容</slot>
        </div>
      </div>
      <div class="modal-footer">
          <slot name="modal-footer">
              <el-button type="primary" @click="okHandle">确认</el-button>
              <el-button @click="cancelHandle">取消</el-button>
          </slot>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {}
        },
        props:{
          modalTitle:{
            type:String,
            default:'这是一个模态框'
          }
        },
        methods:{
          okHandle(){
            this.$emit('onOk');
          },
          cancelHandle(){
            this.$emit('onCancel');
          }
      }
    }

</script>
