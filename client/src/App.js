import React, { StrictMode, useEffect, useState } from 'react'
import { fetchByIp, fetchWeather } from './services/http.service'
import './App.css'

import { take, tap, mergeMap } from 'rxjs/operators'
import Select from './components/Select/Select'
import CardList from './components/CardList/CardList'
import MOCK_CITIES from './mocks/arg-cities'

export default function App() {
  const [currentWeather, setCurrentWeather] = useState([])
  const [citiesWeather, setCitiesWeather] = useState([]);
  
  useEffect(() => {
    fetchByIp.pipe(
      mergeMap(({city}) => fetchWeather(city, 'forecast')),
      take(1),
      tap((info) => console.info('Weather ByIP', info))
    ).subscribe(info => setCurrentWeather([info]))
  }, [])

  const addCityWeather = evt => {
    evt.preventDefault()
    fetchWeather(evt.target.value).pipe(
      take(1),
      tap((info) => console.info('Weather ByCityName', info))
    )
    .subscribe(info => setCitiesWeather([...citiesWeather, info]))
  }

  return (
    <StrictMode>
      <Select onOptionChange={addCityWeather} label="Agregar ciudad" options={MOCK_CITIES} disabled={citiesWeather.length === 5} />
      <div className="current-weather-cards">
        {currentWeather.length
          ? <CardList name={currentWeather[0].city.name} cards={currentWeather[0].list} />
          : null}
      </div>
      <div className="cities-weather-cards">
        <CardList cards={citiesWeather} />
      </div>
    </StrictMode>
  )
}
