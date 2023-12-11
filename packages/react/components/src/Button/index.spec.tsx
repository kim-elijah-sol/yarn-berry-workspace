import React from 'react'
import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { Button } from '.'

describe('Button 컴포넌트', () => {
  it('컴포넌트가 정상적으로 렌더링 되어야 한다.', async () => {
    render(<Button>버튼</Button>)

    const button = await screen.findByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('버튼')
    expect(button).toHaveStyle('background-color: #5469d1')
  })
})
