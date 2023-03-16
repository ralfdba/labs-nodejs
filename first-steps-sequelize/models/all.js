module.exports = ( conn, Sequelize ) => {
    const users = conn.define("usuarios", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }
    } )

    return users
}