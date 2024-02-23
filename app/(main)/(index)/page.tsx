import { Metadata } from 'next'
import { Button } from '~/components/Button'

export const metadata: Metadata = {
  title: 'oo',
  description: "It's great to have you here."
}
export default function IndexPage() {
  return (
    <div>
      <h1 className=" mb-10">Welcome to my app!</h1>
      <p>It's great to have you here.</p>
      <Button>Click me</Button>
    </div>
  )
}
