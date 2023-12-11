'use client'

import { useEffect } from 'react'
import { Button } from '@ybw/react-components'
import { useCount } from '@ybw/react-hooks'
import { sum } from '@ybw/common-utils'

export default function Home() {
  const { count, increment, decrement } = useCount()

  useEffect(() => {
    console.log(sum(1, 2, 3))
  }, [])

  return (
    <main>
      <p>{count}</p>
      <Button onClick={increment}>+ 1</Button>
      <Button onClick={decrement}>- 1</Button>
    </main>
  )
}
