const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;

console.log(DATABASE_URL);


/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */ /* This states that the object key is a string ('development') 
          with a value of a knex configuration. */


 module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
