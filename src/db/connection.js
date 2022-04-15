const { Sequelize } = require("sequelize");
require("dotenv").config();

let sequelize = new Sequelize(process.env.MYSQL_URI);

let connection = async () => {
    try {
        await sequelize.authenticate()
    }
    catch (error) {
        console.log(error)
    }
};

connection();

module.exports = sequelize;