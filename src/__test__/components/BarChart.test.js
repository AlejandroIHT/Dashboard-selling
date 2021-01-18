import React from 'react';
import { shallow } from 'enzyme';
import BarChart from '../../components/BarChart';

describe('<BarChart />', () => {
  const barChart = shallow(<BarChart />);

  test('BarChart component render', () => {
    expect(barChart.length).toEqual(1);
  });
});