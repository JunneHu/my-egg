'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
    async login() {
        const { ctx } = this;
        await ctx.render("/login.html");
    }
}

module.exports = IndexController;
