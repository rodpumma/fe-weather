import axios from 'axios'
import { Observable, of } from 'rxjs'
const API_KEY = '4ce456c61a57f4d097728de5b94ae797'
const http = axios.create({
  baseURL: 'http://localhost:5000/v1'
})

const fetchByIp = new Observable((observer) => {
  http.get('/location').then(({data}) => {
    observer.next(data);
    observer.complete();
  }).catch((err) => of(err));
})

const fetchWeather = (city, weatherDays = 'current') => {
  return new Observable((observer) => {
    http.get(`/${weatherDays}/${city}`, { params: {
      units: 'metric',
      lang: 'es' ,
      appid: API_KEY
    }}).then(({data}) => {
      observer.next(data);
      observer.complete();
    }).catch((err) => of(err));
  })
}

export {fetchByIp, fetchWeather}
