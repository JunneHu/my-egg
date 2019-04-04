'use strict';
var moment = require('moment');
var crypto = require('crypto');
var md5 = crypto.createHash('md5');

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    // curl
    var api = this.config.url + 'app/login/user_login?phone=18186146970&password=123456';
    var response = await this.ctx.curl(api);
    var data = JSON.parse(response.data);
    return data;
  }
  async addUser(params) {
    params.moment = moment().format('YYYY-MM-DD HH:mm:ss');
    params.password = md5.update(params.password).digest('hex');
    const result = await this.app.mysql.insert('users', params);
  }
}

module.exports = NewsService;
