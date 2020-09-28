import axios from 'axios'

class LocationService {
  private axios = axios.create({
    baseURL: 'http://ip-api.com/json'
  })

  async getLocationByIp() {
    const res = await this.axios.get('')
    return res.data;
  }

  async getCityByIp() {
    const { data } = await this.axios.get('')
    return data.city || '';
  }
}

export default new LocationService();
