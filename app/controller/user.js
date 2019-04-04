// 用户
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    // 注册
    var data = this.ctx.request.body;  // 接受post传值
    var user = await this.service.user.register(data);
    this.ctx.body = user;
  }
  async login() {
    var data = this.ctx.request.body;  // 接受post传值
    var user = await this.service.user.login(data);
    this.ctx.body = user;
  }

  // 新增用户
  async addUser() {
    var data = this.ctx.request.body;  // 接受post传值
    var user = await this.service.user.addUser(data);
    this.ctx.body = user;
  }
  // 修改用户
  async updateUser() {
    var data = this.ctx.request.body;  // 接受post传值
    data.id = 2;
    var user = await this.service.user.updateUser(data);
    this.ctx.body = user;
  }
   // 删除用户
   async deleteUser() {
    var params = this.ctx.params;
    var user = await this.service.user.deleteUser(params);
    this.ctx.body = user;
  }
  async getAllUser() {
    var params = this.ctx.query;
    var user = await this.service.user.getAllUser(params);
    this.ctx.body = user;
  }
}

module.exports = UserController;
