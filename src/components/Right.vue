<template>
  <div class="right-container">
    <h3>Right 组件 --- {{ count }}</h3>
    <button @click="add">+1</button>
    <p>{{ msgFromLeft }}</p>
    <hr>
  </div>
</template>
  
<script>
//导入eventBus.js模块
import bus from './eventBus'

export default {
  data() {
    return {
      //子组件自己的数据，将来希望把 count的值传递给父组件
      //子向父传值，使用自定义事件
      count: 0,
      msgFromLeft: '',
    }
  },
  created() {  //在created生命周期函数中，调用 bus.$on() 方法
    //为bus绑定自定义事件
    //bus.$on('要声明的自定义事件的名字', 事件的处理函数)
    bus.$on('share', (val) => {
      console.log('在Right组件中定义的 share 被触发了！', val);
      this.msgFromLeft = val;
      console.log(this.msgFromLeft);
    })
  },

  methods: {
    add() {
      //让子组件的count自增加一
      this.count += 1;
      //把自增结果，传给父组件
      this.$emit('numChange', this.count)
      //&emit('自定义事件的名称',发送的数据)
    }
  }
}
</script>
  
<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
  