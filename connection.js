import { HOST, USER, PASSWORD, DB, dialect } from "./config/db.config";
const Sequelize = require("sequelize");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect,
});

module.exports = sequelize;
