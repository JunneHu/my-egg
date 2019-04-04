'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async getHomeList() {

    var user = await this.app.mysql.get('users', { id: 1 });
    return { user };
  }
}

module.exports = HomeService;
