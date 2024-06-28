import { NextFunction, Request, Response } from 'express';
import GeneralService from '../services/general';

const GeneralController = {
  async createMerchantRequest(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, ...response } = await GeneralService.createMerchantRequest(req.body);
      return res.status(code).json(response);
    } catch (e: any) {
      return next(e);
    }
  },
  async createAgent(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, ...response } = await GeneralService.createAgent(req.body);
      return res.status(code).json(response);
    } catch (e: any) {
      return next(e);
    }
  },
  async createRegion(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, ...response } = await GeneralService.createRegion(req.body);
      return res.status(code).json(response);
    } catch (e: any) {
      return next(e);
    }
  },
  async getMerchantRequest(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, ...response } = await GeneralService.getMerchantRequest(req.query);
      return res.status(code).json(response);
    } catch (e: any) {
      return next(e);
    }
  },
  async getMerchantRequests(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, ...response } = await GeneralService.getMerchantRequests();
      return res.status(code).json(response);
    } catch (e: any) {
      return next(e);
    }
  },
  async getMerchantRequestOnBoardedByAgent(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, ...response } = await GeneralService.getMerchantRequestOnBoardedByAgent(req.query);
      return res.status(code).json(response);
    } catch (e: any) {
      return next(e);
    }
  },
  async getMerchantRequestOnBoardedByAgents(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, ...response } = await GeneralService.getMerchantRequestOnBoardedByAgents();
      return res.status(code).json(response);
    } catch (e: any) {
      return next(e);
    }
  },
  async getAgent(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, ...response } = await GeneralService.getAgent();
      // return response;
      return res.status(code).send(response);
    } catch (e: any) {
      return next(e);
    }
  },
  async getRegion(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, ...response } = await GeneralService.getRegion();
      return res.status(code).json(response);
    } catch (e: any) {
      return next(e);
    }
  },
  async reassignMerchantRequest(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, ...response } = await GeneralService.reassignMerchantRequest(req.body);
      return res.status(code).json(response);
    } catch (e: any) {
      return next(e);
    }
  },
  async updateRegion(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, ...response } = await GeneralService.updateRegion(req.body);
      return res.status(code).json(response);
    } catch (e: any) {
      return next(e);
    }
  },
  async closeRequest(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, ...response } = await GeneralService.closeRequest(req.body);
      return res.status(code).json(response);
    } catch (e: any) {
      return next(e);
    }
  },
};

export default GeneralController;
