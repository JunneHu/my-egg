var moment = require('moment');
// 调用 this.ctx.getHost()
module.exports = {
    // 格式化日期
    formatTime(param) {
        return moment().format('YYYY-MM-DD HH:mm:ss');
    }
}