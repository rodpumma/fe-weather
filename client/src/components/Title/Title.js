import React from 'react'

const Title = ({text}) => {
  return (
    <pre data-testid='title' className="weather-card__day-header">
      {text}
    </pre>
  )
}

export default Title
