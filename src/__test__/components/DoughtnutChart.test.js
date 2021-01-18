import React from 'react';
import { shallow } from 'enzyme';
import DoughnutChart from '../../components/DoughnutChart';

describe('<DoughnutChart />', () => {
  const doughnutChart = shallow(<DoughnutChart />);

  test('DoughnutChart component render', () => {
    expect(doughnutChart.length).toEqual(1);
  });
});