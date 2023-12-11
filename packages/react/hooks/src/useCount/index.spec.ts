import { act, renderHook } from '@testing-library/react-hooks'
import { useCount } from '.'

describe('useCount', () => {
  it('useCount 의 초기 값은 0 이다.', () => {
    const { result } = renderHook(() => useCount())

    expect(result.current.count).toBe(0)
  })

  it('increment 함수를 실행하면 count 값이 1 증가한다.', () => {
    const { result } = renderHook(() => useCount())

    act(() => {
      result.current.increment()
    })
    act(() => {
      result.current.increment()
    })
    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(3)
  })

  it('decrement 함수를 실행하면 count 값이 1 감소한다.', () => {
    const { result } = renderHook(() => useCount())

    act(() => {
      result.current.decrement()
    })
    act(() => {
      result.current.decrement()
    })
    act(() => {
      result.current.decrement()
    })

    expect(result.current.count).toBe(-3)
  })
})
