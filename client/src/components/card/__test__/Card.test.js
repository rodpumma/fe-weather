import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../Card'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import renderer from 'react-test-renderer'

afterEach(cleanup)
describe('<Card />', () => {
  const DAYS = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'vienes', 'sabado' ]
  const props = {
    info: {
      dt_txt: '2020-09-26',
      main: {
        temp_min: 12.8,
        temp_max: 17,
      }
    }
  }
  it('Check <Card /> render', () => {
    const { container, getByTestId } = render(
      <Card {...props} />,
    )

    expect(DAYS.includes(getByTestId('day-title').value))
    expect(container.querySelectorAll('pre')).toHaveLength(2)

    expect(container.querySelectorAll('img')).toHaveLength(1)
    const image = container.querySelector('img')
    expect(image.getAttribute('src'))
      .toEqual('weather-image.png')

    expect(getByTestId('min-temp')).toHaveTextContent('12°')
    expect(getByTestId('max-temp')).toHaveTextContent('17°')
    
  })
})
