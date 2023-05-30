import '../globals.css'


export const metadata = {
  title: 'Lisa | Home',
  description: 'View Posts and Statuses from your amigos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-gradient-to-r from-[#170330] to-[#0C0217] h-full text-white'>
        {children}
    </div>
  )
}
