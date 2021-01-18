import React from 'react';
import { shallow } from 'enzyme';
import CardChartComponent from '../../components/CardChartComponent';

describe('<CardChartComponent />', () => {
  const cardChartComponent = shallow(<CardChartComponent />);

  test('CardChartComponent component render', () => {
    expect(cardChartComponent.length).toEqual(1);
  });
});