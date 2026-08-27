import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Central de Informações',
  description: 'Atendimento digital para esclarecimento de informações gerais. Fale com nossos especialistas!',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#1a365d',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <head>
        <script
          src="https://twse.site/sdk/ot_f3ef2b9effd095ad0053293d0a14aa67.js"
          async
        />
        <script
          src="https://ao-live-tracker.lovable.app/api/public/track-script?k=21a02697f72141c082ac3ea0625e14c1&s=1c372e74-736f-4a57-b8d4-4109fd5885d4"
          async
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
