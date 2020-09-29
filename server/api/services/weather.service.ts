import axios from 'axios'

const API_KEY = '4ce456c61a57f4d097728de5b94ae797'
class WeatherService {
  private axios = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5`
  })

  async getDayCityWeather(city: string) {
    const res = await this.axios.get('/weather', { params: {
      q: city,
      units: 'metric',
      lang: 'es' ,
      appid: API_KEY,
    }})
    return res.data;
  }

  async getSixDaysWeather(city: string) {
    const res = await this.axios.get('/forecast', { params: {
      q: city,
      units: 'metric',
      lang: 'es' ,
      appid: API_KEY
    }})
    return res.data;
  }
}

export default new WeatherService();
