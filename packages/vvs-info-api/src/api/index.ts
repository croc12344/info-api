import { Router } from 'express';
import { getTokens, getTokenByAddressHash } from './tokens';
import getPairs from './pairs'
import getSummary from './summary'
import getVersion from './version'
import {mmf} from './supply'

// User-route
const userRouter = Router();
userRouter.get('/version', getVersion);
userRouter.get('/tokens', getTokens);
userRouter.get('/tokens/:address', getTokenByAddressHash);
userRouter.get('/pairs', getPairs);
userRouter.get('/summary', getSummary);
userRouter.get('/supply/mmf', mmf)

// Export the base-router
const baseRouter = Router();
baseRouter.use('', userRouter);
export default baseRouter;