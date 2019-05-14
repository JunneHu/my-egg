'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
    async login() {
        const { ctx } = this;
        ctx.body = '首页';
    }
}

module.exports = IndexController;
