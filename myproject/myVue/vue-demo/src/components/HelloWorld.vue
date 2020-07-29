<template>
  <div class="hello">
     <router-link to="/foo">Go to foo</router-link>
    <div @click="goError">go error page</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goError () {
      this.$router.push('/error')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
