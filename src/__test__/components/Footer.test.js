import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Header />', () => {
  const footer = shallow(<Footer />);

  test('Footer component render', () => {
    expect(footer.length).toEqual(1);
  });
});