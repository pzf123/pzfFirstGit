import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/foo'
import User from '@/components/user'
import Father from '@/components/father'
import Son from '@/components/Children/son'
// error
import Err from '@/components/Err'

Vue.use(Router)

export default new Router({
  // 创建 router 实例，然后传 `routes` 配置
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/foo',
      name: 'foo',
      component: Foo
    },
    {
      // 动态路径参数，已冒号为开头
      path: '/user/:id',
      name: 'user',
      component: User
    },
    {
      path: '/father',
      name: 'father',
      component: Father,
      children: [
        {path: 'son', component: Son}
      ]
    },
    {
      // 会匹配所有路径
      path: '*',
      component: Err
    },
    {
      // 会匹配以 `/user-` 开头的任意路径
      path: '/user-*'
    }
  ]
})
