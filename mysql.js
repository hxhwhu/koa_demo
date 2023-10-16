const mysql = require('mysql');

let query = (sql, values) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdata'
  });

  return new Promise((resolve, reject) => {
    connection.connect((error) => {
      if (error) {
        reject(error);
        console.log('数据库连接失败');
      } else {
        console.log('数据库连接成功');
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }

          connection.end((err) => {
            if (err) {
              return;
            }
            console.log('关闭数据库连接');
          })
        });
      }
    });
  });
}

module.exports = query;