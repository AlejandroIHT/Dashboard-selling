import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../components/Table';

describe('<Table />', () => {
  const table = shallow(<Table />);

  test('Table component render', () => {
    expect(table.length).toEqual(1);
  });
});