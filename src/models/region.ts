import { Sequelize } from "sequelize";

const Region = (sequelize: Sequelize, DataTypes: typeof import("sequelize/types/data-types")) =>
    sequelize.define("region", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        regional_header: {
            type: DataTypes.STRING,
        },
    });

export default Region;
