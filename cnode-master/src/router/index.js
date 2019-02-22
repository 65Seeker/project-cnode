import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article.vue'
import PostList from '../components/PostList.vue'
import UserInfo from '../components/UserInfo.vue'
import SlideBar from '../components/SlideBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/topic/:id&author=:name',
      name: 'post_content',
      components: {
        main: Article,
        slidebar: SlideBar
      }
    },
    {
      name:'root',
      path: '/',
      components: {
        main: PostList
      }
    },
    {
      name:'user_info',
      path: '/userinfo/:name',
      components: {
        main: UserInfo
      }
    }
  ]
})
