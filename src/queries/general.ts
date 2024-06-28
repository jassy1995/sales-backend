import { Agent, MerchantRequest, Region } from '../models';
import { TAgent, TRegion, TRequest } from '../types/general';

const GeneralQueries = {
    async createMerchantRequest(data: TRequest) {
        const { request_id, agent_phone, ...payload } = data;
        const request = await MerchantRequest.findOne({ where: { request_id } });
        const agent: any = await Agent.findOne({ where: { phone: agent_phone } });
        if (request) {
            return { message: "The merchant has already been assigned to someone", status: false, code: 409 };
        }
        if (!agent) {
            return { message: `No Agent found! Agent with the phone number ${agent_phone} does not exist`, status: false, code: 409 };
        }
        const newRequest: any = await MerchantRequest.create({ request_id, agent_phone, ...payload });
        return { data: newRequest, message: 'created', status: true, code: 201 };

    },
    async createAgent(data: TAgent) {
        const { phone, first_name, last_name, ...payload } = data;
        const isExist = await Agent.findOne({ where: { phone } });
        if (isExist) {
            return { message: "The agent has already been created", status: false, code: 409 };
        }
        const result: any = await Agent.create({ phone, first_name: first_name.toLowerCase(), last_name: last_name.toLowerCase(), ...payload });

        return { data: result, message: 'created', status: true, code: 201 };

    },
    async createRegion(data: TRegion) {
        const { name, ...payload } = data;
        const isExist = await Region.findOne({ where: { name: name.toLowerCase() } });
        if (isExist) {
            return { message: "The region has already been created", status: false, code: 409 };
        }
        const result: any = await Region.create({ name, ...payload });

        return { data: result, message: 'created', status: true, code: 201 };
    },

    async getMerchantRequest(data: { agent_phone: string }) {
        const result: any = await MerchantRequest.findAll({ where: { agent_phone: data.agent_phone, status: '1' } });
        return { data: result, message: 'retrieved', status: true, code: 200 };
    },
    async getMerchantRequests() {
        const result: any = await MerchantRequest.findAll({ where: { status: '1' } });
        return { data: result, message: 'retrieved', status: true, code: 200 };
    },
    async getMerchantRequestOnBoardedByAgent(data: { agent_phone: string }) {
        const result: any = await MerchantRequest.findAll({ where: { agent_phone: data.agent_phone, is_onboarded_by_agent: true, status: '1' } });

        return { data: result, message: 'retrieved', status: true, code: 200 };
    },
    async getMerchantRequestOnBoardedByAgents() {
        MerchantRequest.belongsTo(Agent, { targetKey: 'phone', foreignKey: 'agent_phone' });

        const result: any = await MerchantRequest.findAll({
            where: { is_onboarded_by_agent: true, status: '1' },
            include: [{
                model: Agent,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }]
        });

        return { data: result, message: 'retrieved', status: true, code: 200 };
    },
    async getAgent() {

        Agent.hasMany(MerchantRequest, { sourceKey: 'phone', foreignKey: 'agent_phone' });
        const result: any = await Agent.findAll({
            include: [MerchantRequest],
            raw: false,
        });
        return { data: result, message: 'retrieved', status: true, code: 200 };
    },
    async getRegion() {
        const result: any = await Region.findAll();
        return { data: result, message: 'retrieved', status: true, code: 200 };
    },

    async reassignMerchantRequest(data: any) {
        const { request_id, agent_phone } = data;
        let request = await MerchantRequest.findOne({ where: { request_id } });
        if (!request) {
            return { message: 'no request found', status: false, code: 404 };
        }

        await MerchantRequest.update({ agent_phone }, {
            where: { request_id },
        });
        const returnRequest = await MerchantRequest.findOne({
            where: { request_id },
        });

        return { data: returnRequest, message: 'successfully reassigned', status: true, code: 200 };
    },
    async updateRegion(data: any) {
        const { region_id, ...payload } = data;
        let isRowExist = await Region.findByPk(region_id);
        if (!isRowExist) {
            return { message: 'no region found', status: false, code: 404 };
        }

        const updatedRow = await Region.update(payload, {
            where: { id: region_id },
        });

        if (updatedRow[0]) return { message: 'successfully updated', status: true, code: 200 };
        else return { message: 'operation failed! Try again', status: false, code: 409 };
    },
    async closeRequest(data: any) {
        const { id } = data;
        const isRowExist = await MerchantRequest.findByPk(id);
        if (!isRowExist) {
            return { message: 'no record found', status: false, code: 404 };
        }

        const updatedRow = await MerchantRequest.update({ status: '-1' }, {
            where: { id },
        });

        if (updatedRow[0]) return { message: 'successfully closed', status: true, code: 200 };
        else return { message: 'operation failed! Try again', status: false, code: 409 };
    }

};

export default GeneralQueries;
