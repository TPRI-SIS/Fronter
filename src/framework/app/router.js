export default {
    init: function (router) {

 
        router.beforeEach((to, from, next) => {
            if (to.matched.some(record => record.meta.requiresAuth)) {
                // this route requires auth, check if logged in
                // if not, redirect to login page.

                var isAuth=typeof(localStorage['isAuth']) == 'undefined'?false:localStorage['isAuth']

           
                alert(isAuth)

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


