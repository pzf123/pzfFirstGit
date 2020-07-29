<template>
  <div id="user"> 
    <div @click="goUserByParams">变化参数</div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        
      }
    },
    beforeRouteUpdate (to, from, next) {
        console.log('拦截路由更新跳转，next()继续执行')
        // react to route changes...
        // don't forget to call next()
        // 拦截路由跳转，next()继续执行
        next()
    },
    created() {
       console.log('created')
    //    可以得到this.$route.params
    },
    methods: {
      goUserByParams () {
        //   原来的组件实例会被复用,生命周期不会再次调用
        if (this.$route.path !== '/user/34') {
            this.$router.push('/user/34')
        } else {
            this.$router.push('/user/12')
        }
      }
    },
    watch: {
      $route(to, from) {
        // 对路由变化作出响应...
        console.log('检测$route对象')
      }
    },
}
</script>
<style scoped>
</style>