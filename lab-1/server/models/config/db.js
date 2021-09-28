import { createConnection } from "mysql";
import { dbConfig } from "./dbConfig.js";

export const sql = createConnection({
	host: dbConfig.HOST,
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	database: dbConfig.DATABASE,
});

sql.connect((err) => {
	if (err) throw err;
	console.log("Connected to remote database!");
});
