import { Sequelize } from "sequelize";

const MerchantRequest = (sequelize: Sequelize, DataTypes: typeof import("sequelize/types/data-types")) =>
    sequelize.define("merchant_request", {
        request_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        agent_phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        merchant_phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_onboarded_by_agent: {
            type: DataTypes.BOOLEAN,
        },
        request_principal: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        disbursement_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        total_left: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        home_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: '1',
        },

    });

export default MerchantRequest;
