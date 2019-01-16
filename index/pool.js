const mysql = require('mysql');
//连接mysql数据库的模块
var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'hj',
    connectionLimit: 20
});
//导出连接数据库
module.exports = pool;