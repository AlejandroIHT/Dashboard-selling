import React from 'react';
import { shallow } from 'enzyme';
import Search from '../../components/Search';

describe('<Table />', () => {
  const search = shallow(<Search />);

  test('Search component render', () => {
    expect(search.length).toEqual(1);
  });
});