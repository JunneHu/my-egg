'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async index() {
        var list = [{
            id: 1,
            name: 'Junney'
        }]
        await this.ctx.render('news', {
            list
        })
    }
    async newslist() {
        this.ctx.body = "新闻列表"
    }
    async content() {
        this.ctx.body = "新闻详情"
        var params = this.ctx.params;
        var query = this.ctx.query;
        console.log(query)
    }
}

module.exports = NewsController;
