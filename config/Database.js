import { Sequelize } from "sequelize";

const db = new Sequelize("backend_app", "root", "Database12345!", {
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306,
});

export default db;
