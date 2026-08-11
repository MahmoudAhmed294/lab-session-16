import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the Get started heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Welcome to Ci CD pipeline with React and Vite' })).toBeInTheDocument()
  })

})
