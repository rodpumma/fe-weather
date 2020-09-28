import React from 'react'
import './Select.css'

const Select = ({options, onOptionChange, disabled, label}) => {
  return (
    <>
      <pre data-testid="select-label" className="select__title">{label}</pre>
      <select onChange={onOptionChange} disabled={disabled}>
        <option>Seleciona una cuidad</option>
        {options.map(city => (
          <option key={city} value={city}>
            {city.toUpperCase()}
          </option>
        ))}
      </select>
    </>
  )
}

export default Select