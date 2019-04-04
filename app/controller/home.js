'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    //设置cookies
    ctx.cookies.set('name', 'junney', {
      maxAge: 1000 * 3600 * 24
    })
    // set()  3个参数， 第一个：命名  第二个：值--默认情况不能设置中文  第三个：失效时间
    // 不设置时间，默认情况浏览器关闭销毁
    // 设置时间参数可以看egg官网 的cookies的 api

    // ctx.redirect('/news')  // 路由跳转

    // 设置session
    ctx.session.userInfo = {
      name:'111'
    }

    var list = await this.service.home.getHomeList();
    console.log(list,'--')

    ctx.body = '首页';
  }

}

module.exports = HomeController;
