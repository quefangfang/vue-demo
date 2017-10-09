<style scoped>
  .header{
    /*position: fixed;*/
    /*left:230px;*/
    /*top:0;*/
    display: flex;
    align-items: center;
    padding:0 10px;
    height:40px;
    line-height:40px;
    background:#eee;
    color: #666;
  }
  .header>div{
    height:100%;
  }
</style>

<template>
  <div>
      <div class="header">
          <div>欢迎您，<span>{{time}}</span></div>
      </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import Tool from '../utils/common'
    export default {
        data(){
            return {
              time:""
            }
        },
        created(){
          showTime(this);
        },
        components:{
        }
    }
    function showTime(_this){
        setInterval(function(){
            let now = new Date(),
                year = now.getFullYear(),
                month = now.getMonth()+1,
                day = now.getDate(),
                hour = now.getHours(),
                minute = now.getMinutes(),
                seconds = now.getSeconds(),
                fullTime = year+"-"+Tool.addZero(month)+"-"+Tool.addZero(day)+" "+Tool.addZero(hour)+":"+Tool.addZero(minute)+":"+Tool.addZero(seconds);
            _this.time = fullTime;
        },1000)
    }
</script>
