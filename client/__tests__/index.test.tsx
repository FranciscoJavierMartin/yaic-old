/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import Home from '../pages/index'
 
 describe('Home', () => {
   it('renders a Navbar', () => {
     render(<Home />)
 
     const heading = screen.getByRole('heading', {
       name: 'Yaic',
     })
 
     expect(heading).toBeInTheDocument()
   })
 })
 