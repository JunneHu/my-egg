'use strict';
var moment = require('moment');
var crypto = require('crypto');
var md5 = crypto.createHash('md5');
const Service = require('egg').Service;

class UserService extends Service {
    async register(params) {
        // 获取所有用户
        const users = await await this.app.mysql.get('users', { name: params.name });
        if (users) {
            return {
                message: '用户已存在'
            }
        } else {
            params.moment = moment().format('YYYY-MM-DD HH:mm:ss');
            params.password = md5.update(params.password).digest('hex');
            const result = await this.app.mysql.insert('users', params);
            if (result.affectedRows === 1) {
                return {
                    message: '新增成功'
                }
            }
        }

    }
    async login(params) {
        var password = md5.update(params.password).digest('hex');
        const users = await await this.app.mysql.get('users', { name: params.name, password: password });
        if (users) {
            return {
                message: '登录成功'
            }
        } else {
            return {
                message: '用户不存在'
            }
        }
    }
    async addUser(params) {
        // 获取所有用户
        const users = await await this.app.mysql.get('users', { name: params.name });
        if (users) {
            return {
                message: '用户已存在'
            }
        } else {
            params.moment = moment().format('YYYY-MM-DD HH:mm:ss');
            params.password = md5.update(params.password).digest('hex');
            const result = await this.app.mysql.insert('users', params);
            if (result.affectedRows === 1) {
                return {
                    message: '新增成功'
                }
            }
        }
    }
    async updateUser(params) {
        params.password = md5.update(params.password).digest('hex');
        const row = {
            ...params
        }
        const result = await this.app.mysql.update('users', params);
        if (result.affectedRows === 1) {
            return {
                message: '修改成功'
            }
        } else {
            return {
                message: '修改失败'
            }
        }
    }
    async deleteUser(params) {
        const result = await this.app.mysql.delete('users', params);
        if (result.affectedRows === 1) {
            return {
                message: '删除成功'
            }
        } else {
            return {
                message: '删除失败'
            }
        }
    }
    async getAllUser(params) {
        const result = await this.app.mysql.select('users', {
            // where: { status: 'draft', author: ['author1', 'author2'] }, // WHERE 条件
            // columns: ['','author', 'title'], // 要查询的表字段
            orders: [['moment', 'desc']], // 排序方式
            limit: params.row, // 返回数据量
            offset: params.page - 1, // 数据偏移量
        });
        return result
    }
    async getUserById() {

    }
}

module.exports = UserService;
