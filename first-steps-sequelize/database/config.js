module.exports = {
    HOST:"DESKTOP-4A4799A",
    USER:"dev",
    PASSWORD:"dev",
    DB:"curso",
    dialect:"mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}