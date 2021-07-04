const { Pool } = require("pg");

const CONNECTION_STRING = require("./../config/movie-db.config");

const pool = new Pool({ CONNECTION_STRING });

module.exports = pool;
