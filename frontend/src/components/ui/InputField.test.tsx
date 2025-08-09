import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import InputField from './InputField'

describe('InputField', () => {
  it('should render without crashing', () => {
    const { container } = render(<InputField />)
    expect(container).toBeTruthy()
  })

  it('should render input element', () => {
    render(<InputField />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
  })

  it('should accept placeholder prop', () => {
    const placeholder = 'Digite seu texto'
    render(<InputField placeholder={placeholder} />)
    const inputElement = screen.getByPlaceholderText(placeholder)
    expect(inputElement).toBeInTheDocument()
  })

  it('should accept value prop', () => {
    const testValue = 'test value'
    render(<InputField value={testValue} readOnly />)
    const inputElement = screen.getByDisplayValue(testValue)
    expect(inputElement).toBeInTheDocument()
  })
})