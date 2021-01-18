import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../components/Card';

describe('<Card />', () => {
  const card = shallow(<Card />);

  test('Card component render', () => {
    expect(card.length).toEqual(1);
  });
});