// src/App.test.tsx
import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('should pass a basic test', () => {
    expect(1 + 1).toBe(2)
  })

  it('should verify that strings work correctly', () => {
    const message = 'Hello, World!'
    expect(message).toBe('Hello, World!')
  })

  it('should handle arrays properly', () => {
    const numbers = [1, 2, 3]
    expect(numbers.length).toBe(3)
    expect(numbers).toContain(2)
  })
})