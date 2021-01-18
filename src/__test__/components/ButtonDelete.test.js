import React from 'react';
import { shallow } from 'enzyme';
import ButtonDelete from '../../components/ButtonDelete';

describe('<ButtonDelete />', () => {
  const buttonDelete = shallow(<ButtonDelete />);

  test('ButtonDelete component render', () => {
    expect(buttonDelete.length).toEqual(1);
  });
});