import { Metadata } from 'next'

import '~/assets/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s | My App',
    default: 'My App'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
