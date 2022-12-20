<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <h2>CFSon---{{ countFromSon }}</h2>
    <hr />
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- 3.以标签形式，使用注册好的组件 -->
      <Left :msg="message" :user="userInfo"></Left>
      <Right @numChange="getNumCount"></Right>
    </div>
  </div>
</template>

<script>
//1.导入需要使用的.vue组件
// import xxx from '@/路径'

import Left from '@/components/Left.vue';
import Right from '@/components/Right.vue';


export default {
  //2.使用components注册组件  //注册的是私有子组件
  components: {
    Left,
    Right,
  },

  data() {
    return {
      message: '测试message！！',
      userInfo: { name: 'zs', age: 18 },
      //定义一个数据 countFromSon 来接收子组件传递过来的收据
      countFromSon: 0,
    }
  },
  
  methods: {
    getNumCount(val) {
      console.log('getNumCount事件被触发！', val);
      this.countFromSon = val;
    }
  },

}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}

.box {
  display: flex;
}
</style>
