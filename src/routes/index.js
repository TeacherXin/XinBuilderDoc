import MainDoc from '../views/MainDoc.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import XinBuilder from '../views/XinBuilder/XinBuilder.vue'
import createPage from '../views/XinBuilder/components/CreatePage.vue'

const routes = [
  { path: '/MainDoc', component: MainDoc },
  { 
    path: '/XinBuilder',
    component: XinBuilder,
    children: [
      {
        path: 'createPage',
        component: createPage
      }
    ]
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export default createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})