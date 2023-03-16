const mysql = require("mysql2")

const pool = mysql.createPool({
    host: process.env.DBSERVER,
    user: process.env.DBUNAME,
    password: process.env.DBPWD,
    database: process.env.DBNAME,
    port: process.env.PORT
});

pool.getConnection( ( err, conn) => {
    if ( err ) {
        console.log(`Error: ${err}`)
    } else {
        console.log("OK DB")
    }
})

module.exports = pool.promise()
