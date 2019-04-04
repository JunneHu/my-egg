/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554192743546_1017';

  // add your middleware config here
  config.middleware = ['printDate', 'auth']; // 这个名字是中间件文件的名字

  config.printDate = {  // 给printDate 中间件传值
    time: '111'
  }

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    url: 'http://api.mi-mouse.com/',
    mysql: {
      client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: '123456',
        // 数据库名
        database: 'eshow',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    }
  };


  return {
    ...config,
    ...userConfig,
  };
};
