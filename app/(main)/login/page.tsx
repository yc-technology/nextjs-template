import { Metadata } from 'next'
import { Button } from '~/components/Button'

export const metadata: Metadata = {
  title: 'Login',
  description: 'login for pater'
}
export default function HomePage() {
  return (
    <div className="px-6">
      <h1 className=" mb-10">login page</h1>
      <Button>login</Button>
    </div>
  )
}
