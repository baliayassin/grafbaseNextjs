import Navbar from '@/components/Navbar';
import './globals.css';
import Fotter from '@/components/Fotter';

export const metadata = {
  title: 'Flexibble',
  description: 'Show case and discover remarable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
           {children}
        </main>
        <Fotter/>
      </body>
    </html>
  )
}
