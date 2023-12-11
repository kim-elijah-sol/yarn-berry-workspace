'use client'

import { useEffect } from 'react'
import { Button } from '@ybw/react-components'
import { sum } from '@ybw/common-utils'

export default function Home() {
  useEffect(() => {
    console.log(sum(1, 2, 3))
  }, [])

  return (
    <main>
      <Button>Click Me</Button>
    </main>
  )
}
