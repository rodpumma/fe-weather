import { NextFunction, Router } from 'express';
import locationController from './controllers/location.controller';
import weatherController from './controllers/weather.controller';

const apiRouter = Router();

apiRouter.get('/location', locationController.handleLocation);
apiRouter.get('/current/(:city)?', weatherController.handleCurrent);
apiRouter.get('/forecast/(:city)?', weatherController.handleForecast);

export default apiRouter;
