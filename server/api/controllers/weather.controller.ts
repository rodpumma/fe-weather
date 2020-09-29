import {Request, Response, NextFunction} from "express";

import locationService from '../services/location.service';
import weatherService from '../services/weather.service'
import reduceWeatherDays from '../../shared/transformers/weather-list.transformer'



class WeatherController {
  private getLocationByNameOrIp = async (req: Request, res: Response, next: NextFunction) => {
    return await locationService.getCityByIp();
  }

  public handleCurrent = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const city = req.params && req.params.city
        || await this.getLocationByNameOrIp(req, res, next)
      const response = await weatherService.getDayCityWeather(city);
      res.json(response)
    } catch (err) {
      return next(new Error(err.message));
    }
  }

  public handleForecast = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const city = req.params && req.params.city
        || await this.getLocationByNameOrIp(req, res, next)
      const response = await weatherService.getSixDaysWeather(city)
      response.list = await reduceWeatherDays(response.list)
      res.json(response)
    } catch (err) {
      return next(new Error(err.message));
    }
  }
}

export default new WeatherController();