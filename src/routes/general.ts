import express from 'express';
import GeneralController from '../controllers/general';
import validate from '../middlewares/validate';
import { createMerchantRequest, getMerchantRequest, reassignMerchantRequest, createAgent, createRegion, updateRegion, closeRequest } from '../schemas/general';

const router = express.Router();

//create
router.post('/create/assign-merchant', validate(createMerchantRequest), GeneralController.createMerchantRequest);
router.post('/create/agent', validate(createAgent), GeneralController.createAgent);
router.post('/create/region', validate(createRegion), GeneralController.createRegion);

//retrieve
router.get('/retrieve/merchant', validate(getMerchantRequest), GeneralController.getMerchantRequest);
router.get('/retrieve/merchant/by-onboarded-agent', validate(getMerchantRequest), GeneralController.getMerchantRequestOnBoardedByAgent);
router.get('/retrieve/merchants/by-onboarded-agents', GeneralController.getMerchantRequestOnBoardedByAgents);
router.get('/retrieve/merchants', GeneralController.getMerchantRequests);
router.get('/retrieve/agents', GeneralController.getAgent);
router.get('/retrieve/regions', GeneralController.getRegion);

//update
router.put('/update/reassign-merchant', validate(reassignMerchantRequest), GeneralController.reassignMerchantRequest);
router.put('/update/region', validate(updateRegion), GeneralController.updateRegion);
router.put('/update/close', validate(closeRequest), GeneralController.closeRequest);

export default router;
