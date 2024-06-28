import dotenv from "dotenv";
import { TDbConfig } from "../types/general";
dotenv.config();

const { NODE_ENV, DB_USER, DB_HOST, DB_PASSWORD, DB } = process.env;
const prod = NODE_ENV === "production";



const dbConfig: TDbConfig = {
    USER: DB_USER!,
    HOST: DB_HOST!,
    PASSWORD: DB_PASSWORD!,
    DB: DB!,
    dialect: 'mysql',
    pool: {
        max: 15,
        min: 0,
        connectionLimit: 15,
        acquire: 30000,
        idle: 10000,
    },
    dialectOptions: {
        decimalNumbers: true,
        maxPreparedStatements: 100,
    },
};

export default dbConfig;
