'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async index() {

        var list = await this.service.news.getNewsList();  // 调用一定要用 await

        //获取cookies
        var name = this.ctx.cookies.get('name');

        // 获取session
        var userInfo = this.ctx.session.userInfo;

        await this.ctx.render('news', {
            list,
            time: '2017/02/03',
            name,
            name1:userInfo.name
        })

    }
    async newslist() {
        this.ctx.body = "新闻列表"
    }
    async content() {
        this.ctx.body = "新闻详情"
        var params = this.ctx.params;
        var query = this.ctx.query;
        // console.log(query)
    }
    async addNews() {
        await this.ctx.render('addNews')
    }
    async addNewsPost() {
        var data = this.ctx.request.body;  // 接受post传值
        var user = await this.service.news.addUser(data);
        this.ctx.body = data;
    }
}

module.exports = NewsController;
