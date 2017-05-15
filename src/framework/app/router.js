export default {
    init: function (router) {

        //路由发生时的钩子
        router.beforeEach((to, from, next) => {
            if (to.matched.some(record => record.meta.requiresAuth)) {
                //验证用户，通过则继续，失败则跳入Login界面
                var isAuth=typeof(localStorage['isAuth']) == 'undefined'?false:localStorage['isAuth']

                if (!isAuth) {
                    next({
                        path: '/'
                    })
                } else {
                    next()
                }
            } else {
                next() // 确保一定要调用 next()
            }
        })
    }
}


