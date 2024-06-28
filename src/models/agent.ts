import { Sequelize } from "sequelize";

const Agent = (sequelize: Sequelize, DataTypes: typeof import("sequelize/types/data-types")) =>
    sequelize.define("agent", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        region_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

export default Agent;
