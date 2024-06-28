import { Sequelize, DataTypes, Op, QueryTypes } from 'sequelize';
import dbConfig from "../config/db";
import _MerchantRequest from "./merchant-request";
import _Agent from "./agent";
import _Region from "./region";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    logging: false,
    pool: { ...dbConfig.pool }
});

const MerchantRequest = _MerchantRequest(sequelize, DataTypes);
const Agent = _Agent(sequelize, DataTypes);
const Region = _Region(sequelize, DataTypes);

export {
    sequelize,
    Sequelize,
    QueryTypes,
    Op,
    DataTypes,
    MerchantRequest,
    Agent,
    Region
};
