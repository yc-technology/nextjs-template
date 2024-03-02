'use client'

import { useCounterStore } from '~/stores/counterStore'
import { Button } from './Button'
import { exampleAction } from '~/actions/actions'

export function Home() {
  const [count, increment, decrement] = useCounterStore((state) => [
    state.count,
    state.incrementCount,
    state.decrementCount
  ])

  const onServerClick = async () => {
    const v = await exampleAction()
    console.info(v)
  }
  return (
    <div>
      <div>{count}</div>
      <Button onClick={() => increment()}>increment</Button>
      <Button onClick={() => decrement()}>decrement</Button>
      <Button onClick={onServerClick}>server click</Button>
    </div>
  )
}
