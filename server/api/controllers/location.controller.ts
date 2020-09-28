import {Request, Response, NextFunction} from "express";
import locationService from '../services/location.service'

class LocationController {
  public handleLocation = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const locationCityData = await locationService.getLocationByIp()
      res.json(locationCityData)
    } catch (err) {
      return next(new Error(err.message));
    }
  }
}

export default new LocationController();