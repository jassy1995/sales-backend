import express, { NextFunction, Request, Response } from 'express';
import general from "./general";
import logger from '../helpers/logger';
const router = express.Router();

//defeault route
router.get('/', (_req, res) => {
  return res.status(200).json({ success: true, message: 'Welcome to my nodes typescrpt API' });
});

//app routes
router.use('/api', general);

//not found route
router.use((_req, res) => {
  return res.status(404).json({ success: false, message: 'Route does not exist' });
});

//error handling route
router.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  logger.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong, kindly contact support if the problem persists',
    error: err
  });
});

export default router;
