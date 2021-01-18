import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../components/Layout';

describe('<Header />', () => {
  const layout = shallow(<Layout />);

  test('Layout component render', () => {
    expect(layout.length).toEqual(1);
  });
});