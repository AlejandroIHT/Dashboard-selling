import React from 'react';
import { shallow } from 'enzyme';
import Board from '../../components/Board';

describe('<Board />', () => {
  const board = shallow(<Board />);

  test('Board component render', () => {
    expect(board.length).toEqual(1);
  });
});