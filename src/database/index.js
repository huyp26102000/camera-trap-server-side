import mysql from "mysql";
import config from "./config.js";

var con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
});

const selectDB = async () => {
  try {
    con.query(`USE ${config.db_name}`, (err, result) => {
      if (err) throw err;
      // console.log(`Selected ${config.frame_tb}`);
    });
  } catch (error) {
    console.log("Select db error:", error);
  }
};

const setupTable = async () => {
  selectDB();
  try {
    con.query(
      `CREATE TABLE IF NOT EXISTS ${config.frame_tb} (id INT NOT NULL AUTO_INCREMENT, path VARCHAR(2048), created_time VARCHAR(255), client_id INT, PRIMARY KEY (id));`,
      (err, result) => {
        if (err) throw err;
        console.log(`Table [${config.frame_tb}] - OK`);
      }
    );
  } catch (error) {
    console.log("create table error:", error);
  }
};

const setup = async () => {
  con.connect((err) => {
    if (err) throw err;
    console.log("Connected database!");
    try {
      con.query(
        `CREATE DATABASE IF NOT EXISTS ${config.db_name};`,
        (err, result) => {
          if (err) throw err;
          console.log(`Database [${config.db_name}] - OK`);
        }
      );
    } catch (error) {
      console.log("Create db error:", error);
    }
    setupTable();
  });
};

const insertFrame = async (path, time, client_id) => {
  selectDB();
  try {
    var sql = `INSERT INTO ${config.frame_tb} (path, created_time, client_id) VALUES ('${path}', '${time}', ${client_id});`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`1 record inserted.`);
    });
  } catch (error) {}
};

export default { setup, insertFrame };
