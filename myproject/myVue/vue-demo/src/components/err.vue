<template>
   <div id="error">
      找不到该页面
   </div>
</template>
<<script>
export default {
    data () {
        return {}
    },
    created() {
        // 当使用一个通配符时，$route.params 内会自动添加一个名为 pathMatch 参数
        // params: {pathMatch: "/error"}
       console.log(this.$route)
    //    可以得到this.$route.params
    },
}
</script>