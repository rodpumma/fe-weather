import React from 'react'
import Select from '../Select'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)
describe('<Select />', () => {
  it('Check <Select /> render correctly', () => {
    const onChange = jest.fn();
    const props = {
      options: ['option one', 'option two'],
      label: 'Test label',
    }
    const { container, getByTestId } = render(
      <Select onChange={onChange} {...props} />,
    );

    expect(getByTestId('select-label')).toHaveTextContent('Test label')
    expect(container.querySelectorAll('option')).toHaveLength(3);

    const optionZero = container
      .querySelectorAll('option')
      .item(0);
    expect(optionZero).toHaveTextContent('Seleciona una cuidad')

    const optionOne = container
      .querySelectorAll('option')
      .item(1);
    expect(optionOne.getAttribute('value')).toEqual('option one');

    const optionTwo = container
      .querySelectorAll('option')
      .item(2);
    expect(optionTwo.getAttribute('value')).toEqual('option two');
  })
})
