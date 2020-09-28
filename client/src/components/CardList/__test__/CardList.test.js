import React from 'react'
import CardList from '../CardList'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import renderer from 'react-test-renderer'

afterEach(cleanup)
describe('<CardList />', () => {
  const props = {
    cards: [
      {
        name: 'test card name one',
        dt_txt: '2020-09-26',
        main: {
          temp_min: 12.8,
          temp_max: 17,
        }
      },
      {
        name: 'test card name two',
        dt_txt: '2020-09-26',
        main: {
          temp_min: 12.8,
          temp_max: 17,
        }
      },
    ]
  }

  it('Check <CardList /> render', () => {
    const { container } = render(
      <CardList {...props} />,
    )
    expect(container.querySelectorAll('Title')).toHaveLength(0)
    expect(container.querySelector('Title'))
      .toBeNull()
  })

  it('<CardList /> matches snapshop', () => {
    const tree = renderer
      .create(<CardList {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
