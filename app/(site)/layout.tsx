import '../globals.css'
import Sidebar from './Sidebar'


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
                <div className='bg-gradient-to-r from-[#170330] to-[#0C0217] h-full text-white w-full'>
                        <Sidebar>
                                {children}
                        </Sidebar>
                </div>
        )
}
