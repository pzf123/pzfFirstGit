<template>
  <div id="foo"> 
    foo
    <div @click="goUserByParams">跳转到user, 把参数传过去</div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        
      }
    },
    created() {
    },
    methods: {
      goUserByParams () {
        this.$router.push('/user/12')
      }
    }
}
</script>
<style scoped>
</style>