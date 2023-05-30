import './globals.css'


export const metadata = {
  title: 'Lisa',
  description: 'Chat with your friends across the whole world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
