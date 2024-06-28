import { TAgent, TRegion, TRequest } from '../types/general';
import GeneralQueries from '../queries/general';
import dotenv from "dotenv";
dotenv.config();


const GeneralService = {
    async createMerchantRequest(data: TRequest) {
        return await GeneralQueries.createMerchantRequest(data);
    },
    async createAgent(data: TAgent) {
        return await GeneralQueries.createAgent(data);
    },
    async createRegion(data: TRegion) {
        return await GeneralQueries.createRegion(data);
    },
    async getMerchantRequest(data: any) {
        return await GeneralQueries.getMerchantRequest(data);
    },
    async getMerchantRequests() {
        return await GeneralQueries.getMerchantRequests();
    },
    async getMerchantRequestOnBoardedByAgent(data: any) {
        return await GeneralQueries.getMerchantRequestOnBoardedByAgent(data);
    },
    async getMerchantRequestOnBoardedByAgents() {
        return await GeneralQueries.getMerchantRequestOnBoardedByAgents();
    },
    async getAgent() {
        return await GeneralQueries.getAgent();
    },
    async getRegion() {
        return await GeneralQueries.getRegion();
    },
    async reassignMerchantRequest(data: { request_id: number, agent_phone: string }) {
        return await GeneralQueries.reassignMerchantRequest(data);
    },
    async updateRegion(data: { region_id: number, regional_header: string }) {
        return await GeneralQueries.updateRegion(data);
    },
    async closeRequest(data: { id: number }) {
        return await GeneralQueries.closeRequest(data);
    },
};

export default GeneralService;
