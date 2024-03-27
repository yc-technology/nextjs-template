import { Metadata } from 'next'

import '~/assets/styles/tailwind.css'
import '@yc-tech/react-component/dist/style.css'

export const metadata: Metadata = {
  title: {
    template: '%s | My App',
    default: 'My App'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full">
      <head />
      <body className="h-full">
        <main className="h-full">{children}</main>
      </body>
    </html>
  )
}
