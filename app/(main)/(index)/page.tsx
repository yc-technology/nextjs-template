import { Metadata } from 'next'
import { Button } from '~/components/Button'
import { Home } from '~/components/Home'

export const metadata: Metadata = {
  title: 'oo',
  description: "It's great to have you here."
}
export default function IndexPage() {
  return (
    <div>
      <h1 className=" mb-10">Welcome to my app!</h1>
      {/* <p>It's great to have you here. {count}</p>
      <Button onClick={() => increment()}>increment</Button>
      <Button onClick={() => decrement()}>decrement</Button> */}
      <Home />
      <Button>Click me</Button>
    </div>
  )
}
