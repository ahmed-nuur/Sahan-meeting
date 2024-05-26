import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next'
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "SAHAN ZOOM",
  description: "Vide calling app ",
  icons: {
    icon: '/icons/sahan.jpg',
  }
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout
