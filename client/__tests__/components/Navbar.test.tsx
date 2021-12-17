import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '@/components/navbar/Navbar';

describe('Navbar', () => {
  test('Render', () => {
    render(<Navbar />);
    screen.getByText('Yaic');
  });
});
