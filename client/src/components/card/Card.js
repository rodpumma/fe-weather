import React from 'react'
import './Card.css'
import icon from '../../assets/weather-image.png';

const DAYS = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'vienes', 'sabado' ]
const Card = ({info}) => {
  const date = info.dt_txt
    ? new Date(info.dt_txt)
    : new Date();
  return (
    <div className="weather-card__content">
      <div className="weather-card__card">
        <span data-testid="day-title" className="weather-card__day-title">{DAYS[date.getDay()]}</span>
        <img src={icon} className="weather-card__icon" alt="Weather icon"/>
        <div className="weather-card__temp-content">
          <pre className="weather-card__temp-label">min</pre>
          <span data-testid="min-temp" className="weather-card__min-temp">{Math.trunc(info.main.temp_min)}°</span>
          <pre className="weather-card__temp-label">max</pre>
          <span data-testid="max-temp" >{Math.trunc(info.main.temp_max)}°</span>
        </div>
      </div>
    </div>
  )
}

export default Card