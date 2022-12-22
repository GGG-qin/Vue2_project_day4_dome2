<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr>
    <p>message的值是：{{ msg }}</p>
    <p>user的值是：{{ user }}</p>
    <button @click="msg = 'abc'">修改msg</button>
    <hr>
    <button @click="user.name = 'lisi'">修改user</button>
    <!-- 正常开发中，不建议（不能这样子修改引用值） -->
    <hr>
    <button @click="send">把诗词发送</button>
  </div>
</template>
  
<script>
//导入eventBus.js模块
import bus from './eventBus'

export default {
  props: ['msg', 'user'],
  data() {
    return {
      str: `黑云压城城欲摧，甲光向日金鳞开。角声满天秋色里，塞上燕脂凝夜紫。半卷红旗临易水，霜重鼓寒声不起。报君黄金台上意，提携玉龙为君死。`
    }
  },
  methods: {
    send() {
      //通过eventBus来发送数据
      //bus.$emit('要触发的事件的名字', 要发送的数据)
      bus.$emit('share', this.str)
    }
  }
}
</script>
  
<style lang="less" scoped>
// scoped 属性会自动为组件生成 data-v-编号 属性，同一个组件中，共用同一个data-v
// 好处：可以防止组件中的样式污染
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}

h3 {
  color: aqua;
}

// /deep/ 深覆盖，可以将父组件下的子组件的样式进行修改 
// 当使用第三方组件库的时候，如果要修改第三方组件的默认样式，需要用到 /deep/
/deep/ h4 {
  color: aquamarine;
}
</style>
  