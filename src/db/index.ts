import * as mysql from "mysql";
import { PoolConnection } from "mysql";
import config from "../config";

export const Pool = mysql.createPool({
  connectionLimit: config.db.databaseConnectionLimit,
  host: config.db.host,
  port: Number(config.db.port),
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  timezone: "UTC",
  charset: "utf8mb4", //harry
});

export const Query = (
  query: string,
  values?: Array<
    boolean | string | number | null | number[] | string[] | Date | [][]
  >,
  connection?: PoolConnection
): Promise<any> => {
  if (connection) {
    return new Promise((resolve, reject) => {
      connection.query(query, values, async (err: any, results: any) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      Pool.query(query, values, (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      });
    });
  }
};

export default {};
