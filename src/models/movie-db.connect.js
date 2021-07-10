const { Pool } = require("pg");
const movie_db_password = require("./../config/environment/environment.dev");

const pool = new Pool({
  user: "dkhvhkib",
  host: "john.db.elephantsql.com",
  database: "dkhvhkib",
  password: movie_db_password,
  port: 5432,
});

module.exports = pool;
