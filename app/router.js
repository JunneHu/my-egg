'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);


  router.get('/news', controller.news.index);
  router.get('/news/add', controller.news.addNews);

  router.get('/newslist', controller.news.newslist);

  router.get('/newslist/:id', controller.news.content);


  router.post('/news/add', controller.news.addNewsPost);

  // 注册
  router.post('/register', controller.user.register);
  // 登录
  router.post('/login', controller.user.login);
  router.post('/user/addUser', controller.user.addUser);
  router.post('/user/updateUser', controller.user.updateUser);
  router.get('/user/deleteUser/:id', controller.user.deleteUser);
  router.get('/user/getAllUser', controller.user.getAllUser);
};
