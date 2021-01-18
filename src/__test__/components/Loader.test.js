import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../../components/Loader';

describe('<Header />', () => {
  const loader = shallow(<Loader />);

  test('Loader component render', () => {
    expect(loader.length).toEqual(1);
  });
});