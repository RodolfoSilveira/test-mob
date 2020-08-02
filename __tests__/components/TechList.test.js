import React from 'react';

import TeachList from '../../src/components/TechList';
import { render, fireEvent } from '@testing-library/react-native';

describe('TechList', () => {
  it('should be able to add new tech', () => {
    const { getByTestId, getByText } = render(<TeachList />);

    fireEvent.changeText(getByTestId('tech-input'), 'Node.js');
    fireEvent.press(getByText('Adicionar'));

    expect(getByText('Node.js')).toBeTruthy();
    expect(getByTestId('tech-input')).toHaveProp('value', '');
  });
});
