import React from 'react'
import ReactDOM from 'react-dom'
import Title from '../Title'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import renderer from 'react-test-renderer'

afterEach(cleanup)
describe('<Title />', () => {
  it('Check <Title /> render', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Title />, div)
  })
  
  it('Check <Title /> render with text prop', () => {
    const { getByTestId } = render(<Title text='City name' />)
    expect(getByTestId('title')).toHaveTextContent('City name')
  })
  
  it('<Title /> matches snapshop', () => {
    const tree = renderer
      .create(<Title text='City Name' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
