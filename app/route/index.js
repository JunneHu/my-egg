exports.route = app => {
    const {
      router,
      controller
    } = app;
    router.get('/', controller.index.login); //登录页
}