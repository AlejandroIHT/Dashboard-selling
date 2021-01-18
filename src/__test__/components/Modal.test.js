import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../components/Modal';

describe('<Header />', () => {
  const modal = shallow(<Modal />);

  test('Modal component render', () => {
    expect(modal.length).toEqual(1);
  });
});